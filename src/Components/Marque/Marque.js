import React from 'react';
import Marquee from "react-fast-marquee";

function Marque() {

    const MarqueData = [
        {
            imgUrl:'https://images.unsplash.com/photo-1618979306737-081b98715fc9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWdyaWN1bHV0cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Agriculture & Allied Indsutries'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            sectorName:'Automobiles'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1584275142335-7f7cc7ba6c23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vYmlsZSUyMGluZHVzdHJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Auto Components'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZpYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Aviation'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFua2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Banking'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1588399944136-efbd34b99d6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2VtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Cement'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1541596993953-970dd2ffdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VtZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Consumer Durables'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Ecommerce'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Eduation & Training'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5naW5lZXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Engineering & Capital Goods'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Financial Services'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'FMCG'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1597600159211-d6c104f408d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2Vtc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Gems & Jewellery'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aGNhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Healthcare'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1557215402-115aed1d841b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Infrastructure'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            sectorName:'Insurance'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1573496005828-adb22e525798?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'IT & ITES'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1610891015188-5369212db097?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Manufacturing'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1424223022789-26fd8f34bba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Media & Entertainment'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1578804376914-6d367cd21488?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Metals & Mining'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1415827074580-16f98b4b676d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2lsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Oil & Gas'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Pharmaceuticals'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1580202064325-0872929e46f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Ports'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1614001964257-1bcd4504467e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGhlcm1hbCUyMHBvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Power'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1612205403230-11e8a5ae6751?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaWx3YXlzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Railways'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Real Estate'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF0b21pYyUyMHBvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Renewable Energy'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmV0YWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Retail'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1543997385-22fe0f397eeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9hZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Roads'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Science & Technology'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Services'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RlZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            sectorName:'Steel'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1609930196695-25f1f779ba47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZWNvbW11bmljYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Telecom'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1534639077088-d702bcf685e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            sectorName:'Textiles'
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            sectorName:'Tourism & Hospitality'
        },
    ]

    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="mv5">
            <h1 className="tc f2 serif">We Provide Financial Aid and Consultancy in the following sectors</h1>
            <Marquee style={{overflowY:"hidden"}} pauseOnHover={false} gradient={false} speed={30}>

                {
                    MarqueData.map((item)=>{
                        return(
                            <div data-aos="zoom-out" data-aos-duration="3000" className='mh3 pa2 flex justify-center items-center shadow-5 serif' style={{height:'220px',width:'300px',backgroundBlendMode:'darken',background:`rgba(0,0,0,0.4) url('${item.imgUrl}') no-repeat center center/cover`}}>
                                <h1 className='white'>{item.sectorName.toLocaleUpperCase()}</h1>
                            </div>
                        );
                    })
                }
            </Marquee>
        </div>
    )
}

export default Marque;
