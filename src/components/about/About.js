import React from 'react'
import "./about.css";

import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div className='container mt-5' id="about">
       <h2 className='main-title'>About</h2>
       <div className='about'>
        <div className='box'>
           <FiAward className='icon' />
           <p> I am front-end developer and Mechatronics Enginner</p>
        </div>

        <div className='box'>
        <FiUsers className='icon'/>
        <p>I am acmer and i have probelm solving skills ,I have solved more than 900 problems in codeforces and another sites</p>
        </div>
       
        <div className='box'>
          <VscFolderLibrary className='icon'/>
          <p>I have made a lot of projects  with html ,css ,javascript ,bootstrap , react js and redux  </p>
         </div>

       

       </div>
    </div>
  )
}

export default About