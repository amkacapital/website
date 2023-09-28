import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
function FooterTop() {
    return (
        <div className='bg-black pa2 pt4 white f4 serif'>
            <ul className=' flex justify-center-ns justify-start items-center-ns items-start flex-wrap'>
              <Link className="white"  to="/privacypolicy#policy"><li  data-aos="fade-down" data-aos-duration="1200" className=' mh4'>Privacy Policy</li></Link>
                <Link  className="white" to="/terms#conditions"><li  data-aos="fade-down" data-aos-duration="1500" className='mh4'>Terms</li></Link>
              <Link  className="white" to="/returnpolicy#returnpolicy"><li  data-aos="fade-down" data-aos-duration="1700" className='mh4'>Return Policy</li></Link>
              <Link  className="white" to="/aboutus#abt"><li  data-aos="fade-down" data-aos-duration="1700" className='mh4'>About Us</li></Link>
            </ul>
        </div>
    )
}

export default FooterTop;
