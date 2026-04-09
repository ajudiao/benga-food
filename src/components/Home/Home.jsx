import { Category } from "../Category/Category"
import { Discount } from "../Discount/Discount"
import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"
import { Process } from "../Process.jsx/Process"
import { Products } from "../Products/Products"
import { Values } from "../Values/Values"

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Process />
        </div>
    )
}