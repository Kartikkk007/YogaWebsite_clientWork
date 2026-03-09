import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminScheduleManager from '../components/admin/AdminScheduleManager'

const ADMIN_PASSWORD = import.meta.env.VITE.ADMIN_PASSWORD

export default function AdminPage() {
  const [entered, setEntered] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = () => {
    if (input === ADMIN_PASSWORD) {
      setEntered(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  if (!entered) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="bg-white border border-sage-200 p-10 rounded-sm w-full max-w-sm text-center shadow-sm">
          {/* Logo */}
          <div className="mb-8">
            <div className="font-display text-4xl text-sage-800 italic">Mansi</div>
            <div className="font-body text-xs tracking-[0.3em] uppercase text-earth-500 mt-1">Yoga & Wellness</div>
          </div>

          <div className="w-10 h-px bg-sage-300 mx-auto mb-8" />

          <p className="font-body text-xs tracking-widest uppercase text-charcoal/40 mb-6">Admin Access</p>

          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full border border-sage-200 px-4 py-3 font-body text-sm focus:outline-none focus:border-sage-500 mb-3 text-center tracking-widest"
          />

          {error && (
            <p className="font-body text-xs text-red-500 mb-4">Incorrect password. Try again.</p>
          )}

          <button onClick={handleLogin} className="btn-primary w-full text-xs mt-2">
            Enter Dashboard
          </button>

          <div className="mt-8">
            <Link to="/" className="font-body text-xs text-charcoal/30 hover:text-sage-600 transition-colors duration-200 tracking-wider">
              ← Back to website
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Admin Header */}
      <header className="bg-sage-900 text-white px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center text-sm">🧘</div>
          <div>
            <div className="font-display text-xl text-white italic">Admin Dashboard</div>
            <div className="font-body text-xs tracking-widest uppercase text-sage-400">Mansi Yoga & Wellness</div>
          </div>
        </div>
        <Link
          to="/"
          className="font-body text-xs tracking-widest uppercase text-sage-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Site
        </Link>
      </header>

      {/* Info banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-6 md:px-12 py-3">
        <p className="font-body text-xs text-amber-700 flex items-center gap-2">
          <span>⚡</span>
          All schedule changes are broadcast <strong>live</strong> to website visitors via Socket.io — no page refresh required.
        </p>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <AdminScheduleManager />
      </main>
    </div>
  )
}