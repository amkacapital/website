import './App.css';
import React,{useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import { HomePage } from './Components/Pages/HomePage/HomePage';
import {
  HashRouter as Router,
  Switch,
  Route,
  // withRouter
} from "react-router-dom";
import FirmPage from './Components/Pages/FirmPage/FirmPage';
import Footer from './Components/Footer/Footer';
import FooterTop from './Components/Footer/FooterTop';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import PageTemplate from './Components/PageTemplate/PageTemplate';
import ExpertisePage from './Components/Pages/Expertisepage/ExpertisePage';
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import OurBusinessData from './Components/PageTemplate/OurBusinessData';
import ReadMoreCommunity from './Components/ReadMoreLayout/ReadMoreCommunity';
import ReadMoreSustain from './Components/ReadMoreLayout/ReadMoreSustain';
import ReadMoreESG from './Components/ReadMoreLayout/ReadMoreESG';
import ReadMoreContact from './Components/ReadMoreLayout/ReadMoreContact';
import Aos from 'aos';
import "aos/dist/aos.css";
import PrivacyPolicy from './Components/Pages/Policies/PrivacyPolicy';
import Terms from './Components/Pages/Policies/Terms';
import ReturnPolicy from './Components/Pages/Policies/ReturnPolicy';

function App() {

  useEffect(()=>{
    Aos.init();
  },[]);

 console.log(Object.keys(OurBusinessData));
  return (
    <div className="App">
      <Router>
                <Navbar/>
                <Switch>
                    <Route exact  path='/' component={HomePage}/>
                    <Route path='/firm' component={FirmPage}/>
                    <Route path='/expertise' component={ExpertisePage}/>
                    <Route exact path='/loginscreen' component={LoginScreen}/>
                    <Route exact path='/privacypolicy' component={PrivacyPolicy}/>
                    <Route exact path='/terms' component={Terms}/>
                    <Route exact path='/returnpolicy' component={ReturnPolicy}/>
                    {
                        Object.keys(OurBusinessData).map((item,idx)=>{
                            return(
                              <Route key={idx} exact path={`/${item}`} component={()=><PageTemplate data={OurBusinessData[item]}/>}/>
                            );
                        })
                    }
                    <Route exact path='/aboutus' component={Aboutus}/>
                    <Route exact path='/signin' component={Signin}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/community' component={ReadMoreCommunity}/>
                    <Route exact path='/sustain' component={ReadMoreSustain}/>
                    <Route exact path='/esg' component={ReadMoreESG}/>
                    <Route exact path='/contact' component={ReadMoreContact}/>
                </Switch>
            <FooterTop/>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
