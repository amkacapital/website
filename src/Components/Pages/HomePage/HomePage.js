import React from 'react';
import AboutParallax from '../../AboutPage/AboutParallax/AboutParallax';
// import HomeCards from '../../HomeCards/HomeCards';
import HomeCarousel1 from '../../HomeCarousel1/HomeCarousel1';
import HomeCarousel2 from '../../HomeCarousel2/HomeCarousel2';
import Marque from '../../Marque/Marque';
import WhatWeDo from '../../WhatWeDo/WhatWeDo';

export const HomePage = () => {
    return (
        <div>
            <HomeCarousel1/>
            <WhatWeDo/>
            <HomeCarousel2/>
            <AboutParallax/>
            {/* <HomeCards/> */}
            <Marque/>
        </div>
    )
}