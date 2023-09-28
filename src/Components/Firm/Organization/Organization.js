import React from 'react'

export const Organization = () => {
    const data=[
        {
            data:"We convert opportunity into value through our expertise in every aspect of global debts and equity services, from manufacturing , services and trades industries."
        },
        {
            data:"We have arrange fund services and operated premier mixed-use industries around the world, many of which are integrated with mass transit—a complex technical financial structure and brand collaboration."
        },
        {
            data:"We have extensive experience restructure accounts historically significant industries, and we understand the importance of balancing a low interest rate heritage with the practical needs of its modern investment services."
        },
        {
            data:"We offer unparalleled low rate interest  services that go beyond the traditional. ZO., our all-inclusive loans services structured deals, is just one demonstration of our commitment to creating happier, more productive services."
        },
        {
            data:"We have a commitment to leading the way in ROI measures, interest reduction, loans diversion and efficient BEP services"
        },
        {
            data:"From fund management to development, from financial services to building low interest services—in everything we do, we believe in delivering exceptional quality and outstanding performance, and in creating investments services of enduring value around the world."
        },
    ]
    return (
        <div className='serif'>
            {/* <h2 className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>OVER 1 DECADED, 24 EMPLOYEES AND 180 MILLION DEBTES AND EQUITY SERVIES. ONE SINGULAR VISION.</h2> */}
            <p data-aos="fade-zoom"  data-aos-duration="2000" className="para">AMKA capital services is a leading owner, developer, operator and fund manager of first-class investment services around the world. Founded in 2011, AMOL KADAM  is active across the United States, Europe, south america Latin America, and Asia, and many of the world’s most prestigious relationship.</p>
            <hr className="hr mv4" style={{width:'100%'}}/>
          {/*<h2 data-aos="fade-left"  data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>WE OPERATE IN 29 MARKETS, 9 COUNTRIES AND 4 CONTINENTS</h2>
        <p  className="para">We have acquired, developed and operated over 213 million funds, assembling a portfolio in excess of US $115 billion in total value across the United States, Latin America, India and China.</p>*/}
      <h2  data-aos="fade-up-right"  data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>WE HAVE PROFESSIONALS AND SUPPORT STAFF WORLDWIDE</h2>
    <p data-aos="fade-up-left"  data-aos-duration="2000" className="para">We serve the space needs of over 1500 channel  partner worldwide. Currently we have major projects in various phases of debts and equity serveries in port of Spain in Trinidad and tobacco , Mauritius, brazil , British virgin island , caiman island , Seychelles ,India, shrilanka, Cambodia, singapor, Hong Kong, Dubai.</p>
            <h2 data-aos="fade-up-right"  data-aos-duration="2000" className="white" style={{letterSpacing:'1.5px'}}>AMKA Capitals  services in Action</h2>
            {
                data.map((item,id)=>{
                    return(
                        <div>
                            <p data-aos="fade-up-left"  data-aos-duration="2000" className="para">{item.data}</p><br/>
                        </div>
                    )
                })
            }
        </div>
    )
}
