import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import EventRecommender from './EventRecommender.js';
import DataManagementImg from '../img/Data_Management.svg';
import MAQWebsiteImg from "../img/MAQ_Website.png";
import MAQIgniteBooth from "../img/MAQ_Ignite_Booth.png";
import RecommenderLanding from '../img/session-recommender-images/session-recommender-landing.svg'

/*
Link Attribution:
<a href="https://storyset.com/business">Business illustrations by Storyset</a>
*/

const Portfolio = () => {
    const sections = [
      {
        title: 'Designing a convention schedule recommender',
        imageUrl: RecommenderLanding,
        blurb: 'Worked closely with data modelers and data scientists to lead the redesign of their data management interface. Simplified design to reduce clicks by 30%.',
        linkText: 'Read more',
        linkUrl: '/event-recommender'
      },
      {
        title: 'Website development; from mockup to launch',
        imageUrl: MAQWebsiteImg,
        blurb: 'Planned and executed the full development lifecycle of the MAQ Software company website.',
        linkText: 'Read more',
        linkUrl: '/MAQ-website-portfolio'
      },
      {
        title: 'Designing impactful company collaterals',
        imageUrl: MAQIgniteBooth,
        blurb: 'Utilized creativity and an understanding of the company mission and goals to produce high quality designs for booth art, video presentations, and brochures for the Microsoft Ignite conference.',
        linkText: 'Read more',
        linkUrl: '/MAQ-collaterals-portfolio'
      },
      {
        title: 'Revamping a data management service',
        imageUrl: DataManagementImg,
        blurb: 'Worked closely with data modelers and data scientists to lead the redesign of their data management interface. Simplified design to reduce clicks by 30%.',
        linkText: 'Read more',
        linkUrl: '/data-serve-portfolio'
      }
    ];
  
    return (

        <div className="section-container gray-background">
            <div className="section-header">
                Portfolio List
            </div>
            {sections.map((card, index) => (
            <div key={index} className="portfolio-card">
                <div className="image-container">
                  <img src={card.imageUrl} alt={card.title}/>
                </div>
                <div className="text-container">
                  <h3 className='card-title'>{card.title}</h3>
                  <p className='portfolio-card-text'>{card.blurb}</p>
                  <Link to={card.linkUrl} className="link">Learn more</Link>
                </div>
            </div>
            ))}
        </div>
    );
  };
  

export default Portfolio;