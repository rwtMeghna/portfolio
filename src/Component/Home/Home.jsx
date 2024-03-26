import React from 'react'
import "./Home.css";
import Data from './Data.jsx';
import Social from './Social.jsx';
import Scrolldown from './Scrolldown.jsx';

const Home = () => {
  return (
    <section className="home section" id="home">

        <div className="home__container container grid">

            <div className="home__content grid">

               <Social/>

                <div className="home__img"></div>

                    <Data/>
               
            </div>
            <Scrolldown/>
        </div>
    </section>
  )
}

export default Home