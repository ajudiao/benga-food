import { Heading } from "../Heading/Heading";
import burger from '../../assets/category-burgger.webp'
import pizza from '../../assets/pizza.webp'
import refeicao from '../../assets/refeicao.webp'
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        title: "Burger",
        description: "Hambúrgueres suculentos preparados na grelha, com carne de qualidade e ingredientes frescos.",
        image: burger,
        path: '/burger',
        color: 'from-orange-400 to-red-500'
    },
    {
        id: 2,
        title: "Pizza",
        description: "Pizzas artesanais feitas com massa leve e crocante, molho especial e ingredientes frescos.",
        image: pizza,
        path: '/pizza',
        color: 'from-red-500 to-orange-600'
    },
    {
        id: 3,
        title: "Refeições",
        description: "Pratos completos e bem servidos, preparados com cuidado para oferecer uma refeição equilibrada.",
        image: refeicao,
        path: '/refeicao',
        color: 'from-orange-500 to-yellow-500'
    },
];

export function Category() {
    return (
        <section className="bg-zinc-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Heading highlight="Escolha" heading="por Categoria" />
                    <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
                        Explore nossa variedade de sabores, desde os hambúrgueres mais suculentos até pizzas crocantes e refeições completas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map(card => (
                        <div key={card.id} className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 flex flex-col items-center text-center overflow-hidden">
                            {/* Background Decoration */}
                            <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${card.color} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
                            
                            {/** Card Image */}
                            <div className="relative w-full aspect-square mb-6 group-hover:scale-110 transition-transform duration-500">
                                <img src={card.image} alt={card.title} className="w-full h-full object-contain drop-shadow-lg" />
                            </div>

                            {/** Card Content */}
                            <div className="relative z-10">
                                <h3 className="text-zinc-900 font-bold text-3xl mb-3">{card.title}</h3>
                                <p className="text-zinc-500 mb-8 line-clamp-3">{card.description}</p>
                                <Link 
                                    to={card.path} 
                                    className={`inline-block bg-gradient-to-r ${card.color} text-white font-bold rounded-2xl px-10 py-4 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300`}
                                > 
                                    Ver Mais 
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
