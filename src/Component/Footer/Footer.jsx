import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    
    <footer className="footer">

        <div className="footer__container container">
            <h1 className="footer__title">Megha</h1>

            <ul className="footer__list">

                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#project" className="footer__link">Projects</a></li>
                <li><a href="#portfolio" className="footer__link">Portfolio</a></li>

            </ul>

            <div className="footer__social">

            <a href="ttps://www.instagram.com/rwtmeghna/" 
        className="footer__social-link" target="_blank">
 <i className="bx bxl-instagram"></i>
        </a>



        <a href="https://www.linkedin.com/in/megha-rawat-9b3697233/" 
        className="footer__social-link" target="_blank">
        <i className="bx bxl-linkedin"></i>
        </a>
{/* 
        <a href="https://github.com/rwtMeghna" 
        className="footer__social-link" target="_blank">
        <i className="bx bxl-github-alt"></i>
        </a> */}


            </div>

            <span className="footer__copy">
                &#2882;Rawatmeghna.All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer