import React from 'react';

const gdata=[
    {
        head:"We are proud of our company's heritage and history of accomplishments: It defines who we are today and guides who we will be tomorrow."
    },
    {
       head:'We succeed because our people think more creatively, assess opportunities more astutely and act more quickly than others. Our people are our lifeblood.'
    },
    {
        head:'We hold ourselves to the highest standards, not the standards set by others.'
     },
     {
        head:'We are in the business of creating extraordinary value for our investors, and recognize that our company\'s financial success is rooted in this single-minded pursuit.'
     },
     {
        head:'We honor our agreements, whether they are formed in writing or in handshakes. A deal is a deal, always.'
     },
     {
        head:'As investment services and operators, we take special pride in the distinctive low interest rate, investment structure and appearance of investment service.'
     },
     {
        head:'We perform at our best when each of us individually takes responsibility for identifying and solving problems, regardless of our role, region or title.'
     },
     {
        head:'While we encourage individual initiative and accomplishment, our best results come when we work as a team.'
     },
     {
        head:'We recruit exceptionally talented people who share our values and our way of thinking. We take each and every hiring decision seriously and ensure we are always hiring the best.'
     },
     {
        head:'We are proud of our longstanding commitment to diversity, and our workforce today reflects the global communities and cultures in which we do business.'
     },
     {
        head:'We embrace our responsibilities to the communities in which we operate around the world, and strive to make each of them a better place to live and work.'
     },
     {
        head:'The actions of each and every one of us contribute to our company\'s reputation.'
     },
     {
        head:'Building enduring relationships both inside and outside the company lays the foundation for an enduring institution.'
     }
]
export const GPrinciples = () => {
    return (
        <div id="firm" className='serif'>
        <h2  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>OUR FINACIAL TEAM IS A CONTINUOUS PURSUIT OF EXCELENT DECISION.
THESE ARE THE PRINCIPLES THAT GUIDE US.</h2>
        <h2  data-aos="fade-left"  data-aos-duration="2000" data-aos-easing="ease-in-sine" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>Our founding principles are the bedrock of our reputation and the root of our success.</h2>
        <hr className="hr mv3" style={{width:'100%'}}/>
        <p  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="para">“THE ESSENCE OF INVESTMENT MANAGEMENT IS THE MANAGEMENT OF RISKS, NOT THE MANAGEMENT OF RETURNS” — Amol  kadam </p>
        <h2 data-aos="zoom-in-up"  data-aos-duration="2000" className="white" style={{letterSpacing:'1.3px',wordSpacing:'3px'}}>Guiding Principles</h2><br/>
         {
            gdata.map((item,i)=>{
               return(
                  <>
                  <p data-aos="zoom-in-up"  data-aos-duration="2000" className="para">{item.head}</p><br/>
                </>
              )
              
            })
         }
         <h2 data-aos="zoom-in-up"  data-aos-duration="2000" className="white" style={{letterSpacing:'1.3px',wordSpacing:'3px'}}>WE FIRMLY BELIEVE IN CORPORATE SOCIAL RESPONSIBILITY. SINCE OUR FOUNDING, THIS IDEA HAS BEEN CENTRAL TO OUR BUSINESS.</h2><br/>
         <h4 data-aos="zoom-in-up"  data-aos-duration="2000" className="white" style={{letterSpacing:'1.3px',wordSpacing:'3px'}}>AMKA capital services is committed to low interest rate and operating business that deliver
enduring fund providing to occupants and local communities around the world. Contributing to the financial service of vibrant, beautiful and environmentally sound communities is essential to our success.
As a global company, we feel a deep civic responsibility to each community in which we operate.  From energy conservation in victoria seychelles, to water conservation in Mumbai, to supporting Habitat for Humanity Mauritius, we respect and support the citizens we serve through positive, concrete action.
</h4>
     </div>
    )
}
