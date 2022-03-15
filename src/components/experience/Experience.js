import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id="experience" className='container mt-5'>
      {/* <h5>What skills I have</h5> */}
      <h2 className='main-title'>My Experience</h2>

      <div className='experience_section'>
      <div className='box'>
        <h3>FrontEnd Development</h3>
        <div className='box-title'>
          <article className='box-details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>HTML</h4>
            <small className=''>Experienced</small>
            </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>CSS</h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>JavaScript</h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>Bootstrap</h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>React js</h4>
           <small className=''>Experienced</small>
           </div>
          </article>
        </div>

      </div>
{/* end of fron end */}
      <div className='box'>
      <h3>Software and Mechatronics Engineer</h3>
        <div className='box-title'>
          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>Algorithm  </h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>Data Structure </h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>C++</h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>Arduino  with C++</h4>
           <small className=''>Experienced</small>
           </div>
          </article>

          <article className='box-details'>
           <BsPatchCheckFill className=''/>
           <div>
           <h4>NodeMcu  with C++</h4>
           <small className=''>Experienced</small>
           </div>
          </article>
        </div>

      </div>
      </div>
    </section>
  )
}

export default Experience