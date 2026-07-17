import { NavLink } from 'react-router-dom'
import { CalendarDays, ClipboardList, LayoutDashboard, Scissors, Settings, Sparkles, Users } from 'lucide-react'

const menuIcons = {
    'icon-dashboard': LayoutDashboard,
    'icon-inquiry': ClipboardList,
    'icon-appointments': CalendarDays,
    'icon-services': Scissors,
    'icon-customers': Users,
    'icon-staff': Sparkles,
    'icon-settings': Settings,
}

function Sidebar({ menuList = [], isOpen = false, onClose }) {
    return (
        <>
            {isOpen && <div className="sidebar_overlay" onClick={onClose}></div>}

            <aside className={`sidebar_wrap ${isOpen ? 'sidebar_open' : ''}`}>
                <div className="sidebar_logo">
                    <div className="sidebar_logo_icon">
                        <span className="font-Prata text-24 2xl:text-28 text-primary leading-none">B</span>
                    </div>
                    <div className="ml-3">
                        <h2 className="font-Prata text-20 2xl:text-24 text-g1 leading-tight">Beauty</h2>
                        <p className="text-12 text-g7 uppercase tracking-[0.16em]">Admin Panel</p>
                    </div>
                </div>

                <nav className="sidebar_menu">
                    {menuList.filter((item) => item.view).map((item) => {
                        const Icon = menuIcons[item.icon] || ClipboardList

                        return (
                            <NavLink
                                key={item.displayname}
                                to={item.route}
                                onClick={onClose}
                                className={({ isActive }) => `sidebar_link ${isActive ? 'sidebar_link_active' : ''}`}
                            >
                                <span className="sidebar_icon">
                                    <Icon size={18} />
                                </span>
                                <span>{item.displayname}</span>
                            </NavLink>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
