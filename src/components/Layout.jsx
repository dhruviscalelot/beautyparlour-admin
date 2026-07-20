import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { MainMenu } from '../common/CommomArray'
import { useToggleSideBar } from '../Store/Selectors/Sidebar/Sidebar_Selectors'

const Layout = () => {
  const [mainMenu] = useState(MainMenu)

  // Redux state — desktop sidebar expanded/collapsed
  const isOpen = useToggleSideBar()

  return (
    <div className={`admin_layout side_bar ${isOpen ? '' : 'active'}`} id="open">
      <Sidebar MainMenu={mainMenu} />

      <div className={`layout_content main anim ${isOpen ? '' : 'layout_content_collapsed'}`}>
        <Header />
        <div className="py-5 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
