import React, { Component } from 'react';
import { Button } from 'antd';
import './HomeCards.css';
import HomeCardsData from './HomeCardsData';

class HomeCards extends Component {

    render() {
        return (
            <div className="flex justify-center items-center mt4 serif">
                <div className="main-card-div">
                    {
                        HomeCardsData.map((item)=>{
                            return(
                                <div className="card pointer">
                                    <img src={item.img} className="card-img grow" alt='something'/>
                                        <h2 className="white head-txt-div ph3" style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>
                                            {item.heading}
                                        </h2>
                                       <div style={{borderRadius:'0'}} className="mh3 br0 txt-div br0" >
                                            <p className="tl pa2 pb1">{item.description}</p>
                                            <Button className="mb3" type="primary">Read more</Button>
                                       </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeCards;
