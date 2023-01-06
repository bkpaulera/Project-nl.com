
import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import Socials from './Socials';  
import NavbarMobile from './NavbarMobile';  

function Header() {

    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <header className={`${bg ? 'bg-purple-900 h-20' : 'bg-violet-800 h-24'}
                flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>

            <div className="container mx-auto h-full flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Paulera</span>
                </div>

                {/* Nav */}
                <div className='hidden lg:block md:block'>
                    <Nav />
                </div>

                {/* Socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>

                {/* NavbarMobile */}
                <div className='lg:hidden md:hidden'>
                    <NavbarMobile />
                </div>


            </div>
        </header>
    )
}

export default Header;

