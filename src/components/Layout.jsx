import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { MainMenu } from '../common/CommomArray'

const Layout = () => {
  const [mainMenu] = useState(MainMenu)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  const handleSidebarToggle = () => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarExpanded((prev) => !prev)
    }
  }

  return (
    <div className={`admin_layout side_bar ${isSidebarExpanded ? '' : 'active'}`} id="open">
      <Sidebar
        MainMenu={mainMenu}
    
        isOpen={isSidebarOpen}
        isExpanded={isSidebarExpanded}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className={`layout_content main anim ${isSidebarExpanded ? '' : 'layout_content_collapsed'}`}>
        <Header
          title="Dashboard"
          isOpen={isSidebarExpanded}
          onMenuClick={handleSidebarToggle}
        />
        <div className="py-5 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
