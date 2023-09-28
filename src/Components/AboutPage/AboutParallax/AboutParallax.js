import { Button } from 'antd';
import React,{useEffect} from 'react';
import './AboutParallax.css';
import { HashLink as Link } from 'react-router-hash-link';

function AboutParallax() {

    return (
        <div  className='serif'>
            <div className='margin'></div>
            <section className='parallax'>
                <div data-aos="fade-down" data-aos-duration="2000"  className='parallax-inner'>
                  <div data-aos="fade-right" data-aos-duration="3000">
                    <h1 className='white'>About AMKA Capitals</h1>
                    <p  style={{ fontWeight: 'bold' }}>AMKA capital services is a financial services provider company. Earlier named The Investment Corporation of India,
                        the company is primarily involved in investing in long-term investments arranging such as equity shares and equity-
                        related securities services.</p>
                    <Link to='/aboutus/#aboutus'><Button>Know More!</Button></Link>
                  </div>
                </div>
            </section>
            <div className='margin'></div>
        </div>
    )
}

export default AboutParallax
