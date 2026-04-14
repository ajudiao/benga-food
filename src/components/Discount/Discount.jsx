import { Button } from "../Button/Button";
import benga from '../../assets/benga.png'

export function Discount() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-[3rem] overflow-hidden relative shadow-2xl">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                <div className="grid lg:grid-cols-2 items-center relative z-10">
                    {/* Text Content */}
                    <div className="p-12 md:p-20 text-white text-center lg:text-left">
                        <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-8">
                            Oferta de Boas-Vindas
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Desconto de <br />
                            <span className="text-orange-200">20% OFF</span>
                        </h2>
                        
                        <p className="text-orange-50/80 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0">
                            No seu primeiro pedido através do nosso site. Aproveite o sabor autêntico de Luanda com um preço especial!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button content="Pedir Agora" />
                            <button className="px-8 py-4 border-2 border-white/30 hover:border-white rounded-2xl font-bold transition-all" onClick={(e) => e.preventDefault()}>
                                Saber Mais
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-full hidden lg:flex items-center justify-center p-12">
                        <img 
                            src={benga} 
                            alt="Desconto Especial" 
                            className="w-full max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:rotate-6 transition-transform duration-700"
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-20 right-20 bg-white text-orange-600 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 animate-pulse">
                            <span className="text-2xl font-black">20%</span>
                            <span className="text-[10px] font-bold uppercase">OFF</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
