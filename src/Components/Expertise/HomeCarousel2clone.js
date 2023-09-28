
import React from 'react';
import './HomeCarousel2clone.css';
import { ExpertiseData } from './ExpertiseData';

function HomeCarousel2clone() {
    return (
        <div className='mt5 serif'>
           {
               ExpertiseData.map((item,index)=>{
                   return(
                    <div  data-aos="fade-up"  data-aos-duration="2000" className='carousel-2-height-clone mb5 mt5 pv2 ph3 w-100 neumorphism'>

                    <div  data-aos="fade-up-left"  data-aos-duration="1000" className='tl f4 ml4-ns'>
                      <div>
                        <h1>{item.name}</h1>
                        <h3 className="light-silver">{item.location}</h3>
                        <h5 className="light-silver">Email:{item.email}</h5>
                        <p className="pv3 para-img-div">
                        <img className='pa2-ns caro-2-img'  src={item.img} alt='something'/>{item.info}</p>
                    </div>
                    </div>
                </div>
                   )
               })
           }
        </div>
    )
}

export default HomeCarousel2clone;
