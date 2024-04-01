import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {

 const [toggelState , setToggleState]=useState(1);
 
 const toggleTab=(index)=>{
    setToggleState(index);
 }


  return (
    
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personnel Journey</span>

        <div className="qualification__container container">

            <div className="qualification_tab">


                <div  className={toggelState===1 ?
                "qualification__button  qualification__active button--flex" :"qualification__button button--flex"}
                
                onClick={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                </div>

                <div className={toggelState===2 ?
                "qualification__button  qualification__active button--flex" :"qualification__button button--flex"}
                onClick={()=>toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                </div>
            </div>




            <div className="qualifications__section">


                <div className={toggelState===1?"qualification__content qualification__content-active":
            "qualification__content"}>

                <div className="qualification__data">

                        <div>
                            <h2 className="qualification__title">B.Tech</h2>
                            <span className="qualification__subtitle">Electronics and Communication Eng.</span>
                            <div className="qualification__calender">

                                <i className="uil uil-calender-alt">2018-2022</i>
                            </div>
                        </div>


                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h2 className="qualification__title"> Full Stack Web Devloper</h2>
                            <span className="qualification__subtitle">UI/UX Devloper</span>
                            <div className="qualification__calender">

                                <i className="uil uil-calender-alt">2022-Present</i>
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h2 className="qualification__title"> Python</h2>
                            <span className="qualification__subtitle">Basic</span>
                            <div className="qualification__calender">

                                <i className="uil uil-calender-alt">2022</i>
                            </div>
                        </div>

                        
                    </div>
</div>



                    <div className={toggelState===2?"qualification__content qualification__content-active":
            "qualification__content"}>
                    <div className="qualification__data">

 
                    {/* <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}

                        <div>
                            <h2 className="qualification__title">Domain Specialist</h2>
                            <span className="qualification__subtitle">Ericsson</span>
                            <div className="qualification__calender">

                                <i className="uil uil-calender-alt">2022-Present</i>
                            </div>
                        </div>

                        {/* <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}
                    </div>



                    
                   </div>


                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h2 className="qualification__title"> Full Stack Web Devloper</h2>
                            <span className="qualification__subtitle">UI/UX Devloper</span>
                            <div className="qualification__calender">

                                <i className="uil uil-calender-alt">2022-Present</i>
                            </div>
                        </div>

                        
                    </div> */}



                </div>
            </div>

        
    </section>
  )
}

export default Qualification