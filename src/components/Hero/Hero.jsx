import burgger from '../../assets/burgger.webp'
import { Button } from '../Button/Button'

export function Hero() {
  return (
    <section className="w-full min-h-screen pt-32 pb-16 flex items-center bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block self-center lg:self-start bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
            Melhor Sabor de Luanda
          </div>

          <h1 className="tracking-tight text-5xl md:text-6xl xl:text-8xl font-black leading-[1.1] text-zinc-900">
            Saboreie o Melhor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Benga Food</span>
          </h1>

          <p className="text-zinc-600 mt-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Comida de rua fresca, feita com paixão e o verdadeiro sabor caseiro. Peça agora e receba em minutos!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
            <Button content="Explorar Cardápio" />
            <button className="flex items-center gap-3 font-bold text-zinc-800 hover:text-orange-500 transition-colors py-3 px-6">
              <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Ver Vídeo
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 mt-12 border-t pt-8 border-zinc-200 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-2xl font-bold text-zinc-900">5k+</p>
              <p className="text-sm text-zinc-500">Pedidos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900">12</p>
              <p className="text-sm text-zinc-500">Lojas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900">4.9</p>
              <p className="text-sm text-zinc-500">Avaliações</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
          <img
            src={burgger}
            alt="Benga Food Burger"
            className="w-full max-w-xl mx-auto drop-shadow-[0_35px_35px_rgba(251,146,60,0.4)] hover:scale-105 transition-transform duration-500 ease-out"
          />
          
          {/* Floating Element */}
          <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
            <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">🍔</div>
            <div>
              <p className="font-bold text-zinc-800">Super Burger</p>
              <p className="text-xs text-zinc-500">Sabor Incomparável</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
