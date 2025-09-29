import { create } from 'zustand'

const useDashboardStore = create((set) => ({
  dashboardData: null,
  filters: {},
  isLoading: false,

  setDashboardData: (data) => set({ dashboardData: data }),
  setFilters: (filters) => set({ filters }),
  setLoading: (isLoading) => set({ isLoading }),
}))

export default useDashboardStore
