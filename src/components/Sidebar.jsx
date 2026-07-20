import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useToggleSideBar, useToggleSideBarMobile } from '../Store/Selectors/Sidebar/Sidebar_Selectors'
import { setSidebarOpenMobile } from '../Store/Action/Sidebar/Sidebar_Action'

function Sidebar({ MainMenu = [] }) {
    const dispatch = useDispatch()

    // Redux state
    const isExpanded = useToggleSideBar()      // desktop: true = expanded, false = collapsed
    const isOpenMobile = useToggleSideBarMobile() // mobile: true = open, false = hidden

    const menuList = [...MainMenu]

    return (
        <>
            {/* Mobile overlay — closes sidebar on backdrop click */}
            {isOpenMobile && (
                <div
                    className="sidebar_overlay"
                    onClick={() => dispatch(setSidebarOpenMobile(false))}
                ></div>
            )}

            <aside className={`sidebar_wrap ${isOpenMobile ? 'sidebar_open' : ''} ${isExpanded ? '' : 'sidebar_collapsed'}`}>
                <div className="sidebar_logo">
                    <div className="sidebar_logo_icon">
                        <span className="font-Prata text-24 2xl:text-28 text-primary leading-none">G</span>
                    </div>
                    <div className="sidebar_logo_text ml-3">
                        <h2 className="font-Prata text-20 2xl:text-24 text-g1 leading-tight">Glow & Grace</h2>
                        {/* <p className="text-12 text-g7 uppercase tracking-[0.16em]">Admin Panel</p> */}
                    </div>
                </div>

                <nav className="sidebar_menu">
                    {menuList.filter((item) => item.view).map((item) => {
                        return (
                            <NavLink
                                key={item.displayname}
                                to={item.route}
                                onClick={() => dispatch(setSidebarOpenMobile(false))}
                                className={({ isActive }) => `sidebar_link ${isActive ? 'sidebar_link_active' : ''}`}
                            >
                                <span className="sidebar_icon">
                                    <item.icon size={18} />
                                </span>
                                <span className="sidebar_text">{item.displayname}</span>
                            </NavLink>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
