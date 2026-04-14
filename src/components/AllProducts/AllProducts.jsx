import { CategoryPage } from "../CategoryPage/CategoryPage";
import bgImage from '../../assets/refeicao.webp'

export function AllProducts() {
    return (
        <CategoryPage 
            title="Cardápio Completo" 
            bgImage={bgImage} 
            categories={['all']} 
        />
    )
}
