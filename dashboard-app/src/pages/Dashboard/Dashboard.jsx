import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import WelcomeHeader from '../../components/dashboard/WelcomeHeader'
import AIInputBox from '../../components/dashboard/AIInputBox'
import FeatureGrid from '../../components/dashboard/FeatureGrid'
import useAuthStore from '../../store/authStore'

function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [selectedTool, setSelectedTool] = useState('text-suitability')

  const breadcrumbs = [
    { label: 'Dashboard', path: null }
  ]

  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId)
  }

  const handleSend = (text, tool) => {
    // Navigate to lesson plan workspace with text and tool info
    navigate(`/lesson-plan-workspace/new`, {
      state: { text, tool }
    })
  }

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div style={{ padding: '24px' }}>
        <div className="dashboard-container">
          <WelcomeHeader userName={user?.name || 'User'} />
          <AIInputBox
            selectedTool={selectedTool}
            onSend={handleSend}
          />
          <FeatureGrid
            selectedTool={selectedTool}
            onToolSelect={handleToolSelect}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
