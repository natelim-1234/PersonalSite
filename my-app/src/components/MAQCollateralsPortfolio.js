import React from 'react';
import {useParams} from 'react-router-dom';
import CaseStudyHeader from './CaseStudyHeader';
import RowCard from './RowCard';
import DataManagementIMG from '../img/Data_Management.svg'
import WorkbackPlan from '../img/Workback_Plan.svg'
import Wireframe from '../img/Wireframe.svg'
import ComponentLibrary from '../img/Component_Library.svg'
import HighFidelityMockup from '../img/High_Fidelity_Mockup.svg'
import CodeGeneration from '../img/Code_Generation.svg'
import Website from '../img/Website.svg'

function MAQWebsitePortfolio(props) {
    const summaryDetails= [
        ""
        , "My goal was to make it easier for customers to better understand what services our company provides and how they can benefit from working with us." +
        " This would be accomplished by performing a competitive analysis, analyzing the current information structure, and creating a new modern look to showcase our company services and other related information."
    ]
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
                                <li>Hold stakeholder interviews</li>
                                <li>Create sprint plan</li>
                                <li>Perform competitive analysis</li>
                                <li>Figma component library creation</li>
                                <li>Figma mockup creation</li>
                                <li>Lead ideation meetings</li>
                                <li>Web development</li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Deliverables</h2>
                            <ul>
                                <li>Sprint plan</li>
                                <li>Wireframes</li>
                                <li>Figma component library</li>
                                <li>High fidelity mockup</li>
                                <li><a href='https://maqsoftware.com/'>Completed website</a></li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Outcomes</h2>
                            <p>The website redesign focused on improving readability and clarity to ensure visitors easily understand the company's services and mission.</p>
                            <p>By optimizing the layout, simplifying navigation, and enhancing content presentation, the updated site effectively communicates the company’s offerings, making it more user-friendly and accessible to potential clients.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Understanding the problem</h2>

                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Problem statement</h2>
                            <p>
                            The company's website currently struggles to effectively communicate its services and mission, leading to confusion and a lack of clarity for visitors.
                             The layout, content organization, and navigation make it difficult for users to quickly understand the value the company provides, hindering engagement and potentially impacting business opportunities.
                            </p>
                        </div>
                    </div>

                    <div className='grid-container-2'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>My task</h2>
                            <p>
                                Conduct meetings with the CEO and project leads to interpret their ideas and requests into actionable sprint items.
                                 Create iteratable mockups to finalize all design decisions before conducting the website development phase.
                                
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Defining goals</h2>
                            <ol>
                                <li>Create sprint plan</li>
                                <li>Define information architecture of home page</li>
                                <li>Design new page components for Figma library</li>
                                <li>Receive signoff for mockup from CEO and project leads</li>
                                <li>Develop new webpage</li>
                                <li>Ensure new website is bug free</li>
                                <li>Publish website before Microsoft Ignite 2024 event</li>
                            </ol>
                        </div>
                    </div>
                    <div className='grid-container-2'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Meeting the deadline</h2>
                            <p>
                                To complete this project in a timely manner before our company attends the 2024 Microsoft Ignite conference, I held daily meetings with the CEO and project leads to better understand the vision and message of the new website.
                                I then interpreted these requests into actionable sprint items and created a plan to complete website development before the provided deadline.
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Research</h2>
                            <p>
                                I first deconstructed the website's information architecture to better understand the pitfalls of our current design.
                                 From here, I began a competitive analysis of other consulting company websites to see how information for services could be presented in a more understandable manner.
                                 I then combined our own original ideas with designs from our competitive analysis to create a website mockup that fit our requirements.
                            </p>
                        </div>
                    </div>
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

export default MAQWebsitePortfolio;
