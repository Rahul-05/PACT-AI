import { create } from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Mock login function (replace with real API later)
  login: async (email, password) => {
    set({ isLoading: true, error: null })
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('YOUR_API_ENDPOINT/login', {...})
      
      // Mock delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data
      const mockUser = {
        id: '1',
        email: email,
        name: 'Test User',
      }
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false })
      return { success: true }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },

  // Mock signup function
  signup: async (name, email, password) => {
    set({ isLoading: true, error: null })
    
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser = {
        id: '1',
        email: email,
        name: name,
      }
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false })
      return { success: true }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
  },
}))

export default useAuthStore
