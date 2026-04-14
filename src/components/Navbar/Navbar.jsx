import React, { useEffect, useState } from "react"
import { GoHeartFill } from "react-icons/go"
import { HiShoppingBag } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"
import { TbMenu2, TbMenu3 } from "react-icons/tb"
import { NavLink } from "react-router-dom"

export function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinkClass = ({isActive}) => 
        `font-semibold tracking-wider transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`;

    return (
        <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
            <nav className='max-w-7xl px-6 mx-auto flex justify-between items-center'>
                <NavLink to="/" className='flex items-center gap-2'>
                   <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter">
                       <span className="text-orange-500">BENGA</span>
                       <span className="text-zinc-800">FOOD</span>
                   </h1>      
                </NavLink>

                {/** Desktop Menu */}
                <ul className="hidden md:flex items-center gap-x-8">
                    <li><NavLink to="/" className={navLinkClass}>Início</NavLink></li>
                    <li><NavLink to="/allproducts" className={navLinkClass}>Cardápio</NavLink></li>
                    <li><NavLink to="/burger" className={navLinkClass}>Burgers</NavLink></li>
                    <li><NavLink to="/pizza" className={navLinkClass}>Pizzas</NavLink></li>
                    <li><NavLink to="/refeicao" className={navLinkClass}>Refeições</NavLink></li>
                </ul>

                {/** Nav Actions */}
                <div className="flex items-center gap-x-4 md:gap-x-6">
                    {/** Search Bar (Desktop) */}
                    <div className="hidden lg:flex items-center bg-zinc-100 rounded-full px-4 py-2 border border-transparent focus-within:border-orange-500 transition-all">
                        <input 
                            type="text" 
                            placeholder="Buscar sabor..." 
                            className="bg-transparent border-none focus:outline-none text-sm w-32 xl:w-48"
                        />
                        <IoSearch className="text-zinc-400 text-xl cursor-pointer hover:text-orange-500" />
                    </div>

                    <div className="flex items-center gap-x-3 md:gap-x-4">
                        <button className="text-zinc-600 hover:text-red-500 transition-colors relative">
                            <GoHeartFill className="text-2xl" />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </button>
                        <button className="text-zinc-600 hover:text-orange-500 transition-colors relative">
                            <HiShoppingBag className="text-2xl" />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </button>
                        
                        {/** Mobile Toggle */}
                        <button className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
                            { showMenu ? <TbMenu3 /> : <TbMenu2 /> }
                        </button>
                    </div>
                </div>

                {/** Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowMenu(false)}></div>
                
                {/** Mobile Menu Drawer */}
                <ul className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 p-8 flex flex-col gap-y-6 shadow-2xl transition-transform duration-300 md:hidden ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-bold text-xl">Menu</h2>
                        <button onClick={() => setShowMenu(false)} className="text-3xl text-zinc-800"><TbMenu3 /></button>
                    </div>
                    <li><NavLink to="/" onClick={() => setShowMenu(false)} className="text-lg font-medium text-zinc-800 block border-b pb-2">Início</NavLink></li>
                    <li><NavLink to="/allproducts" onClick={() => setShowMenu(false)} className="text-lg font-medium text-zinc-800 block border-b pb-2">Cardápio Completo</NavLink></li>
                    <li><NavLink to="/burger" onClick={() => setShowMenu(false)} className="text-lg font-medium text-zinc-800 block border-b pb-2">Hambúrgueres</NavLink></li>
                    <li><NavLink to="/pizza" onClick={() => setShowMenu(false)} className="text-lg font-medium text-zinc-800 block border-b pb-2">Pizzas</NavLink></li>
                    <li><NavLink to="/refeicao" onClick={() => setShowMenu(false)} className="text-lg font-medium text-zinc-800 block border-b pb-2">Refeições</NavLink></li>
                    
                    <div className="mt-auto pt-8">
                        <div className="flex items-center bg-zinc-100 rounded-xl px-4 py-3 mb-4">
                            <input type="text" placeholder="Pesquisar..." className="bg-transparent flex-1 focus:outline-none" />
                            <IoSearch className="text-zinc-500 text-xl" />
                        </div>
                        <p className="text-center text-zinc-400 text-sm">© 2026 BengaFood</p>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
