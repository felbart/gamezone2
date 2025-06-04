import logoDark from "../assets/img/logo-dark.svg";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full border-b fixed top-0 z-50 backdrop-blur bg-gray-50/80 dark:bg-gray-950/80">
      <div className="mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoDark} alt="GameZone" width={200} />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link
            to="/"
            className={`transition ${
              isActive("/") ? "text-black dark:text-white font-semibold" : "hover:text-black dark:hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link to="/link1" className="hover:text-black dark:hover:text-white transition">
            Link 01
          </Link>
          <Link to="/link2" className="hover:text-black dark:hover:text-white transition">
            Link 02
          </Link>
          <Link to="/link3" className="hover:text-black dark:hover:text-white transition">
            Link 03
          </Link>
        </nav>

        {/* CTA button */}
        <Link
          to="/contato"
          className="px-4 py-2 text-sm font-medium rounded border border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
