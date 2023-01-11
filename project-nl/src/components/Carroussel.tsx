import { useEffect , useState , useRef} from 'react';

import { motion } from "framer-motion";

import {people} from '../data';

const carrossel_img =  people;
{/*[ people1 , people2 , people3 , people4 ]*/}

function Carroussel(){

    const [width, setWidth] = useState(0);
    const _carroussel = useRef();

    return(
        <div className="max-h-full m-auto flex items-center justify-center max-w-full]">
            <motion.div className="overflow-hidden " >
                <motion.div className="flex" drag='x'>
                    {carrossel_img.map(img => (
                        <motion.div className="flex-1 px-2 py-5" key={img.src}>
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full rounded-3xl 
                                    sm:min-h-[250px] sm:min-w-[200px]  
                                    pointer-events-none cursor-grab
                                    " />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Carroussel;