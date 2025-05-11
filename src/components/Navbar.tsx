// import logoLight from '../assets/img/logo-light.svg'
import logoDark from '../assets/img/logo-dark.svg'
import { Link, useLocation } from 'react-router'


export default function Navbar () {
    
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    
    return (
        <header className='w-full border-b fixed top z-50'>
            <div className='container bg-gray-50 dark:bg-gray-950 mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between'>
                <div>
                    <Link to={'/'}>
                    <img src={logoDark} alt="GameZone" />
                    </Link>
                </div>
                <nav className="flex gap-6 text-sm font-medium text-gray-700">
                <Link
                    to="/"
                    className={isActive("/") ? "text-black font-semibold" : "hover:text-black"}
                >
                    Home
                </Link>
                <Link to="/link1" className="hover:text-black">Link 01</Link>
                <Link to="/link2" className="hover:text-black">Link 02</Link>
                <Link to="/link3" className="hover:text-black">Link 03</Link>
                </nav>
                <Link
                to="/contato"
                className="border border-gray-900 px-4 py-2 text-sm rounded hover:bg-gray-900 hover:text-white transition"
                >
                Contato
                </Link>
            </div>
        </header>
    )
}