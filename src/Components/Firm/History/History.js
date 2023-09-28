import React,{useState} from 'react';
import { historyData } from './historyData';
import './History.css';


export const History = () => {
    const [year,setYear]=useState('highlight');
    const [dummy]=useState([{id:0}]);
    return (
        <div className='serif'>
        <h2 className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>THROUGHOUT OUR HISTORY, WE HAVE FOCUSED ON ONE GOAL:</h2>
        <h2 className="white b" style={{letterSpacing:'1.5px',wordSpacing:'3px'}}>CREATING PROPERTIES OF ENDURING VALUE.</h2>
        <p className="white para">Tishman Speyer has acquired, developed and operated 463 projects. These projects total over 213 million square feet and form the backbone of our global real estate portfolio of US $115 billion in total value across the United States, Europe, Latin America and Asia.</p>
        <hr className="hr mv4" style={{width:'100%'}}/>
        <p className="white para">Our mission and our values are deeply embedded in our history. Over 100 years ago, Tishman Realty & Construction began in 1898. In answer to the changing real estate market, ROBERT V. TISHMAN and JERRY I. SPEYER founded Tishman Speyer Properties as a privately held limited partnership in 1978.</p><br/>    
        <h3 className="white b">Explore our history and learn how Tishman Speyer came to be the leading global real estate firm it is today.</h3> <br/>   
        <div className="table">
            <div className="table-head" style={{backgroundColor:'#708DB7'}}>
                 <p className="yr" onClick={()=>setYear('highlight')}>Highlights</p>
                 <p className="yr" onClick={()=>setYear('1970')}>1970<sup>s</sup></p>
                 <p className="yr" onClick={()=>setYear('1980')}>1980<sup>s</sup></p>
                 <p className="yr" onClick={()=>setYear('1990')}>1990<sup>s</sup></p>
                 <p className="yr" onClick={()=>setYear('2000')}>2000<sup>s</sup></p>
                 <p className="yr" onClick={()=>setYear('2010')}>2010<sup>s</sup></p>
            </div>
            <div>
                {

                dummy.map((i)=>{
                    if(year==='highlight')
                    {
                        return(
                            <div style={{width:'100%'}} key={i}>
                                {
                               historyData.filter(i=>i.highlight===1).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                    else if(year==='1970')
                    {
                        return(
                            <div style={{width:'100%'}}>
                                {
                               historyData.filter(i=>i.year>=1970 && i.year<=1979).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                    else if(year==='1980')
                    {
                        return(
                            <div style={{width:'100%'}}>
                                {
                               historyData.filter(i=>i.year>=1980 && i.year<=1989).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                    else if(year==='1990')
                    {
                        return(
                            <div style={{width:'100%'}}>
                                {
                               historyData.filter(i=>i.year>=1990 && i.year<=1999).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                    else if(year==='2000')
                    {
                        return(
                            <div style={{width:'100%'}}>
                                {
                               historyData.filter(i=>i.year>=2000 && i.year<=2009).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                    else if(year==='2010')
                    {
                        return(
                            <div style={{width:'100%'}}>
                                {
                               historyData.filter(i=>i.year>=2010 && i.year<=2019).sort((a, b) => a.year > b.year ? 1:-1).map((item,i)=>{
                                  return(
                                      <>
                                        <div className="table-data">
                                            <h2 className="white">{item.year}</h2>
                                            <p>{item.data}</p>
                                            
                                        </div>
                                        <hr className="hr" style={{width:'85%'}}/>
                                       </>
                                  )
                               })
                                }
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>    
    </div> 
    )
}
