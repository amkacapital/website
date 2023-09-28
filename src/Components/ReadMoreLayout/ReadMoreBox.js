import React from 'react';
import './ReadMoreBox.css';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const ReadMoreBox = ({history}) => {
    return (
        <div className="box pointer">
            <Link to="/community/#community"><div className="box1"><h2 data-aos="fade-right" data-aos-duration="2000" className="white" style={{ color: `${history.location.pathname === '/community/' ? '#1890ff' : ''}` }}>Community</h2></div></Link>
            <Link to="/sustain/#sustain"><div className="box1" ><h2 data-aos="fade-right" data-aos-duration="2000" className="white" style={{ color: `${history.location.pathname === '/sustain/' ? '#1890ff' : ''}` }}>Sustainability</h2></div></Link>
            <Link to="/esg/#esg"><div className="box1"><h2 data-aos="fade-left" data-aos-duration="2000" className="white" style={{ color: `${history.location.pathname === '/esg/' ? '#1890ff' : ''}` }}>ESG Policy</h2></div></Link>
            <Link to="/contact/#contact"><div className="box1"><h2 data-aos="fade-left" data-aos-duration="2000" className="white" style={{ color: `${history.location.pathname === '/contact/' ? '#1890ff' : ''}` }}>Contact Us</h2></div></Link>
        </div>
    )
}

export default withRouter(ReadMoreBox);
