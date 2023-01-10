

import image_person from '../assets/people/paulo_me.jpeg';

function Hero() {
    return (
        <section id='home' className=" bg-violet-800 bg-[url('../assets/car-space.jpeg')]
            h-[85vh] bg-cover bg-center bg-no-repeat lg:py-0 
            items-center py-32 overflow-hidden mx-10 rounded-b-lg
            ">
            <div className="container mx-auto h-full">
                <div className='flex items-center h-full pt-8 md:py-10 lg:py-10'>
                    {/* Esquerda */}
                    <div className='flex flex-1 flex-col items-center lg:items-start'>
                        <p className="text-lg text-teal-400 mb-[22px]">Left</p>
                        <h1 className="text-4x1 leading-[44px] 
                        md:text-5x1 md:leading-tight md:tracking-[-2px]
                        lg:text-7x1 lg:leading-[1.2]
                        font-bold ">
                            Negros & Lindos <br /> www e.com 
                        </h1>
                        <button className="btn btn-md bg-fuchsia-400 hover:bg-fuchsia-600 md:btn-lg transition-all">
                            trampo boy
                        </button>
                    </div>
                    {/* Direita */}
                    <div className='hidden md:flex flex-1 justfy-end items-end h-full'>
                        <img src={image_person} alt='logo' className='rounded-3xl'/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;