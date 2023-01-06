

import Banner from '../assets/car-space.jpeg';

//<img src={Banner} alt='Banner' className='bg-fixed'/>


/*
bg-[url('../assets/car-space.jpeg')] bg-cover bg-no-repeat
*/
function Hero(){
    return(
        <section className=" lg:h-[85vh] flex items-center bg-violet-800
        lg:bg-no-repeat py-32 lg:py-0 overflow-hidden  w-full h-full
        bg-[url('../assets/car-space.jpeg')]  bg-center bg-cover
        ">
            <div className="container mx-auto text-white">
                <div className='flex items-center h-full pt-8'>
                </div>
            </div>
        </section>
    );
}
export default Hero;