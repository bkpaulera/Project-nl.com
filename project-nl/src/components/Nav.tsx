import React  from 'react';

import { navigation } from '../data';

import { Link } from 'react-scroll';

function Nav() {
    return (
        <nav>
            <ul className='flex space-x-8 capitalize text-[15px] md:space-x-4'>
                {navigation.map((item, index) => {
                    return(
                        <li className='text-white hover:text-teal-600 cursor-pointer' key={index}>
                            <Link 
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='transition-all duration-300'
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })
                }
            </ul>
        </nav>
    )
}

export default Nav;