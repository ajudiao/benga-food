import { CategoryPage } from "../CategoryPage/CategoryPage";
import bgImage from '../../assets/pizza.webp'

export function Pizza() {
    return (
        <CategoryPage 
            title="Pizzas Artesanais" 
            bgImage={bgImage} 
            categories={['pizza']} 
        />
    )
}
