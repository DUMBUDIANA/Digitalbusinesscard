import './App.css';
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} className='icons'>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={26}  className='self'/>
      </a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={26} />
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={26} />
      </a>
      <a href="https://github.com/DUMBUDIANA" target="_blank" rel="noopener noreferrer">
        <FaGithub size={26} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
