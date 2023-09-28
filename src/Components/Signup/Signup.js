import React from 'react';
import { Button } from 'antd';
import '../LoginScreen/LoginScreen.css';
import { HashLink as Link } from 'react-router-hash-link';

const Signup = () => {
    return (
        <div id="signup" style={{height:'100%',background:`rgba(0,0,0,0.26) url('https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60') no-repeat center center/cover`,backgroundBlendMode:'darken'}}
        className='pt6 pb4 flex justify-center items-center pb6 serif'>
            <div data-aos="fade-down"  data-aos-duration="2000"  className='glass-div glass-div-emp br4 black shadow-5 pv5'>
                <h1 className='mb1'>Welcome to AMKA CAPITALS</h1>
                <p>Create your account</p>
                <input className="input-div" placeholder='Name'/>
                <input className="input-div" placeholder='Email'/>
                <input className="input-div" placeholder='Contact no.'/>
                <input className="input-div" placeholder='Password'/>
                <input className="input-div" placeholder='Confirm password'/>
              <h4>Already have an account <Link to="/signin#signin" className='bb black'>Sign In</Link></h4>
                <Button className='mt3' type="primary">Register</Button>
            </div>
        </div>
    )
}

export default Signup;
