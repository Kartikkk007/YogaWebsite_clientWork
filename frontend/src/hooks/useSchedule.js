import { useState, useEffect } from 'react'
import { scheduleAPI } from '../utils/api'
import socket from '../utils/socket'

export function useSchedule() {
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Initial fetch
    const fetchSchedules = async () => {
      try {
        const res = await scheduleAPI.getAll()
        setSchedules(res.data.data || [])
      } catch (err) {
        setError('Could not load schedules. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchSchedules()

    // Socket events
    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    socket.on('scheduleUpdated', (updatedSchedules) => {
      setSchedules(updatedSchedules)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('scheduleUpdated')
    }
  }, [])

  return { schedules, loading, error, connected }
}
