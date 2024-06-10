// import { SocialIcon } from 'react-social-icons/component'
// import 'react-social-icons/vimeo'
// import 'react-social-icons/meetup'
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './App.css';

function About() {
    return (
      <div className="text">
        <div className='inner-text'>
        <div className='info'>
        <h1>Laura Smith</h1>
        <p className='para1'>Frontend Developer</p>
        <p className='para2'>laurasmith.website</p>
       </div>
       <div className='social'>
       <p className='one'><a href="mailto:deedumbu@gmail.com" target="_blank" rel="noopener noreferrer">
      
        <FaEnvelope size={30} /> <a className='emailtext'>Email</a>
      </a>
      </p>
      <p className='two'>
      <a href="#" target="_blank" rel="noopener noreferrer" className=''>
        <FaLinkedin size={30} />
       <a className='linkedintext'>LinkedIn</a> </a>
       </p>
       </div>
       <div className='about'>
        <h2>
        About
        </h2>
        <p>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
        I try to keep up with security and best practices, and am always looking for new things to learn. 
        </p>
       </div>
       <div className='interest'>
        <h2>Interest</h2>
        <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
         Pop culture ninja. Coffee fanatic.
        </p>

       </div>

       </div>
      </div>
      
    );
  }
  
  export default About;