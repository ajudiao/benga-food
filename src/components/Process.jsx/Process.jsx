import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { Heading } from "../Heading/Heading";
import { PiFactory, PiPlanet } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export function Process() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 mt-10 md:mt-20">
          {steps.map((item, index) => (
            <div
              key={item.id}
              className={`relative ${
                index % 2 !== 0 ? "lg:mt-20" : ""
              }`}
            >
              {/* Número */}
              <span className="flex justify-center items-center bg-zinc-800 text-white w-[72px] h-[72px] mx-auto rounded-full outline-[3px] outline-offset-[7px] outline-zinc-800 outline-dashed">
                {item.number}
              </span>

              {/* Conteúdo */}
              <div className="flex items-center gap-5 mt-8">
                <span className="flex justify-center items-center text-white bg-gradient-to-b from-orange-400 to-orange-500 w-[60px] h-[60px] rounded-full shrink-0">
                  {item.icon}
                </span>

                <div>
                  <h4 className="text-zinc-800 text-lg md:text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 mt-2 text-sm md:text-base">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled className="text-4xl md:text-5xl" />,
    title: "Order",
    para: "Faça seu pedido de forma rápida e simples através da nossa plataforma online ou por telefone.",
    icon: <PiPlanet className="text-xl" />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled className="text-4xl md:text-5xl" />,
    title: "Preparation",
    para: "Nossa equipe prepara seu pedido na hora, garantindo sabor, frescura e rapidez no atendimento.",
    icon: <PiFactory className="text-xl" />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled className="text-4xl md:text-5xl" />,
    title: "Quality Check",
    para: "Verificamos cada detalhe do pedido antes do envio para garantir que tudo esteja perfeito.",
    icon: <SlBadge className="text-xl" />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled className="text-4xl md:text-5xl" />,
    title: "Delivery",
    para: "Entregamos seu pedido rapidamente na sua porta, com segurança e praticidade.",
    icon: <BsTruck className="text-xl" />,
  },
];