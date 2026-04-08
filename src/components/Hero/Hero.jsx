
import BengaFood from '../../assets/grocery.png'
import { Button } from '../Button/Button'

export function Hero() {
    return (
        <section>
            <div className="min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col items-center md:pt-45 pt-40">
                {/** Hero Content */}
                 <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                        Lorem ipsum <span className='text-orange-500'>BengaFood</span> dolor sit <span className='text-orange-500'>amet</span> consectetur
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-132.5 mt-5 mb-10'>
                        Lorem ipsum cia earum blanditiis? In deserunt consequuntur blanditiis laborum illum ut qui!
                    </p>
                    <Button content="Explorar Agora" />
                </div>

                {/** Hero Image */}
                <div className='flex-1'>
                    <img src={BengaFood} alt="" />
                </div>
            </div>
        </section>
    )
}