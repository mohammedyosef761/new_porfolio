import React from 'react'
import "./home.css";
import CV from '../../assets/cv.pdf';
const Home = () => {
  return (
    <div id="home">
        <div className='container'>
          <h2 className='main-title'>Home</h2>
            <div className='home'>
                <div className='home-details'>
                    <h2>I am <span>Mohammed yosef</span></h2>
                    <h2>I am <span>front end developer</span> , i have <span> 2 years experince</span> ,i have made a lot of eccomarace and another projects with react js</h2>
                    <div className='cta'>
                            <a href={CV} download className='btn-danger'>Download CV</a>
                            <a href="#contact" className='btn-primary '>Let's Talk</a>
                    </div>
                </div>
                <img src="imgs/img22.png"/>
            </div>
 
      </div>
    </div>
  )
}

export default Home