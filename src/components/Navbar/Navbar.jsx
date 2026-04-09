import React, { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoHeartFill } from "react-icons/go"
import { HiShoppingBag } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"
import { TbMenu2, TbMenu3 } from "react-icons/tb"

export function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    const toglleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''}`}>
            <nav className='max-w-350 px-10 mx-auto md:h-[14vh] h-[12vh] items-center flex justify-between'>
                <a href="#" className='text-3xl font-bold'>
                    <span className="text-orange-500">B</span>enga<span className="text-orange-500">F</span>ood
                </a>
                {/** Desktop Menu */}
                <ul className="md:flex items-center gap-x-15 hidden">
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-orange-500">Início</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Processos</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contato</a>
                    </li>
                </ul>

                {/** Nav Actions */}
                <div className="flex items-center gap-x-5">
                    {/** Input Field */}
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input type="text" name="search" placeholder="Pesquisar..." id="search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                        <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>

                    </div>
                    <a href="#" className="text-zinc-500 text-2xl">
                        <GoHeartFill />
                    </a>
                    <a href="#" className="text-zinc-500 text-2xl">
                        <HiShoppingBag />
                    </a>

                    <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toglleMenu}>
                        
                        { showMenu ? <TbMenu3 /> : <TbMenu2 /> }
                    </a>
                </div>


                {/** Mobile Menu */}
                <ul className={`flex flex-col gap-y-12 bg-orange-500/50 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ''}`}>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-orange-500">Início</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Processos</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contato</a>
                    </li>

                    {/** Nav Actions */}
                    <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                        <input type="text" name="search" placeholder="Pesquisar..." id="search" autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                        <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </li>


                </ul>
            </nav>
        </header>
    )
}