const ProductList = [
  // 🍔 HAMBÚRGUERES
  { id: 1, name: 'Hambúrguer Clássico', price: 2500, category: 'burger', image: 'https://loremflickr.com/400/400/burger' },
  { id: 2, name: 'Hambúrguer com Queijo', price: 2800, category: 'burger', image: 'https://loremflickr.com/400/400/cheeseburger' },
  { id: 3, name: 'Hambúrguer Duplo', price: 3500, category: 'burger', image: 'https://loremflickr.com/400/400/burger,fastfood' },
  { id: 4, name: 'Hambúrguer Bacon', price: 3200, category: 'burger', image: 'https://loremflickr.com/400/400/bacon,burger' },
  { id: 5, name: 'Hambúrguer Especial', price: 4000, category: 'burger', image: 'https://loremflickr.com/400/400/gourmet,burger' },
  { id: 6, name: 'Hambúrguer Picante', price: 3000, category: 'burger', image: 'https://loremflickr.com/400/400/spicy,burger' },
  { id: 7, name: 'Hambúrguer Frango', price: 2700, category: 'burger', image: 'https://loremflickr.com/400/400/chicken,burger' },
  { id: 8, name: 'Hambúrguer Veggie', price: 2900, category: 'burger', image: 'https://loremflickr.com/400/400/veggie,burger' },

  // 🌭 HOTDOG
  { id: 9, name: 'Cachorro Simples', price: 1500, category: 'hotdog', image: 'https://loremflickr.com/400/400/hotdog' },
  { id: 10, name: 'Cachorro Especial', price: 2000, category: 'hotdog', image: 'https://loremflickr.com/400/400/hotdog,fastfood' },
  { id: 11, name: 'Cachorro com Bacon', price: 2300, category: 'hotdog', image: 'https://loremflickr.com/400/400/bacon,hotdog' },
  { id: 12, name: 'Cachorro Duplo', price: 2600, category: 'hotdog', image: 'https://loremflickr.com/400/400/hotdog,sausage' },
  { id: 13, name: 'Cachorro Picante', price: 2200, category: 'hotdog', image: 'https://loremflickr.com/400/400/spicy,hotdog' },

  // 🍗 FRANGO
  { id: 14, name: 'Frango Frito', price: 3000, category: 'chicken', image: 'https://loremflickr.com/400/400/fried,chicken' },
  { id: 15, name: 'Asas de Frango', price: 2800, category: 'chicken', image: 'https://loremflickr.com/400/400/chicken,wings' },
  { id: 16, name: 'Nuggets', price: 2000, category: 'chicken', image: 'https://loremflickr.com/400/400/chicken,nuggets' },
  { id: 17, name: 'Frango Grelhado', price: 3200, category: 'chicken', image: 'https://loremflickr.com/400/400/grilled,chicken' },
  { id: 18, name: 'Frango Crocante', price: 3100, category: 'chicken', image: 'https://loremflickr.com/400/400/crispy,chicken' },

  // 🥤 BEBIDAS
  { id: 19, name: 'Coca-Cola', price: 800, category: 'drinks', image: 'https://loremflickr.com/400/400/soda' },
  { id: 20, name: 'Sumo Natural', price: 1200, category: 'drinks', image: 'https://loremflickr.com/400/400/juice' },
  { id: 21, name: 'Água', price: 500, category: 'drinks', image: 'https://loremflickr.com/400/400/water' },
  { id: 22, name: 'Milkshake Chocolate', price: 1800, category: 'drinks', image: 'https://loremflickr.com/400/400/chocolate,milkshake' },
  { id: 23, name: 'Milkshake Morango', price: 1800, category: 'drinks', image: 'https://loremflickr.com/400/400/strawberry,milkshake' },
  { id: 24, name: 'Refrigerante Lata', price: 900, category: 'drinks', image: 'https://loremflickr.com/400/400/softdrink' },

  // 🍰 SOBREMESAS
  { id: 25, name: 'Gelado Chocolate', price: 1500, category: 'desserts', image: 'https://loremflickr.com/400/400/chocolate,icecream' },
  { id: 26, name: 'Gelado Morango', price: 1500, category: 'desserts', image: 'https://loremflickr.com/400/400/strawberry,icecream' },
  { id: 27, name: 'Bolo Chocolate', price: 2000, category: 'desserts', image: 'https://loremflickr.com/400/400/chocolate,cake' },
  { id: 28, name: 'Donuts', price: 1300, category: 'desserts', image: 'https://loremflickr.com/400/400/donuts' },
  { id: 29, name: 'Cookies', price: 1200, category: 'desserts', image: 'https://loremflickr.com/400/400/cookies' },

  // 🍟 EXTRAS
  { id: 30, name: 'Batatas Fritas Pequena', price: 1000, category: 'burger', image: 'https://loremflickr.com/400/400/fries' },
  { id: 31, name: 'Batatas Fritas Média', price: 1500, category: 'burger', image: 'https://loremflickr.com/400/400/french,fries' },
  { id: 32, name: 'Batatas Fritas Grande', price: 2000, category: 'burger', image: 'https://loremflickr.com/400/400/fries,fastfood' },

  // 🔥 RESTANTE
  { id: 33, name: 'Hambúrguer BBQ', image: 'https://loremflickr.com/400/400/bbq,burger' },
  { id: 34, name: 'Hambúrguer Triplo', image: 'https://loremflickr.com/400/400/big,burger' },
  { id: 35, name: 'Cachorro Cheese', image: 'https://loremflickr.com/400/400/cheese,hotdog' },
  { id: 36, name: 'Cachorro Especial Duplo', image: 'https://loremflickr.com/400/400/loaded,hotdog' },
  { id: 37, name: 'Asas Picantes', image: 'https://loremflickr.com/400/400/spicy,wings' },
  { id: 38, name: 'Nuggets Grande', image: 'https://loremflickr.com/400/400/nuggets' },
  { id: 39, name: 'Milkshake Baunilha', image: 'https://loremflickr.com/400/400/vanilla,milkshake' },
  { id: 40, name: 'Sumo Laranja', image: 'https://loremflickr.com/400/400/orange,juice' },
  { id: 41, name: 'Sumo Manga', image: 'https://loremflickr.com/400/400/mango,juice' },
  { id: 42, name: 'Gelado Baunilha', image: 'https://loremflickr.com/400/400/vanilla,icecream' },
  { id: 43, name: 'Bolo Morango', image: 'https://loremflickr.com/400/400/strawberry,cake' },
  { id: 44, name: 'Brownie', image: 'https://loremflickr.com/400/400/brownie' },
  { id: 45, name: 'Hambúrguer Deluxe', image: 'https://loremflickr.com/400/400/deluxe,burger' },
  { id: 46, name: 'Hambúrguer Simples', image: 'https://loremflickr.com/400/400/simple,burger' },
  { id: 47, name: 'Cachorro Tradicional', image: 'https://loremflickr.com/400/400/classic,hotdog' },
  { id: 48, name: 'Frango Especial', image: 'https://loremflickr.com/400/400/fried,chicken,meal' },
  { id: 49, name: 'Refrigerante Garrafa', image: 'https://loremflickr.com/400/400/soda,bottle' },
  { id: 50, name: 'Combo Hambúrguer + Batata', image: 'https://loremflickr.com/400/400/burger,meal' }
];

export default ProductList