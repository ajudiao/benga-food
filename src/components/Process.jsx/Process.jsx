import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { Heading } from "../Heading/Heading";
import { PiFactory, PiPlanet } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";


export function Process() {

    const renderSteps = steps.map((item) => {
        return (
            <div key={item.id} className={`flex-1 basis-[300px] ${ item.id % 2 === 0 ? 'md:-mt-100' : '' }`}>
                <span className="flex justify-center items-center bg-zinc-800 text-white w-18 h-18 mx-auto rounded-full text-8xl outline-[3px]  outline-offset-7 outline-zinc-800 outline-dashed">{item.number}</span>

                <div className="flex items-center gap-x-5 mt-10">
                    <div>
                        <span className="flex justify-center items-center text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4> 
                        <p className="text-zinc-600 mt-2">{item.para}</p>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <section>
            <div className="max-w-300 mx-auto px-10 py-20">
                <div className="w-fit mr-auto">
                    <Heading highlight="Our" heading="Process" />
                </div>

                <div className="flex flex-wrap gap-y-17 md:mt-20 mt-10 items-center justify-center md:pt-50">
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Soucing',
        para: 'lore andre judiao aj andre judiao',
        icon: <PiPlanet />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Soucing',
        para: 'lore andre judiao aj andre judiao',
        icon: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Soucing',
        para: 'lore andre judiao aj andre judiao',
        icon: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Soucing',
        para: 'lore andre judiao aj andre judiao',
        icon: <BsTruck />,
    },
]