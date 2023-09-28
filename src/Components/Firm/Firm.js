import React,{useState} from 'react';
import { Button } from 'antd';
import './Firm.css';
import 'tachyons';
import { withRouter } from 'react-router';
import { GPrinciples } from './GPrinciples/GPrinciples';
import { People } from './People/People';
import  Responsibility from './Responsibility/Responsibility';
import { History } from './History/History';
import  Office  from './Office/Office';
import { Organization } from './Organization/Organization';
import { HashLink as Link } from 'react-router-hash-link';


 const Firm = ({history}) => {
    const [dummy]=useState([{id:0}]);

    return (
        <div className={`pv6 firm-div serif ${history.location.pathname==='/firm' ?'firm':
        `${history.location.pathname==='/firm/principle'?'principle':
        `${history.location.pathname==='/firm/people'?'people':
        `${history.location.pathname==='/firm/resp'?'resp':
        `${history.location.pathname==='/firm/history'?'history':
        `${history.location.pathname==='/firm/office'?'office':
        `${history.location.pathname==='/firm/organization'?'org':'none'
        }`}`}`}`}`}`} } `}>
            <div id="firm" className="firm-black-box">
                <div data-aos="zoom-out-up"  data-aos-duration="2000" className="flex flex-wrap mv1 pointer justify-center">
                    <h1 style={{color:'white'}} onClick={()=>history.push('/firm')}>FIRM</h1>
                </div>
                <div className=" sub-black-box">
                    <div data-aos="fade-right"  data-aos-duration="2000" className="left-div tl">
                       <p  data-aos="fade-left"  data-aos-duration="2000" className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/principle'?'#1890ff':''}`}} onClick={()=>history.push('/firm/principle')}>GUIDING PRINCIPLES</p>
                       <hr className="hr"/>
                       <p data-aos="fade-right"  data-aos-duration="2000" className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/people'?'#1890ff':''}`}}  onClick={()=>history.push('/firm/people')}>PEOPLE</p>
                       <hr className="hr"/>
                     <p  data-aos="fade-left"  data-aos-duration="2000" className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/office'?'#1890ff':''}`}} onClick={()=>history.push('/firm/office')}>OFFICES</p>
                       <hr className="hr"/>
                       <p  data-aos="fade-right"  data-aos-duration="2000" className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/resp'?'#1890ff':''}`}} onClick={()=>history.push('/firm/resp')}>RESPONSIBILITY</p>
                       {/* <hr className="hr"/> */}
                       {/* <p className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/history'?'#1890ff':''}`}} onClick={()=>history.push('/firm/history')}>HISTORY</p> */}
                       <hr className="hr"/>
                     <p  data-aos="fade-left"  data-aos-duration="2000" className="sub-tags f5" style={{color:`${history.location.pathname==='/firm/organization'?'#1890ff':''}`}} onClick={()=>history.push('/firm/organization')}>ORGANIZATION</p>
                       <hr className="hr"/>
                    </div>
                    <div className="right-div">
                        {
                        dummy.map((item,index)=>{
                            if(history.location.pathname==='/firm')
                            {
                                console.log(history , history.location.pathname);
                                return(
                                    <div key={item.id}>
                                        <h2  data-aos="fade-left"  data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>AT AMKA CAPITAL SERVIVES, WE CONVERT OPPORTUNITY INTO VALUE THROUGH OUR EXPERTISE IN EVERY ASPECT OF FINANCIAL SERVICES.</h2>
                                        <hr className="hr mv3" style={{width:'100%'}}/>
                                        <p  data-aos="fade-right"  data-aos-duration="2000" className="white f5 para">Our global professionals work collaboratively across disciplines and borders to bring together market-driven insights, experience and expertise. All of which allow us to create properties of enduring value around the world.</p>
                                            <div className=" right-sub-div">
                                                <div  data-aos="fade-up"  data-aos-duration="2000" className="grid-sub-div">
                                                    <h3 className="white" style={{letterSpacing:'1px'}}>OUR PEOPLE: </h3>
                                                    <p className="para">Our international workforce blends local expertise, global best practices and a network of professional relationships throughout the world.</p>
                                                    <Link to="/firm/people"><Button type="primary">Read more</Button></Link>
                                                </div>
                                                <div  data-aos="fade-down"  data-aos-duration="2000" className="grid-sub-div" >
                                                <h3 className="white" style={{letterSpacing:'1px'}}>OUR OFFICES:</h3>
                                                    <p className="para">Our 40 countries  regional offices are supported by over 8 investment companies collaboration and investment services office  in 40 markets all over the world. Through this extensive network, local knowledge and insights are brought together with global experience and expertise to create financial services of enduring value.</p>
                                                    <Link to="/firm/office"><Button type="primary">Read more</Button></Link>
                                                </div>
                                                <div  data-aos="fade-up"  data-aos-duration="2000" className="grid-sub-div">
                                                    <h3 className="white" style={{letterSpacing:'1px'}}>OUR SERVICES: </h3>
                                                    <p className="para">AMKA capital services has debts, equity and unsecured investment 361 industries. These investment total over 120 million debts and equity basis various countries  portfolio of US $115 million collaboration with various group in total value across the United States, Europe, Latin America , south Africa, asia</p>
                                                    <Link to="/#wwd"><Button type="primary">Read more</Button></Link>
                                                </div>
                                            </div>
                                    </div>

                                )
                            }
                            else if(history.location.pathname==='/firm/principle')
                            {
                                console.log("principles");
                                return(

                                   <GPrinciples/>

                                )
                            }
                            else if(history.location.pathname==='/firm/people')
                            {
                                return(
                                    <People/>
                                )
                            }
                            else if(history.location.pathname==='/firm/resp')
                            {
                                return(
                            <Responsibility/>

                                )
                            }
                            else if(history.location.pathname==='/firm/history')
                            {
                                return(
                                    <History/>
                                )
                            }
                            else if(history.location.pathname==='/firm/office')
                            {
                                return(
                                  <Office/>
                                )
                            }
                            else if(history.location.pathname==='/firm/organization')
                            {
                                return(
                                   <Organization/>
                                )
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Firm);
