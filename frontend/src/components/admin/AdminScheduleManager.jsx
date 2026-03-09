import { useState, useEffect } from 'react'
import { scheduleAPI } from '../../utils/api'
import { useSchedule } from '../../hooks/useSchedule'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'All Levels']

const emptyClass = {
  time: '',
  name: '',
  instructor: 'Mansi Sharma',
  duration: '60 min',
  level: 'All Levels',
  spots: 15,
  description: '',
}

export default function AdminScheduleManager() {
  const { schedules, loading } = useSchedule()
  const [activeDay, setActiveDay] = useState('Monday')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(emptyClass)
  const [editingClassId, setEditingClassId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [seeding, setSeeding] = useState(false)

  const activeSchedule = schedules.find((s) => s.day === activeDay)
  const classes = activeSchedule?.classes || []

  const showMsg = (text, type = 'success') => {
    setMessage({ text, type })
    setTimeout(() => setMessage(null), 3000)
  }

  const handleSeedDefault = async () => {
    if (!window.confirm('This will replace ALL existing schedules with the default schedule. Continue?')) return
    setSeeding(true)
    try {
      await scheduleAPI.seedDefault()
      showMsg('Default schedule loaded successfully!')
    } catch {
      showMsg('Failed to seed schedule.', 'error')
    } finally {
      setSeeding(false)
    }
  }

  const handleSubmit = async () => {
    if (!formData.time || !formData.name || !formData.duration) {
      showMsg('Time, name, and duration are required.', 'error')
      return
    }
    setSaving(true)
    try {
      if (editingClassId) {
        await scheduleAPI.updateClass(activeDay, editingClassId, formData)
        showMsg('Class updated!')
      } else {
        const updatedClasses = [...classes, formData]
        await scheduleAPI.createOrUpdate({ day: activeDay, classes: updatedClasses })
        showMsg('Class added!')
      }
      setShowForm(false)
      setFormData(emptyClass)
      setEditingClassId(null)
    } catch (err) {
      showMsg('Failed to save class.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (cls) => {
    setFormData({
      time: cls.time,
      name: cls.name,
      instructor: cls.instructor,
      duration: cls.duration,
      level: cls.level,
      spots: cls.spots,
      description: cls.description,
    })
    setEditingClassId(cls._id)
    setShowForm(true)
  }

  const handleDelete = async (classId) => {
    if (!window.confirm('Delete this class?')) return
    try {
      await scheduleAPI.deleteClass(activeDay, classId)
      showMsg('Class deleted.')
    } catch {
      showMsg('Failed to delete class.', 'error')
    }
  }

  const handleDeleteDay = async () => {
    if (!window.confirm(`Delete the entire ${activeDay} schedule?`)) return
    try {
      await scheduleAPI.deleteDay(activeDay)
      showMsg(`${activeDay} schedule cleared.`)
    } catch {
      showMsg('Failed to delete day schedule.', 'error')
    }
  }

  return (
    <div>
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-3xl text-sage-800">Schedule Manager</h2>
          <p className="font-body text-sm text-charcoal/50 mt-1">Changes broadcast live to all visitors instantly</p>
        </div>
        <button
          onClick={handleSeedDefault}
          disabled={seeding}
          className="font-body text-xs tracking-widest uppercase px-5 py-2.5 border border-earth-300 text-earth-600 hover:bg-earth-50 transition-colors duration-200 disabled:opacity-50"
        >
          {seeding ? 'Loading…' : '⚡ Load Default Schedule'}
        </button>
      </div>

      {/* Toast */}
      {message && (
        <div
          className={`mb-6 px-5 py-3 rounded-sm text-sm font-body border ${
            message.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-green-50 border-green-200 text-green-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Day tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {DAYS.map((day) => {
          const hasClasses = schedules.find((s) => s.day === day)?.classes?.length > 0
          return (
            <button
              key={day}
              onClick={() => { setActiveDay(day); setShowForm(false); setEditingClassId(null) }}
              className={`relative font-body text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                activeDay === day
                  ? 'bg-sage-700 text-white'
                  : 'bg-sage-100 text-sage-600 hover:bg-sage-200'
              }`}
            >
              {day.slice(0, 3)}
              {hasClasses && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* Classes list */}
      {loading ? (
        <div className="py-12 text-center">
          <div className="w-8 h-8 border-2 border-sage-400 border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      ) : (
        <div>
          {classes.length === 0 ? (
            <div className="py-12 text-center border-2 border-dashed border-sage-200 rounded-sm">
              <p className="font-display text-xl text-sage-400 italic">No classes for {activeDay}</p>
              <p className="font-body text-xs text-charcoal/40 mt-2">Add the first class below</p>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {classes.map((cls) => (
                <div
                  key={cls._id}
                  className="flex items-center justify-between bg-white border border-sage-100 rounded-sm px-6 py-4 hover:border-sage-300 transition-colors duration-200"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-body text-xs tracking-wider text-sage-500 w-20">{cls.time}</span>
                    <div>
                      <div className="font-body font-semibold text-charcoal text-sm">{cls.name}</div>
                      <div className="font-body text-xs text-charcoal/40">{cls.duration} · {cls.level} · {cls.spots} spots</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(cls)}
                      className="font-body text-xs tracking-wider uppercase px-4 py-2 bg-sage-50 text-sage-700 hover:bg-sage-100 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cls._id)}
                      className="font-body text-xs tracking-wider uppercase px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => { setShowForm(!showForm); setEditingClassId(null); setFormData(emptyClass) }}
              className="btn-primary text-xs"
            >
              {showForm && !editingClassId ? '✕ Cancel' : '+ Add Class'}
            </button>
            {classes.length > 0 && (
              <button
                onClick={handleDeleteDay}
                className="font-body text-xs tracking-wider uppercase px-6 py-3 border border-red-200 text-red-500 hover:bg-red-50 transition-colors duration-200"
              >
                Clear {activeDay}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Add / Edit Form */}
      {showForm && (
        <div className="mt-8 bg-sage-50 border border-sage-200 rounded-sm p-8">
          <h3 className="font-display text-xl text-sage-800 mb-6">
            {editingClassId ? 'Edit Class' : `Add Class — ${activeDay}`}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Time *</label>
              <input
                type="text"
                placeholder="e.g. 7:00 AM"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Class Name *</label>
              <input
                type="text"
                placeholder="e.g. Vinyasa Flow"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Duration *</label>
              <input
                type="text"
                placeholder="e.g. 60 min"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Level</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              >
                {LEVELS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Spots Available</label>
              <input
                type="number"
                min="1"
                value={formData.spots}
                onChange={(e) => setFormData({ ...formData, spots: Number(e.target.value) })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Instructor</label>
              <input
                type="text"
                value={formData.instructor}
                onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-body text-xs tracking-widest uppercase text-charcoal/50 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Brief description of the class..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border border-sage-200 bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500 resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="btn-primary text-xs disabled:opacity-50"
            >
              {saving ? 'Saving…' : editingClassId ? 'Update Class' : 'Add Class'}
            </button>
            <button
              onClick={() => { setShowForm(false); setEditingClassId(null); setFormData(emptyClass) }}
              className="btn-outline text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
