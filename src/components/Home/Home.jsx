import { Category } from "../Category/Category"
import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Category />
        </div>
    )
}