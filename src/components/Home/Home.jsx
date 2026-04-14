import { Category } from "../Category/Category"
import { Discount } from "../Discount/Discount"
import { Footer } from "../Footer/Footer"
import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"
import { Process } from "../Process.jsx/Process"
import { Products } from "../Products/Products"
import { Testimoials } from "../Testimoials/Testimoials"
import { Values } from "../Values/Values"

export function Home() {
    return (
        <div>
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Process />
            <Testimoials />
        </div>
    )
}