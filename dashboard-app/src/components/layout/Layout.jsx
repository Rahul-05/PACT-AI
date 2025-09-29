import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-layout__content">
        {children}
      </main>
    </div>
  )
}

export default Layout
