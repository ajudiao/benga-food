import { CategoryPage } from "../CategoryPage/CategoryPage";
import bgImage from '../../assets/refeicao.webp'

export function Refeicao() {
    return (
        <CategoryPage 
            title="Refeições Completas" 
            bgImage={bgImage} 
            categories={['refeicao']} 
        />
    )
}
