import { CategoryPage } from "../CategoryPage/CategoryPage";
import bgImage from '../../assets/category-burgger.webp'

export function Burger() {
    return (
        <CategoryPage 
            title="Nossos Hambúrgueres" 
            bgImage={bgImage} 
            categories={['burger']} 
        />
    )
}
