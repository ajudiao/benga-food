
import BengaFood from '../../assets/benga.png'
import { Button } from '../Button/Button'

export function Hero() {
    return (
        <section>
            <div className="min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col items-center md:pt-45 pt-40">
                {/** Hero Content */}
                <div className='flex-1'>
    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
        Sabor Autêntico de Luanda
    </span>

    <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
        O melhor da street food em <span className='text-orange-500'>BengaFood</span><br/>
        direto para o teu <span className='text-orange-500'>paladar</span>
    </h1>

    <p className='text-zinc-600 md:text-lg text-md max-w-132.5 mt-5 mb-10'>
        Hambúrgueres suculentos, cachorros irresistíveis, magoga e o verdadeiro sabor do pão com mbémda e bengarodo. 
        Feito na hora, com qualidade e aquele toque especial que só a Benga Food tem.
    </p>

    <Button content="Explorar Agora" />
</div>

                {/** Hero Image */}
                <div className='flex-1 rounded-full'>
                    <img src={BengaFood} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
            </div>
        </section>
    )
}