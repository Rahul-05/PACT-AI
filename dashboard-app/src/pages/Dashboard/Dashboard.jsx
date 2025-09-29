import Layout from '../../components/layout/Layout'
import useAuthStore from '../../store/authStore'

function Dashboard() {
  const { user } = useAuthStore()

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-hero font-semibold text-text-primary mb-8">
            Dashboard
          </h1>
          
          <div className="bg-white rounded-lg border border-border-primary p-6">
            <p className="text-secondary text-text-secondary">
              Welcome, {user?.name || 'User'}!
            </p>
            <p className="text-support text-text-secondary mt-2">
              This is your dashboard placeholder. Components will be built here.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
