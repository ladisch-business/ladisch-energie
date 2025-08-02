import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export const fetchServices = async () => {
  const response = await api.get('/services')
  return response.data
}

export const fetchService = async (slug) => {
  const response = await api.get(`/services/${slug}`)
  return response.data
}

export const fetchFAQs = async (category = null) => {
  const params = category ? { category } : {}
  const response = await api.get('/faqs', { params })
  return response.data
}

export const fetchFAQCategories = async () => {
  const response = await api.get('/faqs/categories')
  return response.data
}

export const submitContactForm = async (data) => {
  const response = await api.post('/contact', data)
  return response.data
}

export const submitAppointment = async (data) => {
  const response = await api.post('/appointments', data)
  return response.data
}

export const createCustomer = async (data) => {
  const response = await api.post('/customers', data)
  return response.data
}

export default api
