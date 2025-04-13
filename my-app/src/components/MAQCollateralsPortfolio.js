import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import {useParams} from 'react-router-dom';
import CaseStudyHeader from './CaseStudyHeader';
import RowCard from './RowCard';
import DataManagementIMG from '../img/Data_Management.svg';
import WorkbackPlan from '../img/Workback_Plan.svg';
import Wireframe from '../img/Wireframe.svg';
import ComponentLibrary from '../img/Component_Library.svg';
import HighFidelityMockup from '../img/High_Fidelity_Mockup.svg';
import CodeGeneration from '../img/Code_Generation.svg';
import Website from '../img/Website.svg';
import companyBrochure1 from '../img/MSIgnite24_Brochure-1.png'
import companyBrochure2 from '../img/MSIgnite24_Brochure-2.png'

function MAQCollateralsPortfolio(props) {
    const summaryDetails= [
        "Microsoft Ignite 2024 is an annual conference where various companies gather to see the latest innovations in Microsoft technology and to present their own services."
        , "I was tasked with designing collaterals for our company booth such as handouts, informational webpages, video demoes, and booth backdrops that would attract new customers. " +
        "Each item was thoughtfully designed to showcase our company in the most engaging and efficient way possible, ensuring the information is presented with both clarity and impact."
    ]

    const companyBrochure = '../img/MSIgnite24_Brochure.pdf'
    
    const headerName = "Designing impactful company collaterals"

    const sprintPlan = 
                    "The sprint plan was compiled into an Impact Report which explained to the CEO the benefits of the website update and the estimated time required to complete the project. "

    const wireframeText = 
                    "After performing my research, I drew out wireframes to present to stakeholders how the information architecture of the webpage will be represented. " +
                    "The wireframe made it easier to communicate design ideas and brainstorming before building out the high fidelity mockup."

    const figmaComponentLibraryText = 
                    "I created a Figma component library to ensure that we maintain a consistent style between all pages for this project and for future projects our client may have. " +
                    "The Figma component library acted as a central source of truth, enabling collaboration and faster iterations while maintaining design consistency."
    
    const highFidelityMockupText = 
                    "I first built out the mobile view to ensure that all of our features could fit in a smaller screen size. " +
                    "Once the mobile view was complete, I began to plan out the desktop view. " +
                    "After completing the mockup, I demoed my design and user flow to upper management and the CEO to finalize the design process."
    
    const reactTemplateCodeText = 
                    "After the high fidelity mockup was approved by upper management and the CEO, I began development of the website. " +
                    "The code and content for the website were meticulously checked for bugs and spelling errors before finally getting sign off."
    
    return(
        <div>
            <CaseStudyHeader HeaderName={headerName} SummaryArray={summaryDetails}></CaseStudyHeader>

            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Summary</h2>
                    <h2 className='section-sub-header'>Method of delivery and the results</h2>
                    <div className='grid-container-3'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Services</h2>
                            <ul>
                                <li>Requirements gathering</li>
                                <li>Competitive analysis</li>
                                <li>Figma mockup creation</li>
                                <li>Visual design</li>
                                <li>Video editing</li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Deliverables</h2>
                            <ul>
                                <li>Company brochure</li>
                                <li>Event information webpage</li>
                                <li>Video demoes</li>
                                <li>Booth backdrop</li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Outcomes</h2>
                            <p>The company collaterals created for the Microsoft Ignite 2024 were designed to captivate and engage through striking visuals and interesting topics for sparking meaningful conversations with customers.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Company brochure</h2>
                    <object data="MSIgnite24_Brochure.pdf" height="1000"></object>
                </div>
            </div>
            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>The solution</h2>
                    <div className='grid-container-2'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Unifying our design</h2>
                            <p> 
                                The past website lacked design cohesion which made it difficult for users to intuitively read or navigate from page to page.
                                In order to solve this problem, we redesigned the whole website using the Microsoft Fluent UI design system as a reference point while making our own tweaks along the way to make our own style.
                            </p>

                            <p>           
                                By unifying our style, users were able to easily navigate the website which lead to an overall 40% increase in activity on our services and product pages.
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Order matters</h2>
                            <p>
                                We used a third party app to identify which parts of the old website users clicked on the most and how long it took for them to view this information. We found that users were most interested in viewing our services and products, but were having to scroll further down the website to find this information which lead to users leaving the page out of frustration.
                            </p>
                            <p>
                                To improve the user experience, we moved all information for the company services and products to the top of the home page. Each service and product was ordered based on popularity so users could easily find what they are looking for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Deliverables</h2>
                    <h2 className='section-sub-header'>(Some details are omitted due to a signed NDA.)</h2>
                    <div className='grid-container-2 card-row-space'>
                        <div className='grid-item grid-stretch'>
                            <RowCard title={"Sprint plan"} imageUrl={WorkbackPlan} description={sprintPlan}></RowCard>
                        </div>
                        <div className='grid-item'>
                            <RowCard title={"Wireframes"} imageUrl={Wireframe} description={wireframeText}></RowCard>
                        </div>
                    </div>
                    <div className='grid-container-2 card-row-space'>
                        <div className='grid-item'>
                            <RowCard title={"Figma component library"} imageUrl={ComponentLibrary} description={figmaComponentLibraryText}></RowCard>
                        </div>
                        <div className='grid-item grid-stretch'>
                            <RowCard title={"High fidelity mockup"} imageUrl={HighFidelityMockup} description={highFidelityMockupText}></RowCard>
                        </div>
                    </div>
                    <div className='grid-container-2 card-row-space'>
                        <div className='grid-item'>
                            <RowCard title={"Completed website"} imageUrl={Website} description={reactTemplateCodeText}></RowCard>
                        </div>
                        <div className='grid-item'>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default MAQCollateralsPortfolio;
