import React from 'react';
import './Footer.css';
import {SiGmail} from 'react-icons/si';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineFacebook} from 'react-icons/ai';
import { Button } from 'antd';

function Footer() {
    return (
        <div  className='footer serif '>
          <div className=" flex justify-around flex-wrap pv3 items-center ph3" >
            <div  className='ma2'>© Copyrights 2021 | amkacapitals.com</div>
            <div className='flex ma2 justify-center items-center'>
            <FiInstagram   className='ma2' size='1.4rem'/>
            <AiOutlineFacebook   className='ma2' size='1.4rem'/>
            <SiGmail   className='ma2' size='1.4rem'/>
            </div>
            <a  href="https://confident-thompson-ecfb46.netlify.app/emplogin"><Button>Employee Login</Button></a>
            </div>
        </div>
    )
}

export default Footer;
