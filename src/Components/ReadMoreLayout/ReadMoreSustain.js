import React from 'react';
import './ReadMoreLayout.css';
import img1 from '.././HomeCarousel1/img1.jpg';
import ReadMoreBox from './ReadMoreBox';

const ReadMoreSustain = ({history}) => {
        return (
            <div className="readmore-div pv6 serif" id="sustain">
                <div className="readmore-black-box">
                    <h1 data-aos="zoom-in" data-aos-duration="2000" className="white b mv4 " style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>
                    SUSTAINABILITY
                    </h1>
                    <ReadMoreBox/><br/><br/>
                    <div style={{ padding:'3% 5% 5% 5%'}}>
                    <h2 data-aos="zoom-out" data-aos-duration="2000" className="white tl">OUR COMMITMENT TO THE ENVIRONMENT</h2><br/>
                    <p data-aos="fade-up-left" data-aos-duration="2000" className="para tl">As global leaders in the real estate industry, we at Tishman Speyer realize that a strong focus on sustainability is critical to the success of our firm and the future of our planet. Since our inception in 1978, we have committed ourselves to creating and maintaining properties that are both aesthetically dynamic and environmentally efficient. In keeping with this commitment, we are constantly seeking ways to improve our environmental, social and governance (ESG) practices, and we are proud of the progress we have made over the last year.</p><br/>
                    <p data-aos="fade-up-right" data-aos-duration="2000" className="para tl">Between 2015 and 2016, we achieved a 6% reduction in energy intensity across our entire global portfolio resulting in Tishman Speyer receiving the distinction of Energy Star Partner of the Year for the third year running. Additionally, over the past year, twenty of our buildings achieved certification or recertification under LEED, BREEAM, or HQE, amounting to 65 million square feet of sustainably-certified property across four continents. And in a significant shift towards greater transparency and accountability, we have prepared this report to align with GRI’s sustainability reporting standards. </p><br/>

                    <p data-aos="fade-up-left" data-aos-duration="2000" className="para tl"><img data-aos="flip-right" data-aos-duration="2000" className='pa3-ns ma2 caro-2-img' style={{float:'left'}} src={img1}
                     alt='something'/> These standards underscore our sustainable practices not only in regards to the environment, but in the management of our relationships and in the structure of our business. Each section of this report highlights and aspect of the environmental, social, and governance (ESG) practices which have enabled Tishman Speyer to maintain its reputation as an industry leader for nearly four decades.</p><br/>
                    <p data-aos="fade-up-left" data-aos-duration="2000" className="para tl">Through delivering operational efficiency in the development and management of our properties, we seek to reduce our impacts on our tenants and the environment. By engaging with our communities in which we operate, looking after our employees and working with our suppliers, we strive to ensure that all stakeholders feel valued and respected. And by employing rigorous anti-corruption measures and maintaining high ethical standards, we aim to preserve our strong reputation of good governance.</p><br/><br/>
                    <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="white tl">" We leverage cutting-edge technology and industry-leading operations and construction practices to build sustainable properties around the world. "</h1>
                    <p data-aos="fade-right" data-aos-duration="2000"  className="para tl f4">Rob Speyer<br/>President and Chief Executive Officer<br/>New York City</p>
                </div>
                </div>
            </div>
        )
}

export default ReadMoreSustain;
