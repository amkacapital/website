import { Button } from 'antd';
import React from 'react';
import './LoginScreen.css';

const LoginScreen = () => {
    return(
        <div id="loginscreen"  style={{height:'100vh',background:`rgba(0,0,0,0.26) url('https://images.unsplash.com/photo-1623907912478-225b48885012?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') no-repeat center center/cover`,backgroundBlendMode:'darken'}} 
        className='pt6 pb4 flex justify-center items-center serif'>
            <div  className='glass-div glass-div-emp br4 black shadow-5 pv5'>
                <h1 className='mb1'>Welcome to AMKA CAPITALS</h1>
                <p>Please enter your login credentials</p>
                <input className="input-div" placeholder='Employee Id'/>
                <input className="input-div" placeholder='Password'/>
                <Button type="primary" className='mt3' style={{width:'25%'}}>Login</Button>
            </div>
        </div>
    );
}

export default LoginScreen;