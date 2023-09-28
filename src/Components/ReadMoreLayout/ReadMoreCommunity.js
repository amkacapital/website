import React from 'react';
import ReadMoreBox from './ReadMoreBox';
import './ReadMoreLayout.css';

const ReadMoreCommunity = ({history}) => {
        return (
            <div  className="readmore-div pv6 serif" id="community">
                <div className="readmore-black-box">
                    <h1 data-aos="zoom-in" data-aos-duration="2000" className="white b mv4 " style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>
                       COMMUNITY
                    </h1>
                   <ReadMoreBox /><br/><br/>
                    <div style={{ padding:'3% 5% 5% 5%'}}>
                    <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="white tl">OVER 1,410 EMPLOYEES. COUNTLESS COMMUNITIES.ONE SHARED CIVIC COMMITMENT.</h2><br/>
                    <p data-aos="fade-right" data-aos-duration="2000" className="para tl">At Amka, our deep-rooted philanthropic efforts are numerous, and our commitment to provide opportunities that encourage social growth through community involvement is well established.</p><br/>
                    <hr className="hr" style={{width:'100%'}}/><br/>
                    <p data-aos="fade-left" data-aos-duration="2000" className="para tl">Our employees are the foundation of our community service initiatives. And, as individuals, they are also deeply committed to being active in their local communities across the globe. We are very proud of their contributions.</p><br/>
                    <p data-aos="fade-right" data-aos-duration="2000" className="para tl">In Europe we have recently completed three different urban green spaces totaling over four acres of parkland in very dense urban areas. This urban green space has become an oasis of the outdoors for members of these communities. In fact, throughout our global portfolio, we look to create open space and community parkland.</p><br/>
                    <p data-aos="fade-left" data-aos-duration="2000" className="para tl">In 2010, wood from the iconic Rockefeller Center Christmas Tree—70 years old and almost 80 feet high—was milled into lumber and used in the construction of an eight-unit condominium built by Habitat for Humanity in Stamford, Connecticut. The donation of our annual Christmas Tree to Habitat for Humanity has become a Tishman Speyer tradition.</p><br/>
                    <p data-aos="fade-right" data-aos-duration="2000" className="para tl">These examples of community involvement are just a few of the hundreds of important relationships we have formed and continue to forge within our communities across the globe.</p><br/>
                </div>
                </div>
            </div>
        )
}

export default ReadMoreCommunity;
