import React from 'react';
import './People.css';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import img2 from '../../HomeCarousel1/img2.jpg';
import { HashLink as Link } from 'react-router-hash-link';

export const People = () => {
    return (
        <div className='serif'>
        <h2   data-aos="fade-up"  data-aos-duration="2000" className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>OUR PEOPLE</h2>
        {/* <div className="search-div mb3">
            <h3 className="white">Search our executive team </h3>
            <form>
             <input className="search" type="text" placeholder="By name"/>
             <select className="search">
                 <option value="">All offices</option>
                 <option value="pune">Pune</option>
                 <option value="mumbai">Mumbai</option>
                 <option value="banglore">Bangalore</option>
                 <option value="delhi">Delhi</option>
             </select>
             <select className="search">
                 <option value="">All functions</option>
                 <option value="">Investment Management</option>
                 <option value="">Disposition</option>
                 <option value="">Acquisition & Development</option>
                 <option value="">Corporate</option>
                 <option value="">Leasing</option>
                 <option value="">Design & Construction</option>
                 <option value="">Propert Management</option>
             </select>
             <select className="search">
                 <option value="">All Committees </option>
                 <option value="">Management Committee</option>
                 <option value="">Investment Committee</option>
             </select>
            <Button style={{margin:'1%'}} icon={<SearchOutlined />} ghost>Search</Button>
            </form>
        </div> */}
        <p data-aos="fade-left"  data-aos-duration="2000"  className="para">With their exceptional insight, expertise and depth of experience, our people are essential to our success.</p>
      <p data-aos="fade-right"  data-aos-duration="2000" className="para">Our global finance professionals blend local knowledge and market-driven insights with an international wealth of expertise and experience. Leveraging their creativity, entrepreneurship and innovation, they collaborate across disciplines and borders to consistently provide services around the world.</p>
        <h2 data-aos="fade-left"  data-aos-duration="2000" className="white" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>Executive Management</h2>
        <div className="search-div founder-grid">
            <div data-aos="fade-left"  data-aos-duration="2000" className="flex flex-wrap ma2 ">
                <img src='data:image/jpeg;base64,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'  alt='something' style={{width:'110px',height:'110px'}}/>
              <div data-aos="fade-left"  data-aos-duration="2000" className="ph3" style={{width:'55%'}}>
                    <h3 className="white">Mr. Khalid Hamad Abdul-Rahman Hamad</h3>
                    <p className="para">Managing Director</p>
                    <p className="para">Dubai City</p>
                      <Link to="/expertise/#expertise">View bio</Link>
                </div>
            </div>
            <div data-aos="fade-right"  data-aos-duration="2000" className="flex flex-wrap ma2 ">
                <img src={'https://i.postimg.cc/zXyM1zqw/3675e425-9350-44c3-9996-0cb655911162.jpg'}  alt='something' style={{width:'110px',height:'110px'}}/>
                <div className="ph3"  style={{width:'55%'}}>
                    <h3 className="white">Mr. Amol Kadam</h3>
                    <p className="para">Chief Executive Officer</p>
                    <p className="para">Dubai</p>
                    <Link to="/expertise/#expertise">View bio</Link>
                </div>
            </div>
        </div>
        <Link to="/firm/office#firm">
        <Button  style={{margin:'1%'}} ghost>CONTACT US</Button></Link>
        <a href="mailto:amolkadam@amkacapital.com">
        <Button style={{margin:'1%'}} ghost>MAIL US</Button></a>
    </div>
    )
}
