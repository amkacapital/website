import React from 'react';
import { Button } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';

const Signin = () => {
    return (
        <div id="signin" style={{height:'100%',background:`rgba(0,0,0,0.26) url('https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') no-repeat center center/cover`,backgroundBlendMode:'darken'}}
        className='pt6 pb4 flex justify-center items-center pb6 serif'>
            <div data-aos="fade-up"  data-aos-duration="2000"  className='glass-div glass-div-emp br4 black shadow-5 pv5'>
                <h1 className='mb1'>Welcome to AMKA CAPITALS</h1>
                <p>Sign In</p>
                <input className="input-div" placeholder='Name'/>
                <input className="input-div" placeholder='Email'/>
                <input className="input-div" placeholder='Password'/>
              <h4>Don't have an account <Link to="/signup#signup" className='black bb'>Signup</Link></h4>
                <Button type="primary" className='mt3'>Sign In</Button>
            </div>
        </div>
    )
}

export default Signin
