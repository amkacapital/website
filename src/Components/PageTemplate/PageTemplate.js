import React from 'react';
import './PageTemplate.css';

const PageTemplate = ({data}) => {

	return (
		<div id="services" className="page-template serif">
			<div  className="cover" style={{backgroundImage: `url(${data.cover})`}}>
				<div className="headline">
					<p data-aos="zoom-in"  data-aos-duration="2000" className="title ">{data.title}</p>
				<p data-aos="zoom-out"  data-aos-duration="2000" className="subtitle">{data.subtitle}</p>
				</div>
			</div>
			<div className="info-container">
				<div   data-aos-duration="2000" className="description_title">
					<p data-aos="zoom-up"  data-aos-duration="2000" className="info_subtitle">{data.info_subtitle}</p>
				<p data-aos="zoom-up"  data-aos-duration="2000" className="info_title">{data.info_title}</p>
				</div>
				<div className="info-title">
					<div  className="info_description">
						{
							data.info_point.map((item, index) => {
								if(index===data.info_point.length-1)
								{
									return(
										<div data-aos="fade-up-right"  data-aos-duration="2000" className="info_point" key={index}>
											<p className="point_title">{item.point_title}</p>
											<p className="point_description">{item.point_description}</p>
										</div>
									);
								}
								else
								{
									return(
										<div data-aos="fade-up-right"  data-aos-duration="2000" className="info_point border-bottom" key={index}>
											<p className="point_title">{item.point_title}</p>
											<p className="point_description">{item.point_description}</p>
										</div>
									);
								}
							})
						}
					</div>
					<div data-aos="fade-up-left"  data-aos-duration="2000" className="info-image" style={{backgroundImage: `url(${data.info_image})`}}></div>
				</div>
			</div>
			<div className="qoute">
				<div className='qoute_margin'></div>
	            <section className='qoute_parallax' style={{backgroundImage: `url(${data.qoute_image})`}}>
	                <div className='qoute_parallax-inner'>
	                    <h1 data-aos="zoom-in"  data-aos-duration="2000" className='white tl'>{data.qoute}</h1>
										<p data-aos="zoom-out"  data-aos-duration="2000" style={{textAlign: 'left', textTransform: 'capitalize'}}>{data.by}</p>
	                    <p  data-aos="zoom-out"  data-aos-duration="2000" style={{textAlign: 'left', textTransform: 'capitalize',fontSize:"0.8rem"}}>{data.position}</p>
	                </div>
	            </section>
            	<div className='qoute_margin'></div>
			</div>
		</div>
	)
}

export default PageTemplate;
