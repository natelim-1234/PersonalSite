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

function DataManagementPortfolio(props) {
    const summaryDetails= [
        "I was tasked with updating a data management interface to improve user experience, functionality, and performance because " +
        "the existing interface was cluttered and lacked intuitive navigation."
        , "My goal was to transform the current the data management interface into a powerful tool, allowing users to work more efficiently and make data-driven decisions with ease."
    ]
    const headerName = "Revamping a data management service"

    const workBackText = 
                    "By starting with the final deadline and working backwards, we identified all the key tasks and milestones that needed to be completed. " +
                    "This method helped us prioritize tasks, allocate resources efficiently, and identify potential bottlenecks early. "

    const wireframeText = 
                    "Wireframes were created to identify potential design issues early, streamline the user experience, and ensure alignment with project goals. " +
                    "Additionally, the wireframe made it easier to communicate design ideas with the team and stakeholders."

    const figmaComponentLibraryText = 
                    "We created a Figma component library to ensure that we maintain a consistent style between all pages for this project and for future projects our client may have. " +
                    "The Figma component library acted as a central source of truth, enabling collaboration and faster iterations while maintaining design consistency."
    
    const highFidelityMockupText = 
                    "Our high fidelity mockup was used as a guideline for the code generation of the portal. " +
                    "We ensured our mockup followed the company design system to provide a seamless transition for developers when translating the prototype into the actual product."
    
    const reactTemplateCodeText = 
                    "After the completion of our high fidelity mockup, our developers generated react code that closely followed our designs. " +
                    "The code was then handed off to our client to be connected to their databases and backend features."
    
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
                                <li>Ideation meetings</li>
                                <li>Stakeholder interviews</li>
                                <li>Feature prioritization</li>
                                <li>Figma component library creation</li>
                                <li>Figma mockup creation</li>
                                <li>Code generation</li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Deliverables</h2>
                            <ul>
                                <li>Workback plan</li>
                                <li>Wireframes</li>
                                <li>Figma component library</li>
                                <li>High fidelity mockup</li>
                                <li>React template code</li>
                            </ul>

                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Outcomes</h2>
                            <p>Working closely with our stakeholders and developers, we transformed their specifications into a fully interactive mockup of the data serve portal that followed the their new design system.</p>
                            <p>The final deliverable was refined through many user tests and stakeholder interviews to ensure customer satisfaction.</p>
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
                                The existing data management interface does not follow the company's design system and lacks the ability to support the diverse and evolving data retrieval needs of data modelers and engineers,
                                 resulting in delayed analysis, increased maintenance costs, and poor scalability when adding newly updated features.
                            </p>
                        </div>
                    </div>

                    <div className='grid-container-2'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Our task</h2>
                            <p>
                                Redesign the portal in a way that aligns with the stakeholder's design system and to create interfaces for newly developed features that will be implemented into their new system. 
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Defining goals</h2>
                            <ol>
                                <li>Align portal screens to current design system</li>
                                <li>Reduce amount of clicks for each screen</li>
                                <li>Ensure designs are intuitive and straightforward</li>
                                <li>Streamline all processes by reducing number of steps</li>
                            </ol>
                        </div>
                    </div>
                    <div className='grid-container-2'>
                    <div className='grid-item'>
                            <h2 className='grid-header'>Seeing the bigger picture</h2>
                            <p>To better understand the current struggles of the portal, we conducted interviews with data modelers and engineers to identify the current painpoints.
                                We found that much of the struggle comes from having confusing and error prone forms that have too much manual input.
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Research</h2>
                            <p>
                                We performed competitive analysis on various other data serve tools in areas such as pipeline creation and API testing to create the most optimal user experience for our data modeler and engineer personas. 
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
                            <h2 className='grid-header'>A step by step approach</h2>
                            <p> 
                                To address the main challenge of creating a clear and intuitive experience, we redesigned the process into simple, easy-to-follow steps that enable both seasoned and new users to effortlessly navigate the portal.
                            </p>

                            <p>           
                                We eliminated many of the manual form-filling tasks from the original design, replacing them with auto-fill Generative AI processes and hierarchical dropdown menus. These improvements reduced human errors by 50%.
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>A cooperative effort</h2>
                            <p>
                                Throughout the design process, we held daily sprint meetings to ensure that our mockups and features were fully aligned with the requirements and needs of both our stakeholders and users.
                            </p>
                            <p>
                                As designers, it was essential for us to communicate design feasibility clearly with our stakeholders, explaining how certain features might need adjustments to ensure a more intuitive user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Deliverables</h2>
                    <h2 className='section-sub-header'>(Details of deliverables cannot be provided due to a signed NDA.)</h2>
                    <div className='grid-container-2 card-row-space'>
                        <div className='grid-item grid-stretch'>
                            <RowCard title={"Workback Plan"} imageUrl={WorkbackPlan} description={workBackText}></RowCard>
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
                            <RowCard title={"React template code"} imageUrl={CodeGeneration} description={reactTemplateCodeText}></RowCard>
                        </div>
                        <div className='grid-item'>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>


    );
}

export default DataManagementPortfolio;
