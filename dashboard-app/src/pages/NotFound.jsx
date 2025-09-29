import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center">
        <h1 className="text-hero font-bold text-text-primary mb-4">404</h1>
        <p className="text-secondary text-text-secondary mb-6">Page not found</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
