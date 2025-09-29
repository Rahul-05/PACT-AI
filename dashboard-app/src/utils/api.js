// Placeholder for future API integration
// This will connect to your AWS backend later

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const api = {
  // Auth endpoints
  login: async (email, password) => {
    // TODO: Implement actual API call
    // return fetch(`${API_BASE_URL}/auth/login`, {...})
    throw new Error('API not implemented yet')
  },

  signup: async (name, email, password) => {
    // TODO: Implement actual API call
    throw new Error('API not implemented yet')
  },

  // Dashboard endpoints
  getDashboardData: async () => {
    // TODO: Implement actual API call
    throw new Error('API not implemented yet')
  },
}
