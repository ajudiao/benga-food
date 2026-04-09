import { Button } from "../Button/Button";
import Freshfruits from '../../assets/fresh-fruits.png'

export function Discount() {

    return (
        <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${Freshfruits})`}}>
            <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-300 mx-auto px-10 py-10">
                <span className="md:text-9xl text-5xl  text-orange-500 transform md:-rotate-90 h-fit font-bold md:self-center">20%</span>
                <div className="max-w-[700px]">
                    <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold mt-3 mt-2">first Order Discount</h3>
                    <p className="text-zinc-600 my-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequatur in eum beatae verita</p>
                    <Button content="Get a Discount" />
                </div>
            </div>
        </section>
    )
}