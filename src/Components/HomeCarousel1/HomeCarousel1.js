import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import 'antd/dist/antd.css';
import './HomeCarousel1.css';
import 'tachyons';
import CarouselDate from './HomeCarousel1Data';

export class HomeCarousel1 extends Component {
    render() {
        return (
            <div style={{marginLeft: '-10px', marginRight: '-10px'}}  className='serif'>
                <Carousel    showArrows={false}
                pagination={false}
                enableAutoPlay={true}

                >
                    {
                        CarouselDate.map((item)=>{
                            return(
                                <div  className="caro" style={{height:'86vh',backgroundBlendMode:'darken',background: "rgba(0,0,0,0.4) url(" + item.bgimg + ") center center", backgroundSize:'cover'}}>
                                    <div className="carouselHeading">
                                        <h1 className='f1 white'>{item.heading}</h1>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default HomeCarousel1;
