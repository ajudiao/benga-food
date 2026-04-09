import { useState } from "react";
import { Heading } from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import { Cards } from "../Cards/Cards";
import { Button } from "../Button/Button";

export function Products() {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', name: 'Todos' },
        { id: 'burger', name: 'Hambúrgueres' },
        { id: 'hotdog', name: 'Cachorros' },
        { id: 'chicken', name: 'Frango' },
        { id: 'drinks', name: 'Bebidas' },
        { id: 'desserts', name: 'Sobremesas' }
    ];

    let fiteredItems = activeTab === 'all'
        ? ProductList : ProductList.filter((item) => item.category === activeTab)


    const renderCards = fiteredItems.slice(0, 8).map(
        product => {
            return (
                <Cards image={product.image} name={product.name} price={product.price} />
            )
        }
    )

    console.log(fiteredItems)
    return (
        <section>
            <div className="max-w-300 mx-auto px-10 py-20">
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className="flex flex-wrap gap-10 justify-center mt-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-5 py-2 text-lg rounded-lg transition
                                ${activeTab === category.id
                                    ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white'
                                    : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                            {category.name}
                        </button>
                    ))}
                </div>
                {/* Product Listing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                    {renderCards}
                </div>

                <div className="mt-15 mx-auto w-fit">
                    <Button content="View All" />
                </div>
            </div>
        </section>
    );
}
