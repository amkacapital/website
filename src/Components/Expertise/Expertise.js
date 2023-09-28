import React from 'react';
import './Expertise.css';
import HomeCarousel2clone from './HomeCarousel2clone';

const Expertise = () => {
    return (
        <div  id='expertise' className="exp-div pv6 serif">
            <div  id="exp" className="exp-black-box">
                <h1  className="white b mv4 " style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>
                   EXPERTISE
                </h1>
                <p className="para">Our integrated platform brings proven expertise to every aspect of global funding and financial consultancy to meet the
                    needs of premier organizations around the world.</p>
                {/* <HomeCards/> */}
                <HomeCarousel2clone/>
            </div>
        </div>
    )
}

export default Expertise;
