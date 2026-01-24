import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
    ]
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
                    Minh Hoàng
                </a>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}
                                className="text-white font-medium transition-colors duration-300 relative group">
                                {item.name}
                                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-white hover:text-emerald-400 transition-colors focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg border-b border-white/10 left-0 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? "top-16 opacity-100 visible" : "top-[-400px] opacity-0 invisible"
                }`}>
                <ul className="flex flex-col items-center py-6 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.name} className="w-full text-center">
                            <a href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-lg font-medium text-white hover:text-purple-400 hover:bg-white/5 transition-all duration-300">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
