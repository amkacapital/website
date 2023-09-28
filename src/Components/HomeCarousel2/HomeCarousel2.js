import  Carousel  from 'react-elastic-carousel';
import React from 'react';
import './HomeCarousel2.css';
import { Button } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';
import OurBusinessData from '../PageTemplate/OurBusinessData';


function HomeCarousel2() {
    return (
        <div className='mt5 serif'>
          <div data-aos="fade-up" data-aos-duration="2000">
           <h1  className="f1" id="wwd"> OUR SERVICES</h1></div>
           <Carousel className='ph3' autoPlaySpeed={5000} showArrows={false} pagination={false} enableAutoPlay={true}>

           {
                    Object.keys(OurBusinessData).map((item,idx)=>{
                    return(
                        <div data-aos="fade-left" data-aos-duration="3000" className='carousel-2-height mb5 mt5 carousel-2-card ph3 w-90 shadow-5 br4'>
                        <img className='pa3-ns border-radius short-img'  src={OurBusinessData[item].info_image} alt='something' height="400px" width="600px" />
                      <div className='tl f4 ml4-ns homecarouselSubtitle'>
                            <h1>{OurBusinessData[item].title}</h1>
                            <p>{OurBusinessData[item].subtitle}</p>
                            <Link to={`/${item}#services`}><Button>Read More</Button></Link>
                        </div>
                        </div>
                    );
                })
            }
            </Carousel>
        </div>
    )
}

export default HomeCarousel2
