import { useState } from 'react'
import { useSchedule } from '../../hooks/useSchedule'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
  'All Levels': 'bg-blue-100 text-blue-700',
}

export default function ScheduleSection() {
  const { schedules, loading, error, connected } = useSchedule()
  const [activeDay, setActiveDay] = useState('Monday')

  const activeSchedule = schedules.find((s) => s.day === activeDay)

  return (
    <section id="schedule" className="section-padding bg-sage-900 text-white">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-sage-400" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-sage-400">Live Updates</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white leading-tight">
              Class <em className="text-sage-300">Schedule</em>
            </h2>
            <p className="font-body text-sage-400 mt-3 text-sm leading-relaxed max-w-md">
              All timings are updated in real-time. Refresh is never needed — changes appear instantly.
            </p>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
            />
            <span className="font-body text-xs tracking-widest uppercase text-sage-400">
              {connected ? 'Live' : 'Offline'}
            </span>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                activeDay === day
                  ? 'bg-sage-500 text-white'
                  : 'bg-sage-800 text-sage-400 hover:bg-sage-700 hover:text-white'
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-2 border-sage-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-body text-sm text-sage-400">Loading schedule…</p>
          </div>
        ) : error ? (
          <div className="py-16 text-center">
            <p className="font-body text-sage-400 text-sm">{error}</p>
            <p className="font-body text-sage-600 text-xs mt-2">Make sure the backend server is running.</p>
          </div>
        ) : !activeSchedule || activeSchedule.classes.length === 0 ? (
          <div className="py-16 text-center border border-sage-700 rounded-sm">
            <p className="font-display text-2xl text-sage-500 italic">No classes scheduled</p>
            <p className="font-body text-sm text-sage-600 mt-2">Check back soon or contact Mansi for private sessions.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeSchedule.classes.map((cls) => (
              <div
                key={cls._id}
                className="bg-sage-800 border border-sage-700 rounded-sm p-6 hover:bg-sage-750 hover:border-sage-500 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-body text-xs tracking-widest uppercase text-sage-400 mb-1">
                      {cls.time}
                    </div>
                    <h3 className="font-display text-xl text-white group-hover:text-sage-200 transition-colors">
                      {cls.name}
                    </h3>
                  </div>
                  <span className={`tag-level ${levelColors[cls.level] || 'bg-sage-700 text-sage-300'}`}>
                    {cls.level}
                  </span>
                </div>

                {cls.description && (
                  <p className="font-body text-sm text-sage-400 leading-relaxed mb-4">{cls.description}</p>
                )}

                <div className="flex items-center gap-6 pt-4 border-t border-sage-700">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body text-xs text-sage-500">{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-body text-xs text-sage-500">{cls.spots} spots</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <svg className="w-3.5 h-3.5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-body text-xs text-sage-500">{cls.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 pt-10 border-t border-sage-700 text-center">
          <p className="font-body text-sage-400 text-sm mb-6">
            Interested in joining? Reach out to Mansi directly to reserve your spot.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/919650340359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-body text-xs tracking-wider uppercase transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Mansi
            </a>
            <a
              href="mailto:mansi@yoga.com"
              className="flex items-center gap-2 border border-sage-500 text-sage-300 hover:bg-sage-700 px-6 py-3 font-body text-xs tracking-wider uppercase transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
