import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";
import FruitsAndVeggies from '../../assets/fruits-and-veggies.png'


export function Category() {

    const renderCard = categories.map(card => {
        return (
            // Card
            <div className="flex-1 md:flex-row flex-col items-center gap-x-10 mt-20" key={card.id}>
                {/** Card Image */}
                <div className="w-full min-h-[30vh] relative -mb-10">
                    <img src={card.image} alt="" />
                </div>

                {/** Card Content */}
                <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                    <h3 className="text-zinc-800 font-bold text-3xl">{card.title}</h3>
                    <p className="text-zinc-600 mt-3 mb-9">{card.descripition}</p>
                    <Button content="Ver" />
                </div>
            </div>
        )
})

return (
    <section>
        <div className="max-w-[1400px] mx-auto py-20">
            <Heading highlight="Shop" heading="by Category" />

            { /** Category Card */}
            <div className="flex gap-10 mt-15">
                {renderCard}
            </div>
        </div>
    </section>
)
}

const categories = [
    {
        id: 1,
        title: "Frutas e Verduras",
        descripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        image: FruitsAndVeggies
    },
    {
        id: 2,
        title: "Frutas e Verduras",
        descripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        image: FruitsAndVeggies
    },
    {
        id: 3,
        title: "Frutas e Verduras",
        descripition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        image: FruitsAndVeggies
    },
]