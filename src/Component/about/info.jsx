import React , {useState} from 'react'
import Img1 from "../../Assessts/01.png";
import Img2 from "../../Assessts/02.png";
import Img3 from "../../Assessts/03.png";
// import Img4 from "../../Assessts/04.png";
import Img5 from "../../Assessts/05.png";
import Img10 from "../../Assessts/10.png"

const Info = () => {

const [toggleState , setToggleState]=useState(0);

const toggleTab=(index)=>{
  setToggleState(index);
}

  return (
    <div className="about__info grid">
    
    {/* <div className="about__box">
      <i className='bx bx-award about__icon'></i>
      <h3 className="about__title">Experience</h3>
      <span className="about__subtitle">2 Years Working</span>
    </div> */}


<div className="services__content">
           <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Experience </h3>
            </div>
            <span className="services_button"  onClick={()=>toggleTab(1)}>View More
            <i className="uil uil-arrow-right services_button-icon"></i></span>



            <div className={toggleState===1 ?"services__modal active-modal" :"services__modal"}>

                <div className="services__modal-content">

                    <i onClick={()=>toggleTab(0)}className='uil uil-times services__modal-close'></i>

                    <h3 className="servies__modal-title">Networking Engineer</h3>
                    <p className="services__modal-description">
                       1 years of experience
                    </p>


                    <ul className="services__modal-services ">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Experience in telecom networking, with 4G and 5G data, &proficiency in troubleshooting network
issues using HTTPS protocol </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Managed and optimized MySQL databasest</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Configured network devices and routers using SSH through Xshell. </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Collaborated with development teams to debug and troubleshoot API issues identified during
Postman testing.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    {/* <div className="about__box">
      <i className='bx bx-briefcase-alt about__icon'></i>
      <h3 className="about__title">Project</h3>
      <span className="about__subtitle"></span>
    </div> */}





<div className="services__content">

           <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Project </h3>
            </div>
            <span className="services_button"  onClick={()=>toggleTab(2)}>View More
            <i className="uil uil-arrow-right services_button-icon"></i></span>



            <div className={toggleState===2 ?"services__modal active-modal" :"services__modal"}>

                <div className="services__modal-content">

                    <i onClick={()=>toggleTab(0)}className='uil uil-times services__modal-close'></i>

                    <h3 className="servies__modal-title">Full Stack Devloper</h3>
                    <p className="services__modal-description">
                    Front-end: JavaScript (with frameworks like React.js) for building dynamic and interactive user interfaces.
                    </p>
                    <p className="services__modal-description">Back-end: JavaScript (Node.js) to build server-side logic, handle requests, and manage databases.</p>
                    <p className="services__modal-description">Database Management:  SQL ( MySQL) or NoSQL ( MongoDB) to interact with them using ODM(Mongoose)libraries</p>


                    <ul className="services__modal-services grid">

                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Experience in telecom networking, with 4G and 5G data, &proficiency in troubleshooting network
issues using HTTPS protocol </p>
                        </li> */}


<div className="about__conatiner conatiner grid megha">
            <img src={Img1} alt=""  className='meg__img' />
            


            {/* <div className="about__conatiner conatiner grid"> */}
            <img src={Img2} alt=""  className='meg__img' />
           


            {/* <div className="about__conatiner conatiner grid"> */}
            <img src={Img3} alt=""  className='meg__img' />
            {/* </div> */}
            {/* <div className="about__conatiner conatiner grid"> */}
            <img src={Img5} alt=""  className='meg__img' />
            {/* </div> */}
            {/* <div className="about__conatiner conatiner grid"> */}
            <img src={Img10} alt=""  className='meg__img' />
            </div>




                        {/* <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Managed and optimized MySQL databasest</p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Configured network devices and routers using SSH through Xshell. </p>
                        </li>


                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal_icon "></i>
                            <p className="services__modal-info">Collaborated with development teams to debug and troubleshoot API issues identified during
Postman testing.</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>




    {/* <div className="about__box">
      <i className='bx bx-support about__icon'></i>
      <h3 className="about__title">Support</h3>
      <span className="about__subtitle">24/7</span>
    </div> */}


  </div>
  )
}

export default Info