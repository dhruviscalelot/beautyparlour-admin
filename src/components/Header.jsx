import { ChevronLeft, ChevronRight, Menu } from 'lucide-react'

function Header({ title = 'Dashboard', isOpen = true, onMenuClick }) {
    return (
        <header
            className={`h-[70px] bg-white z-40 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ease-in-out`}
        >
            <div className="flex items-center space-x-3 md:space-x-4 flex-1">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-all shadow-sm shrink-0 active:scale-95"
                    aria-label="Toggle sidebar"
                >
                    <span className="lg:hidden flex items-center justify-center">
                        <Menu size={20} />
                    </span>
                    <span className="hidden lg:flex items-center justify-center overflow-hidden">
                        {isOpen ? (
                            <ChevronLeft size={20} />
                        ) : (
                            <ChevronRight size={20} />
                        )}
                    </span>
                </button>

                <div className="flex-1 flex mr-0 md:mr-12">
                    <h2 className="text-lg md:text-xl font-bold text-g1 truncate">{title}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header
