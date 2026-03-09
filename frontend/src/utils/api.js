import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : '/api'

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

export const scheduleAPI = {
  getAll: () => api.get('/schedules'),
  getByDay: (day) => api.get(`/schedules/${day}`),
  createOrUpdate: (data) => api.post('/schedules', data),
  updateClass: (day, classId, data) => api.put(`/schedules/${day}/class/${classId}`, data),
  deleteClass: (day, classId) => api.delete(`/schedules/${day}/class/${classId}`),
  deleteDay: (day) => api.delete(`/schedules/${day}`),
  seedDefault: () => api.post('/schedules/seed/default'),
}

export default api
