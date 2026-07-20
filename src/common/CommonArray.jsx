import { CalendarDays, ClipboardList, LayoutDashboard, Scissors, Settings, Sparkles, Users , Images,} from 'lucide-react'

export const MainMenu = [
    {
        displayname: "Dashboard",
        route: "/dashboard",
        isOpen: false,
        view: true,
        icon: CalendarDays,
    },
    // {
    //     displayname: "Inquiry",
    //     route: "/inquiry",
    //     isOpen: false,
    //     view: true,
    //     icon: ClipboardList,
    // },
    // {
    //     displayname: "Appointments",
    //     route: "/appointments",
    //     isOpen: false,
    //     view: true,
    //     icon: LayoutDashboard
    // },
    {
        displayname: "Our Services",
        route: "/our-services",
        isOpen: false,
        view: true,
        icon: Scissors,
    },
    {
        displayname: "Gallery",
        route: "/gallery",
        isOpen: false,
        view: true,
        icon: Images,
    },
    // {
    //     displayname: "Customers",
    //     route: "/customers",
    //     isOpen: false,
    //     view: true,
    //     icon: Settings,
    // },
    // {
    //     displayname: "Staff",
    //     route: "/staff",
    //     isOpen: false,
    //     view: true,
    //     icon: Sparkles,
    // },
    // {
    //     displayname: "Settings",
    //     route: "/settings",
    //     isOpen: false,
    //     view: true,
    //     icon: Users,
    // },
]
