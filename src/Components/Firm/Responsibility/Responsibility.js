import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

const Responsibility = ({history}) => {
    return (
        <div className='serif'>
        <h2 data-aos="zoom-in"  data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>WE FIRMLY BELIEVE IN CORPORATE SOCIAL RESPONSIBILITY. SINCE OUR FOUNDING, THIS IDEA HAS BEEN CENTRAL TO OUR BUSINESS.</h2>
        <hr className="hr mv4" style={{width:'100%'}}/>
      <p data-aos="zoom-in"  data-aos-duration="2000" className="white para">AMKA capital services is committed to carry on the business as financial loan services and financial consultancy services relating to advise and assist in financial funding also providing low interest rate and operating business that deliver
           enduring fund providing to occupants and local communities around the world. Contributing to the financial service of vibrant, beautiful and environmentally sound communities is essential to our success.</p><br/>
         <p data-aos="fade-right"  data-aos-duration="2000" className="white para">As a global company, we feel a deep civic responsibility to each community in which we operate.  From energy conservation in victoria seychelles, to water conservation in Mumbai, to supporting Habitat for Humanity Mauritius, we respect and support the citizens we serve through positive, concrete action.</p>
            <div className=" right-sub-div">
                <div data-aos="fade-up"  data-aos-duration="2000" className="grid-sub-div">
                    <h3 className="white" style={{letterSpacing:'1px'}}>COMMUNITY </h3>
                    <p className="para">AMKA capital services is deeply committed to the communities around the globe in which we operate. Our company and our people are dedicated to giving back to these localities and to the people who live and work within them.</p>
                    <Link to="/community/#community"><Button type="primary">Read more</Button></Link>
                </div>
                <div data-aos="fade-down"  data-aos-duration="2000" className="grid-sub-div" >
                <h3 className="white" style={{letterSpacing:'1px'}}>SUSTAINABILITY</h3>
                    <p className="para">AMKA capital services, sustainability is more than a commitment, more than an issue of the moment. It is at the core of everything we do.</p>
                    <Link to="/sustain/#sustain"><Button  type="primary">Read more</Button></Link>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="grid-sub-div">
                    <h3 className="white" style={{letterSpacing:'1px'}}>ESG POLICY</h3>
                    <p className="para">Our environmental, social and corporate governance identifies a set of goals and standards that our organization strives to achieve and maintain in all aspects of our business.</p>
                    <Link to="/esg/#esg"><Button type="primary">Read more</Button></Link>
                </div>
            </div>
    </div>
    )
}
export default withRouter(Responsibility);
