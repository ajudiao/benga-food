import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi"
import { NavLink } from "react-router-dom"

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                
                {/* Brand Section */}
                <div className="flex flex-col gap-6">
                    <NavLink to="/" className='flex items-center gap-2'>
                        <h1 className="text-3xl font-black italic tracking-tighter">
                            <span className="text-orange-500">BENGA</span>
                            <span className="text-white">FOOD</span>
                        </h1>      
                    </NavLink>
                    <p className="leading-relaxed">
                        O melhor sabor de Luanda direto na sua mesa. Qualidade, rapidez e paixão em cada pedido que preparamos para você.
                    </p>
                    <div className="flex gap-4">
                            <a target="_blank" rel="noopener noreferrer" href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                                <FaFacebookF />
                            </a>
                             <a target="_blank" rel="noopener noreferrer" href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                                <FaInstagram />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                                <FaTwitter />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300">
                                <FaWhatsapp />
                            </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-xl mb-8">Links Rápidos</h3>
                    <ul className="flex flex-col gap-4">
                        <li><NavLink to="/" className="hover:text-orange-500 transition-colors">Início</NavLink></li>
                        <li><NavLink to="/allproducts" className="hover:text-orange-500 transition-colors">Cardápio</NavLink></li>
                        <li><NavLink to="/burger" className="hover:text-orange-500 transition-colors">Hambúrgueres</NavLink></li>
                        <li><NavLink to="/pizza" className="hover:text-orange-500 transition-colors">Pizzas</NavLink></li>
                        <li><NavLink to="/refeicao" className="hover:text-orange-500 transition-colors">Refeições</NavLink></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold text-xl mb-8">Contato</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3">
                            <HiOutlineLocationMarker className="text-orange-500 text-2xl shrink-0" />
                            <span>Rocha Padaria, Luanda, Angola</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <HiOutlinePhone className="text-orange-500 text-2xl shrink-0" />
                            <span>+244 9XX XXX XXX</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <HiOutlineMail className="text-orange-500 text-2xl shrink-0" />
                            <span>contato@bengafood.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold text-xl mb-8">Newsletter</h3>
                    <p className="mb-6">Inscreva-se para receber ofertas exclusivas e novidades.</p>
                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Seu e-mail" 
                                className="w-full bg-zinc-800 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none text-white"
                            />
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20">
                            Inscrever-se
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                <p>© 2026 BengaFood. Todos os direitos reservados.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                </div>
            </div>
        </footer>
    )
}
