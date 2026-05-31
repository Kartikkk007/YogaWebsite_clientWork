import { useState, useEffect } from 'react'
import { scheduleAPI } from '../utils/api'

export function useSchedule() {
  const [schedules, setSchedules] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [connected] = useState(false)

  useEffect(() => {
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
  }, [])

  return { schedules, loading, error, connected }
}
