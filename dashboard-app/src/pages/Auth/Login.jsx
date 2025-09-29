import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

function Login() {
  const navigate = useNavigate()
  const { login, isLoading } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(email, password)
    if (result.success) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-md">
        <h1 className="text-hero font-semibold text-text-primary mb-8 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border-primary rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border-primary rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className="text-support text-text-secondary mt-4 text-center">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-brand-primary font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
