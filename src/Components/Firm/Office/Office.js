import React, { useState } from 'react';
import { Button } from 'antd';
import img2 from '../../HomeCarousel1/img2.jpg';
import './Office.css';
import { withRouter } from 'react-router-dom';

const Office = ({history}) => {
    const country = [
        {
            name: 'North America',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/North_America_satellite_orthographic.jpg',
            link: 'namerica',
            link_name: 'View all offices in North America',
            location: [
                {
                    l1: '125 High Street',
                    l2: 'Boston, MA 02110',
                    l3: 'United States of America',
                    l4: '02110',//postal
                    l5: "1617-342-7508", //phone
                    l6:"richardbrown@amkacapital.com" //email
                },
                {
                    l1: 'AMKA capital services',
                    l2: 'The canopy tower apartado 8-4507',
                    l3: 'Pannama city',
                    l4: "32401",
                    l5: "011-507-264-5721",
                    l6:"shmuelmartinez@amkacapital.com" //email

                }
            ]
        },
        {
            name: 'South America',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/South_America_topic_image_Satellite_image.jpg/1024px-South_America_topic_image_Satellite_image.jpg',
            link: 'samerica',
            link_name: 'View all offices in South America',
            location: [
                {
                    l1: "AQWA Corporate 2000",
                    l2: "Andar, Porto Maravilla",
                    l3: 'Rio de Jenerio, Brazil ',
                    l4: "20931-675",
                    l5: "59785 51605",
                    l6:"ashwinkaraya@amkacapital.com" //email

                }
            ]
        },
        {
            name: 'Africa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Africa_satellite_orthographic.jpg/1200px-Africa_satellite_orthographic.jpg',
            link: 'africa',
            link_name: 'View all offices in Africa',
            location: [
                {

                    l1: '2th floor AMKA capital tower Mindspace',
                    l2: 'Bhumi Park 45 Ebenezer, Cybercity ,',
                    l3: 'Saint Louis, Mauritius',
                    l4: "73417",
                    l5: "230-549595",
                    l6:"medhaganput@amkacapital.com" //email

                },
                {
                    l1: 'Nairobi Kenya, 2th Floor,',
                    l2: 'The village market, Limuru Road,',
                    l3: 'Giri Area, Nairobi ',
                    l4: "1250-00621",
                    l5: "254-733612828",
                    l6:"rajubhaipatel@amkacapital.com" //email

                },
                {
                    l1: 'Kinodoni',
                    l2: 'OT No- 8108111',
                    l3: 'Kijitonyama - Ali Maua',
                    l4: "Dar Es Salaam, Tanzania",
                    l5: "255-715295420",
                    l6:"felexmwaria@amkacapital.com" //email

                },

            ]
        },
        {
            name: 'Asia',
            image: 'https://www.lawfareblog.com/sites/default/files/styles/banner/public/Asia_satellite_plane_0.jpg?itok=OxGz2Wbz',
            link: 'asia',
            link_name: 'View all offices in Asia',
            location: [
                {
                    l1: '520, Oud Metha Offices',
                    l2: 'Bur Dubai,',
                    l3: 'Dubai UAE',
                    l4: "9123",
                    l5: "+97 1555581901",
                    l6:"abdulkhalid@amkacapital.com" //email

                },
                {
                    l1: '401 manek shmurti ,Newark road .',
                    l2: 'above HDFC bank vile parle ( E)  ',
                    l3: 'Mumbai ,India',
                    l4: "400057",
                    l5: "91 93708 43761",
                    l6:"amolkadam@amkacapital.com" //email

                },
                {
                    l1: 'Flat no 25 ,',
                    l2: '12/ F Acacia building, 150 Kennedy Road Wan Chai',
                    l3: 'Hong kong ',
                    l4: "42345",
                    l5: "852-5349-7836",
                    l6:"williamchang@amkacapital.com" //email

                },
                {
                    l1: 'Survey No.1038 Plot No.81,',
                    l2: '2nd Floor,Shri Shivaji Co-operation Housing Society,',
                    l3: 'Pune',
                    l4: "411016",
                    l5: "91 9561789427",
                    l6:"adityakhivansara@amkacapital.com" //email

                }
            ]
        }
    ];
    const [area, setArea] = useState("none");

    if (area === 'none') {
        return (
            <div className='serif'>
                <h2 data-aos="fade-left"  data-aos-duration="2000" className="white b" style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>OUR INTERNATIONAL WORKFORCE OPERATES FROM VARIOUS OFFICES SUPPORTED BY OVER 12 FINANCIAL INSTITUTIONS  ACROSS THE GLOBE.</h2>
                <hr className="hr mv4" style={{ width: '100%' }} />
                <h2 data-aos="fade-left"  data-aos-duration="2000" className="white" style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>OUR OFFICES</h2>
              <p data-aos="fade-right"  data-aos-duration="2000" className="para">Through our extensive network, local knowledge and insights are brought together with global experience and expertise to create real estate of enduring value.</p>
                <div className="country-main-div">
                    {
                        country.map((i) => {
                            return (
                                <>
                                    <div className="country-div">
                                        <img data-aos="fade-left"  data-aos-duration="2000" src={i.image} className="c-img" height='180px' style={{objectFit:'cover'}} alt='something'/>
                                      <div data-aos="fade-right"  data-aos-duration="2000" className="ph3">
                                            <h2 className="white">{i.name}</h2>
                                            <p className="pointer" style={{ color: '#1890ff' }} onClick={() => {
                                                setArea(i.link);
                                                 }}>{i.link_name}</p>
                                        </div>

                                    </div>
                                    <hr className="hr" style={{ width: '100%' }} />
                                </>
                            )

                        })
                    }
                </div>

            </div>
        )
    }
    else {
        console.log(area);
        return (
            <div>
                {
                    country.filter(i => i.link === area).map((loc, index) => {
                        console.log(loc ,"area", area);
                        return (
                            <div key={index}>
                                <h1 className="white pb3" style={{ letterSpacing: '1.5px', wordSpacing: '3px' }}>{loc.name}</h1>
                                <div>
                                {
                                    loc.location.map((des,i)=>{
                                        return(
                                        <>
                                        <div className="location-div pv4">
                                            <p className="para f4">{des.l3}</p>
                                            <div className="div1">
                                                <p className="para">{des.l1}<br/>{des.l2}<br/>{des.l3}<br/></p>
                                                <Button style={{margin:'1%',width:"90%"}} ghost>GET DIRECTIONS</Button>
                                            </div>
                                            <div className="div2">
                                                <p className="para">Postal: {des.l4}<br/>
                                                 Phone :+{des.l5}<br/>Email:{des.l6}<br/></p>
                                               {/*<Button style={{margin:'1%'}} ghost>EMAIL THIS OFFICE</Button>*/}
                                            </div>
                                        </div>
                                        <hr className="hr" style={{width:'100%'}}/>
                                        </>
                                        )
                                    })
                                }
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        )
    }

}

export default withRouter(Office);
