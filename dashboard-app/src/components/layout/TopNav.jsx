import { Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function TopNav({ breadcrumbs = [] }) {
  const navigate = useNavigate()

  const handleBreadcrumbClick = (path) => {
    if (path) {
      navigate(path)
    }
  }

  const handleNotificationClick = () => {
    // TODO: Open notification panel
    console.log('Notifications clicked')
  }

  return (
    <div className="top-nav">
      {/* Breadcrumbs - Show empty space if no breadcrumbs */}
      <nav className="breadcrumbs">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <div key={index} className="flex items-center gap-2">
              <button
                onClick={() => handleBreadcrumbClick(crumb.path)}
                className={`breadcrumb-item ${isLast ? 'breadcrumb-item--current' : ''}`}
                disabled={isLast}
              >
                {crumb.label}
              </button>

              {!isLast && (
                <span className="breadcrumb-separator">{'>'}</span>
              )}
            </div>
          )
        })}
      </nav>

      {/* Notification Bell - No badge for now */}
      <button
        className="notification-bell"
        onClick={handleNotificationClick}
        aria-label="Notifications"
      >
        <Bell size={20} className="notification-bell__icon" />
      </button>
    </div>
  )
}

export default TopNav
