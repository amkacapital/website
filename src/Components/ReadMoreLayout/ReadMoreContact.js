import React from 'react';
import ReadMoreBox from './ReadMoreBox';
import './ReadMoreLayout.css';

const ReadMoreContact = () => {
    return (
        <div id="contact" className="readmore-div pv6 serif">
                <div className="readmore-black-box">
                    <h1 className="white b mv4 " style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>
                       CONTACT US
                    </h1>
                   <ReadMoreBox/><br/><br/>
                    <div  data-aos="fade-up" data-aos-duration="2000" style={{ padding:'3% 5% 5% 5%'}}>
                    <h2 className="white tl" style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>GLOBAL HEADQUARTERS</h2>
                     <p className="para tl">New York City, USA<br />
                    Rockefeller Center<br />
                    Rockefeller Plaza<br />
                    New York, New York 10111<br />
                    Phone: +1 212 715 0300</p><br />
                </div>
                </div>
            </div>
    )
}

export default ReadMoreContact;
