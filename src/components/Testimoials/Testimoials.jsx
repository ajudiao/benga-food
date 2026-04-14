// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Heading } from "../Heading/Heading";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';



export function Testimoials() {



    return (
        <section>
            <div className="max-w-300 mx-auto px-10 py-20">
                <Heading highlight="Customers" heading="Saying" />

                <div className="flex justify-end mt-5 py-6 px-3">
                    <button className="custom-prev text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-200 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
                        <IoIosArrowBack />
                    </button>
                    <butto>
                        <IoIosArrowForward className="custom-next text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-200 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer" />
                    </butto>
                </div>

                <Swiper
                    Pagination={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        review.map((item => {
                            return (
                                <SwiperSlide key={item.id} className="bg-zinc-200 rounded-xl p-8">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-16 h-16 rounded-full bg-red-600 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                                            <img src={item.image} alt="" className='w-full h-full' />
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold">{item.name}</h5>
                                            <p className="text-zinc-600">{item.profession}</p>
                                            <span className='flex text-yellow-400 mt-3 text-xl'>
                                                {Array.from({ length: item.rating }, (_, index) => (
                                                    <FaStar />
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <p className="text-zinc-600">{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }))
                    }
                </Swiper>
            </div>
        </section >
    )
}

const review = [
    {
        id: 1,
        name: 'Marcolino Júlio',
        profession: 'Cliente Local',
        rating: 5,
        para: 'Entrega muito rápida e o hambúrguer chegou quente e saboroso. Excelente serviço!',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
    },
    {
        id: 2,
        name: 'Ana Paula Santos',
        profession: 'Cliente Regular',
        rating: 4,
        para: 'Boa comida e preços acessíveis. Só gostaria de mais opções no menu.',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
    },
    {
        id: 3,
        name: 'Carlos Miguel',
        profession: 'Cliente',
        rating: 5,
        para: 'Melhor fast food da zona! Sempre peço e nunca decepciona.',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
    },
    {
        id: 4,
        name: 'João Pedro',
        profession: 'Cliente Delivery',
        rating: 3,
        para: 'A comida é boa, mas a entrega demorou um pouco desta vez.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    {
        id: 5,
        name: 'Lígia Domingos',
        profession: 'Cliente',
        rating: 5,
        para: 'Batatas crocantes e hambúrguer muito bem preparado. Recomendo!',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    },
    {
        id: 6,
        name: 'Rui Alberto',
        profession: 'Cliente Local',
        rating: 4,
        para: 'Atendimento rápido e comida bem embalada. Boa experiência.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    {
        id: 7,
        name: 'Patrícia Silva',
        profession: 'Cliente Delivery',
        rating: 5,
        para: 'Chegou tudo perfeito, sem erros no pedido. Muito satisfeito!',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39'
    },
    {
        id: 8,
        name: 'Miguel Ângelo',
        profession: 'Cliente',
        rating: 4,
        para: 'Bom sabor e porções generosas. Vale a pena pedir.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
    },
    {
        id: 9,
        name: 'Sofia Gomes',
        profession: 'Cliente Regular',
        rating: 5,
        para: 'Sempre peço aqui no bairro, nunca falha. Muito confiável!',
        image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5'
    },
    {
        id: 10,
        name: 'António Fernandes',
        profession: 'Cliente Local',
        rating: 4,
        para: 'Boa experiência geral, comida saborosa e entrega eficiente.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
];