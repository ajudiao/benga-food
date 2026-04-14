import burgerImg from '../../assets/category-burgger.webp'
import pizzaImg from '../../assets/pizza.webp'
import refeicaoImg from '../../assets/refeicao.webp'
import chickenImg from '../../assets/chicken.webp'
import drinksImg from '../../assets/drinks.webp'
import dessertsImg from '../../assets/desserts.webp'

const ProductList = [
  // 🍔 HAMBÚRGUERES
  { id: 1, name: 'Hambúrguer Clássico', price: 2500, category: 'burger', image: burgerImg },
  { id: 2, name: 'Hambúrguer com Queijo', price: 2800, category: 'burger', image: burgerImg },
  { id: 3, name: 'Hambúrguer Duplo', price: 3500, category: 'burger', image: burgerImg },
  { id: 4, name: 'Hambúrguer Bacon', price: 3200, category: 'burger', image: burgerImg },
  { id: 5, name: 'Hambúrguer Especial', price: 4000, category: 'burger', image: burgerImg },
  { id: 6, name: 'Hambúrguer Picante', price: 3000, category: 'burger', image: burgerImg },
  { id: 7, name: 'Hambúrguer Frango', price: 2700, category: 'burger', image: burgerImg },
  { id: 8, name: 'Hambúrguer Veggie', price: 2900, category: 'burger', image: burgerImg },

  // 🌭 HOTDOG (Usando frango como fallback se não houver hotdog específico)
  { id: 9, name: 'Cachorro Simples', price: 1500, category: 'hotdog', image: chickenImg },
  { id: 10, name: 'Cachorro Especial', price: 2000, category: 'hotdog', image: chickenImg },
  { id: 11, name: 'Cachorro com Bacon', price: 2300, category: 'hotdog', image: chickenImg },
  { id: 12, name: 'Cachorro Duplo', price: 2600, category: 'hotdog', image: chickenImg },
  { id: 13, name: 'Cachorro Picante', price: 2200, category: 'hotdog', image: chickenImg },

  // 🍗 FRANGO
  { id: 14, name: 'Frango Frito', price: 3000, category: 'chicken', image: chickenImg },
  { id: 15, name: 'Asas de Frango', price: 2800, category: 'chicken', image: chickenImg },
  { id: 16, name: 'Nuggets', price: 2000, category: 'chicken', image: chickenImg },
  { id: 17, name: 'Frango Grelhado', price: 3200, category: 'chicken', image: chickenImg },
  { id: 18, name: 'Frango Crocante', price: 3100, category: 'chicken', image: chickenImg },

  // 🥤 BEBIDAS
  { id: 19, name: 'Coca-Cola', price: 800, category: 'drinks', image: drinksImg },
  { id: 20, name: 'Sumo Natural', price: 1200, category: 'drinks', image: drinksImg },
  { id: 21, name: 'Água', price: 500, category: 'drinks', image: drinksImg },
  { id: 22, name: 'Milkshake Chocolate', price: 1800, category: 'drinks', image: drinksImg },
  { id: 23, name: 'Milkshake Morango', price: 1800, category: 'drinks', image: drinksImg },
  { id: 24, name: 'Refrigerante Lata', price: 900, category: 'drinks', image: drinksImg },

  // 🍰 SOBREMESAS
  { id: 25, name: 'Gelado Chocolate', price: 1500, category: 'desserts', image: dessertsImg },
  { id: 26, name: 'Gelado Morango', price: 1500, category: 'desserts', image: dessertsImg },
  { id: 27, name: 'Bolo Chocolate', price: 2000, category: 'desserts', image: dessertsImg },
  { id: 28, name: 'Donuts', price: 1300, category: 'desserts', image: dessertsImg },
  { id: 29, name: 'Cookies', price: 1200, category: 'desserts', image: dessertsImg },

  // 🍟 EXTRAS
  { id: 30, name: 'Batatas Fritas Pequena', price: 1000, category: 'burger', image: burgerImg },
  { id: 31, name: 'Batatas Fritas Média', price: 1500, category: 'burger', image: burgerImg },
  { id: 32, name: 'Batatas Fritas Grande', price: 2000, category: 'burger', image: burgerImg },
  
  // 🍕 PIZZAS
  { id: 51, name: 'Pizza Margherita', price: 4500, category: 'pizza', image: pizzaImg },
  { id: 52, name: 'Pizza Pepperoni', price: 5000, category: 'pizza', image: pizzaImg },
  { id: 53, name: 'Pizza Portuguesa', price: 5500, category: 'pizza', image: pizzaImg },
  { id: 54, name: 'Pizza Quatro Queijos', price: 6000, category: 'pizza', image: pizzaImg },
  
  // 🍛 REFEIÇÕES
  { id: 61, name: 'Prato do Dia', price: 3500, category: 'refeicao', image: refeicaoImg },
  { id: 62, name: 'Bife com Batatas', price: 4500, category: 'refeicao', image: refeicaoImg },
  { id: 63, name: 'Arroz com Frango', price: 3000, category: 'refeicao', image: refeicaoImg }
];

export default ProductList
