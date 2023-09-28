import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from 'antd';
import {RiArrowDownSLine} from 'react-icons/ri';
import OurBusinessData from '../PageTemplate/OurBusinessData';

const Navbar = () => {

    const [navbar, setNavbar] = useState('');
    const [navbarBg, setNavbarBg] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 40){
                setNavbarBg(true);
            }
            else{
                setNavbarBg(false);
            }

        });
        return () =>{
            window.removeEventListener('scroll');
        }
    },[])

    return(
        <div className={`${navbarBg?'navbarBg':''} navbar serif flex justify-between  items-center ph2 ${navbar==='block'?'vertical':''}  `}>
            <div className='flex flex-row'>

        <Link  style={{textDecorationColor:'none'}} to='/' >
        <div className="dib"><img className=" ma0 pa0"  width='50px' src='https://i.postimg.cc/v83M9CLJ/amka-LOGO-1-1.png' alt='salora-capitals-logo'/></div>
        </Link>
        <Link  style={{textDecorationColor:'none'}} to='/' >  <p className='ml2 f4 mt2  dib tl b pointer white'>AMKA CAPITAL SERVICES</p></Link>
            </div>
            <div className='hide-navlist' style={{display:`${navbar}`}}>
                <ul className={` flex ma0 pa0 justify-center items-center navbar-list ${navbar==='block'?'vertical':''}`}>

                    <Link  to='/firm#firm' className='flex justify-center items-end'>
                        <li className='mh2 f5 white nav-list'>Firm <RiArrowDownSLine color='white'/>
                      <ul className='dropdown  justify-center items-center br2 shadow-5 black pa3' style={{position:'absolute',backgroundColor:"white"}}>
                                <Link to="/firm/principle#firm"><li className='mt3 dropdown-items black'onClick={()=>setNavbar('')} >Guiding Principles</li></Link>
                                <Link to="/firm/people#firm"><li className='mt1 dropdown-items black' onClick={()=>setNavbar('')}>People</li></Link>
                                <Link to="/firm/resp#firm"><li className='mt1 dropdown-items black'onClick={()=>setNavbar('')} >Responsiblity</li></Link>
                                {/* <Link to="/firm/history"><li className='mt1 dropdown-items black'>History</li></Link> */}
                                <Link to="/firm/office#firm"><li className='mt1 dropdown-items black'>Offices</li></Link>
                                <Link to="/firm/organization#firm"><li onClick={()=>setNavbar('')} className='mt1 dropdown-items black'>Organization</li></Link>
                            </ul>
                        </li>
                    </Link>

                    <li className='mh4 f5 nav-list pointer'>
                        Our Services <RiArrowDownSLine/>
                      <ul className='dropdown   justify-center items-center br2 shadow-5 black pa3' style={{position:'absolute',backgroundColor:"white"}}>
                            {
                                Object.keys(OurBusinessData).map((item,idx)=>{
                                    return(
                                        <Link key={idx} to={`/${item}#services`}><li className=' black dropdown-items' onClick={()=>setNavbar('')}>{OurBusinessData[item].title}</li></Link>
                                    );
                                })
                            }
                        </ul>
                    </li>

                    <Link to="/expertise#expertise"><li onClick={()=>setNavbar('')} className='mh4 f5 white pointer'>Expertise</li></Link>
                  <a href="https://confident-thompson-ecfb46.netlify.app/filelogin"><li className='mh4 f5' onClick={()=>setNavbar('')} ><Button >File Login</Button></li></a>

                    {/*<li className='mh4 f5'><BsSearch/></li>*/}
                </ul>
            </div>
            <GiHamburgerMenu style={{display:`${navbar==='block'?'none':''}`}} onClick={()=>setNavbar('block')} className='hide-ham show-ham' size='1.8rem'/>
            <ImCross style={{position:'absolute',top:'8px',right:'8px',display:`${navbar==='block'?'':'none'}`}} onClick={()=>setNavbar('')} size='1.2rem'/>
        </div>
    );
}

export default Navbar;
