import React from 'react';
import {useParams} from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>Website design and content &copy; 2025 Nathan Limono</p>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Project portfolio</a></li>
            <li><a href="/terms-of-service">About me</a></li>
            <li><a href="/contact">Linkedin</a></li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;