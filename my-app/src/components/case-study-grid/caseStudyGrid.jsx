import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './caseStudyGrid.css'

import RecommenderImg  from '../../../public/img/Event_recommender_hero_image.svg';
import MAQWebsiteImg   from '../../../public/img/MAQ_Website.png';
import MAQIgniteImg    from '../../../public/img/MAQ_Ignite_Booth.png';
import DataMgmtImg     from '../../../public/img/Data_Management.svg';
import BuildDiscoverImg from '../../../public/img/Microsoft_Build_Discover.PNG';


function CaseStudyGrid() {
    const PROJECTS = [
        {
            title: 'Microsoft Build Discover Page',
            desc:  'Led the UX design of an AI assistant for Microsoft Build that helps tens of thousands of attendees discover relevant sessions and build a personalized conference schedule in minutes.',
            tags:  ['Product Design', 'AI/UX', 'Enterprise'],
            to:    '/case-studies/microsoft-build-discover',
            img: BuildDiscoverImg,
        },
        {
            title: 'Convention Schedule Recommender',
            desc:  'Led end-to-end design of a mobile app that helps attendees plan their conference schedule — cutting decision time and improving session satisfaction.',
            tags:  ['Product Strategy', 'UX Design', 'Mobile'],
            to:    '/event-recommender',
            img: RecommenderImg,
        },
        // {
        //     title: 'MAQ Website Redesign',
        //     desc:  'Planned and executed the full development lifecycle of the MAQ Software company website — from competitive analysis and wireframes to a shipped redesign.',
        //     tags:  ['Web Design', 'Development', 'Product Design'],
        //     to:    '/MAQ-website-portfolio',
        //     img:   MAQWebsiteImg,
        // },
        {
            title: 'MAQ Conference Collaterals',
            desc:  'Designed high-impact collaterals for MAQ Software at Microsoft Ignite — booth art, video presentations, and brochures that told a cohesive brand story.',
            tags:  ['Brand', 'Visual Design', 'Marketing'],
            to:    '/MAQ-collaterals-portfolio',
            img:   MAQIgniteImg,
        }
        // {
        //     title: 'Data Management Revamp',
        //     desc:  'Led the redesign of a data management interface, working closely with data modelers and engineers to reduce clicks by 30% and simplify complex workflows.',
        //     tags:  ['UX Research', 'Data Design'],
        //     to:    '/data-serve-portfolio',
        //     img:   DataMgmtImg,
        // },
    ];
    return(
        <section className='case-study-section'>
            <div className='page-padding'>
                <div className='case-study-grid'>
                    {PROJECTS.map((project, i) => (
                        <div className='card-container'>
                            <div className='card-image'>
                                <img src={project.img}></img>

                            </div>
                            <div className='card-body'>
                                <h1>{project.title}</h1>
                                <p className='body-text'>{project.desc}</p>
                                <NavLink key={project.title} to={project.to}>
                                    <button className='primary'>
                                        <p className='button-text'>Read Case Study</p>
                                    </button>
                                </NavLink>

                            </div>
                        </div>

                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default CaseStudyGrid;