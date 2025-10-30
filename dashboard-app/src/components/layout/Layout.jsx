import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout({ children, breadcrumbs = [] }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <TopNav breadcrumbs={breadcrumbs} />
      <main className="main-layout__content">
        {children}
      </main>
    </div>
  )
}

export default Layout
