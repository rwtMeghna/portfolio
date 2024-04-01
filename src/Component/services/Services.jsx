import React, { useState } from 'react'
import "./services.css";


const Services = () => {

    const[toggleState , setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }

  return (

 

    <section className="section services" id="services">

   <h2 className="section__title">Services</h2>
    <span className='section__subtitle'>What I Offer</span>

    <div className="services__container container grid">

        <div className="services__content">
           <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Networking </h3>
            </div>
            <span className="services_button"  onClick={()=>toggleTab(1)}>View More
            <i className="uil uil-arrow-right services_button-icon"></i></span>



            <div className={toggleState===1 ?"services__modal active-modal" :"services__modal"}>

                <div className="services__modal-content">

                    <i onClick={()=>toggleTab(0)}className='uil uil-times services__modal-close'></i>

                    <h3 className="servies__modal-title">UI/UX Designer</h3>
                    <p className="services__modal-description">
                        With 1yrs of experince
                    </p>


                    <ul className="services__modal-services flex">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Experience in telecom networking, with 4G and 5G data, &proficiency in troubleshooting network
issues using HTTPS protocol and knowledge of the OSI model. </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Managed and optimized MySQL databases</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Collaborated with development teams to debug and troubleshoot API issues identified during
Postman testingSSH </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Managed IT service desk operations, including incident, change management and service request
management, using ITSM tools.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="services__content">
           <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Full Stack Web Devloper</h3>
            </div>
            <span className="services_button" onClick={()=>toggleTab(2)}>View More{" "} 
            <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState===2 ?"services__modal active-modal" :"services__modal"}>

                <div className="services__modal-content">

                    <i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className="servies__modal-title">Full Stack Web Devloper</h3>
                    <p className="services__modal-description">
                        Services with more than 2 years of experince
                    </p>


                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">I devlop the user interface </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Web page devlopment</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">I create UX element interaction </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Design & mockup of products and compaines</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
    </section>
  )
}

export default Services