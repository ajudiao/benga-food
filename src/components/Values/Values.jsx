import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa";
import { Heading } from "../Heading/Heading";
import BasketFullVegetables from '../../assets/basket-full-vegetables.png'



export function Values() {

    const leftValues = values.slice(0, 2).map((value) => {
        return (
            <div key={value.id} className="flex items-center md:flex-row-reverse gap-7">
                <div>
                    <span className="bg-gradient-to-b from-red-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white">{value.icon}</span>
                </div>

                <div className="md:text-right">
                    <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
                    <p className="text-zinc-600 mt-2"> {value.para} </p>
                </div>
            </div>
        )
    })

    const rightValues = values.slice(2).map((value) => {
        return (
            <div key={value.id} className="flex items-center gap-7">
                <div>
                    <span className="bg-gradient-to-b from-red-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white">{value.icon}</span>
                </div>

                <div>
                    <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
                    <p className="text-zinc-600 mt-2"> {value.para} </p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="max-w-300 mx-auto px-10">
                <Heading highlight="Our" heading="Values" />

                <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
                    {/* Left Values */}
                    <div className="flex flex-col justify-between md:min-h-100 gap-15">
                        {leftValues}
                    </div>
                    <div className="md:flex w-1/2 hidden">
                        <img src={BasketFullVegetables} alt="" />
                    </div>
                    {/* Right Values */}
                    <div className="flex flex-col justify-between md:min-h-100 gap-15">
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

const values = [
    {
        id: 1,
        title: "Trust",
        para: "lsdfghjasjaslajsljalsjalsjlajdlda jdsjdskd",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Trust",
        para: "lsdfghjasjaslajsljalsjalsjlajdlda jdsjdskd",
        icon: <FaHeart />
    },
    {
        id: 3,
        title: "Trust",
        para: "lsdfghjasjaslajsljalsjalsjlajdlda jdsjdskd",
        icon: <FaLeaf />
    },
    {
        id: 4,
        title: "Trust",
        para: "lsdfghjasjaslajsljalsjalsjlajdlda jdsjdskd",
        icon: <FaSeedling />
    },
]