

import image_person from '../assets/people/people-2.jpg';

function Hero() {
    return (
        <section id='home' className=" bg-violet-800 bg-[url('../assets/car-space.jpeg')]
            h-[85vh] bg-cover bg-center bg-no-repeat lg:py-0 
            items-center py-32 overflow-hidden mx-10 rounded-b-lg
            ">
            <div className="container mx-auto h-full">
                <div className='flex items-center h-full pt-8 md:py-10 lg:py-10'>
                    {/* Esquerda */}
                    <div className='flex flex-1 flex-col items-center lg:items-start bg-slate-50 rounded'>
                        <p className="text-lg text-gray-900 mb-[22px] ">Who im i ?</p>
                        <h1 className="text-4x1 leading-[44px] 
                        md:text-5x1 md:leading-tight md:tracking-[-2px]
                        lg:text-7x1 lg:leading-[1.2]
                        font-bold ">
                            Negros & Lindos <br /> www e.com 
                        </h1>
                        
                    </div>
                    {/* Direita */}
                    <div className='hidden md:flex flex-1 justfy-end items-end h-full'>
                        <img src='' alt='logo' className='rounded-3xl'/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;