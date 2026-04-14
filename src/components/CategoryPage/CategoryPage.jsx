import { Banner } from "../Banner/Banner";
import { Cards } from "../Cards/Cards";
import ProductList from "../ProductList/ProductList";

export function CategoryPage({ title, bgImage, categories = [] }) {
  
  const filtered = categories.includes('all') 
    ? ProductList 
    : ProductList.filter(item => categories.includes(item.category));

  return (
    <main className="bg-zinc-50 min-h-screen">
      <Banner title={title} bgImage={bgImage} />
      
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">Nossas Delícias</h2>
            <p className="text-zinc-500 mt-2">Encontramos {filtered.length} opções incríveis para você!</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-zinc-100 overflow-x-auto max-w-full no-scrollbar">
            <button className="whitespace-nowrap px-6 py-2 bg-orange-500 text-white font-bold rounded-xl transition-all">Populares</button>
            <button className="whitespace-nowrap px-6 py-2 text-zinc-500 hover:bg-zinc-100 font-bold rounded-xl transition-all">Menor Preço</button>
            <button className="whitespace-nowrap px-6 py-2 text-zinc-500 hover:bg-zinc-100 font-bold rounded-xl transition-all">Novidades</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filtered.map((product) => (
            <Cards 
              key={product.id}
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-6">🥘</div>
            <h3 className="text-2xl font-bold text-zinc-800">Nenhum produto encontrado</h3>
            <p className="text-zinc-500 mt-2">Estamos preparando novidades nesta categoria!</p>
          </div>
        )}
      </section>
    </main>
  );
}
