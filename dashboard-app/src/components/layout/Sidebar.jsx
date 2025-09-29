import { useNavigate, useLocation } from 'react-router-dom'
import { House, FileSearch2, BookOpenText, Backpack, BadgeHelp, DoorOpen, User } from 'lucide-react'
import useAuthStore from '../../store/authStore'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuthStore()

  const navigationItems = [
    { name: 'Dashboard', icon: House, path: '/dashboard' },
    { name: 'Sample Lessons', icon: FileSearch2, path: '/sample-lessons' },
    { name: 'My Lessons', icon: BookOpenText, path: '/my-lessons' },
    { name: 'Classrooms', icon: Backpack, path: '/classrooms' },
  ]

  const bottomItems = [
    { name: 'Support', icon: BadgeHelp, path: '/support' },
    { name: 'Logout', icon: DoorOpen, action: 'logout' },
  ]

  const isActive = (path) => location.pathname === path

  const handleNavigation = (item) => {
    if (item.action === 'logout') {
      logout()
      navigate('/login')
    } else {
      navigate(item.path)
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* Logo Section */}
        <button
          onClick={() => navigate('/dashboard')}
          className="logo-section"
        >
          <div className="logo-section__icon">
            <span className="logo-section__icon-text">PA</span>
          </div>
          <span className="logo-section__text">PACT + AI</span>
        </button>

        {/* Navigation Items */}
        <nav className="nav">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`nav-item ${active ? 'nav-item--active' : ''}`}
              >
                <Icon size={20} className="nav-item__icon" />
                <span className="nav-item__text">{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="sidebar__bottom">
        {/* Support & Logout */}
        <nav className="nav">
          {bottomItems.map((item) => {
            const Icon = item.icon
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="nav-item"
              >
                <Icon size={20} className="nav-item__icon" />
                <span className="nav-item__text">{item.name}</span>
              </button>
            )
          })}
        </nav>

        {/* User Profile Card */}
        <button
          className="profile-card"
          onClick={() => {
            console.log('Profile clicked')
          }}
        >
          <div className="profile-card__avatar">
            <User size={20} className="nav-item__icon" />
          </div>
          
          <div className="profile-card__info">
            <span className="profile-card__name">
              {user?.name || 'User Name'}
            </span>
            <span className="profile-card__email">
              {user?.email || 'user@email.com'}
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
