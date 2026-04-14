import { FaHeart, FaPlus } from "react-icons/fa";
import { Button } from "../Button/Button";


export function Cards({ image, name, price }) {
    return (
        <div className="bg-zinc-100 p-5 rounded-xl">
             {/** Card Icons */}
            <div className="flex justify-between mb-4">
                <span className="text-3xl text-zinc-300 cursor-pointer"><FaHeart /></span>
                <button className="bg-linear-to-b from-red-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg  cursor-pointer">
                    <FaPlus />
                </button>
            </div>
            {/** Card  Image*/}
            <div className="w-full h-50 mt-2">
                <img src={image} className="w-full h-full object-contain" alt="" />
            </div>

            {/** Content Card */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-2xl font-bold mt-4 mb-3">{price} kzs</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}