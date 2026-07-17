import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { MainMenu } from '../common/CommomArray'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="admin_layout">
      <button
        type="button"
        className="mobile_sidebar_btn"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={20} />
      </button>

      <Sidebar
        menuList={MainMenu}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="layout_content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
