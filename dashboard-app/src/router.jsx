import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import SampleLessons from './pages/SampleLessons'
import MyLessons from './pages/MyLessons'
import Classrooms from './pages/Classrooms'
import Support from './pages/Support'
import NotFound from './pages/NotFound'
import useAuthStore from './store/authStore'

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return children
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sample-lessons"
        element={
          <ProtectedRoute>
            <SampleLessons />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-lessons"
        element={
          <ProtectedRoute>
            <MyLessons />
          </ProtectedRoute>
        }
      />
      <Route
        path="/classrooms"
        element={
          <ProtectedRoute>
            <Classrooms />
          </ProtectedRoute>
        }
      />
      <Route
        path="/support"
        element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        }
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
