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
import EventRecommenderCase1 from '../img/session-recommender-images/Event-Recommender-Case-1.PNG'
import EventRecommenderCase2 from '../img/session-recommender-images/Event-Recommender-Case-2.PNG'
import WhovaFlowHorizontal from '../img/session-recommender-images/whova-flow-horizontal.png'
import WhovaFlowHorizontalpdf from '../img/whova-flow-horizontal.pdf'
import HorizontalScrollImage from './HorizontalScrollImage';
import AIEventRecommenderHorizontal from '../img/session-recommender-images/ai-event-recommender-flow-horizontal.png'
import RecommenderLanding from '../img/session-recommender-images/session-recommender-landing.svg'
import QuestionAndAnswer from '../img/session-recommender-images/question-and-answer.svg'
import Calendar from '../img/session-recommender-images/Calendar.svg'
import ReplaceSession from '../img/session-recommender-images/replace-session.svg'
import EmailSchedule from '../img/session-recommender-images/email-schedule.svg'

function EventRecommender(props) {
    const summaryDetails= [
        "With the upcoming Fabcon Vegas 2025 technical conference on the horizon, our company made the ambitious decision to build an application in a week that would intelligently recommend sessions, speakers, and networking opportunities tailored to each attendee’s interests and schedule.",
        "I was the lead designer in this fast-paced project that aimed to solve the problem of conference attendees feeling overwhelmed by the sheer number of sessions and struggling to identify the most relevant events based on their interests and goals."
    ]
    const headerName = "Designing a convention schedule recommender"

    const feature1 = 
                    "The Q&A input format reflects natural behavior. " +
                    "Instead of overwhelming users with filters or forms, they simply engage in conversation with the input just like they would in a forum or with a colleague. "+
                    "This intuitive approach allows users to easily jump into using the application without a steep learning curve."
                    

    const feature2 = 
                    "Following the principle of \"Recognition Over Recall\", the decision was made to use a calendar view similar to \"Apple Calendar\" or \"Teams Calendar\" to represent the schedules UI. " +
                    "By presenting the schedule in a format users are accustomed to, we make it easier for them to quickly understand session timings, navigate between days, and replace sessions."

    const feature3 = 
                    "Users have the ability to replace sessions that are selected by the AI. " +
                    "The sessions list is ordered by relevance to the user's preferences, with the most relevant at the top and the least relevant at the bottom, to avoid an increased scroll. " +
                    "Users can also read more about each session."
    
    const feature4 = 
                    "After users are satisfied with their schedules, they have the ability to send the schedule as a pdf to their emails for offline access."
    
    return(
        <div>
            <CaseStudyHeader HeaderName={headerName} SummaryArray={summaryDetails}></CaseStudyHeader>
            
            <div className='section-container-body gray-background center-align'>
                <img class="header-image" src= {RecommenderLanding}></img>
            </div>

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
                    <h2 className='section-header'>Fabcon Vegas 2025</h2>

                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <p>
                                Fabcon has rapidly become the premier event for the Microsoft Fabric community, attracting thousands of data professionals and business users worldwide. With Fabcon 2025 set to deliver an expansive lineup of workshops, sessions, and panels; attendees began to face growing challenges in navigating the content and building personalized schedules.
                            </p>
                            <p>
                                Our application is a passion project inspired by the excitement around Fabcon and designed to help attendees get the most out of their time at the conference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Understanding the problem</h2>

                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Problem statement</h2>
                            {/* <p>
                                Our goal for the project was to simplify the experience of navigating Fabcon 2025. 
                                With hundreds of sessions, workshops, and panels scheduled across multiple days and tracks, many users, especially first-time attendees, struggled to identify sessions relevant to their interests and professional goals.
                            </p> */}
                            <p>
                                While existing applications like Whova offer robust tools for event scheduling and networking, their generalized design introduces many distractions, making it difficult for users to quickly tailor their experience to specific events. 
                                Additionally, Whova lacks AI-driven recommendation tools that could assist users in effortlessly creating an optimized, personalized schedule. 
                                We saw an opportunity to utilize our AI expertise to deliver a more focused and streamlined experience specifically for Fabcon Vegas 2025.
                            </p>


                            <h2 className='grid-header'>Our high level goals</h2>
                            <ol>
                                <li>
                                    Streamline session discovery through AI driven categorization and filtering.
                                </li>
                                <li>
                                    Maximize convenience by removing login requirements and third-party app dependencies.
                                </li>
                                <li>
                                    Support quick decision making with a clean, mobile-first interface.
                                </li>
                                <li>
                                    Design specifically for Fabcon 2025 to deliver context-aware features and recommendations.
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>My role</h2>
                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <p>
                                I led the design of the mobile experience of the event recommender and collaborated with two other designers in creating the desktop verion.
                                We utilized FigJam to plan out the user flow and Figma to create our high fidelity mockup.
                            </p>
                            <p>
                                Additionally, I worked alongside developers and project managers to ensure that my designs were feasible and encompassed our company goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Research and discovery</h2>
                    <div className='grid-container-1'>
                        <div className='grid-item'>
                        <h2 className='grid-header'>What are attendees saying?</h2>
                            <p> 
                                To better understand the needs of Fabcon 2025 attendees, we began by reviewing feedback from past and current Microsoft Fabric events, including social media comments, community forums, and conversations on LinkedIn. 
                            </p>
                            <p>
                                A recurring theme quickly emerged: while attendees were excited about the conference content, some required guidance trying to navigate the sheer volume of sessions and workshops.
                            </p>
                        </div>
                    </div>
                    {/* <div className='grid-container-1 centered'>
                        <div className='centered grid-item'>
                            <img class="full-image" src= {EventRecommenderCase1}></img>
                        </div>
                    </div> */}
                    <div className='grid-container-2'>
                        <div className='grid-item'>
                                <img class="full-image" src= {EventRecommenderCase1}></img>
                        </div>
                        <div className='grid-item'>
                            <img class="full-image" src= {EventRecommenderCase2}></img>
                        </div>
                    </div>
                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Are there other tools in the market?</h2>
                            <p>
                                While similar platforms like Whova had many sophisticated scheduling features for a multitude of events, they required a somewhat lengthy process for new users to download an app, create an account, and sift through generalized interfaces designed to support many events at once.
                            </p>
                            <p>
                                This process could prove inneficient for users who simply want a quick answer before and especially during the Fabcon Vegas 2025 event.
                            </p>
                        </div>
                    </div>

                    {/* <div className='grid-container-2'>
                        <div className='grid-item'>
                            <h2 className='grid-header'>What are attendees saying?</h2>
                            <p> 
                                To better understand the needs of Fabcon 2025 attendees, we began by reviewing feedback from past Microsoft Fabric events, including social media comments, community forums, and conversations on LinkedIn. 
                            </p>
                            <p>
                                A recurring theme quickly emerged: while attendees were excited about the conference content, some felt overwhelmed trying to navigate the sheer volume of sessions and workshops.
                            </p>
                        </div>
                        <div className='grid-item'>
                            <h2 className='grid-header'>Competiter analysis</h2>
                            <p>
                                While similar platforms like Whova had many sophisticated scheduling features for a multitude of events, they required a somewhat lengthy process for new users to download an app, create an account, and sift through generalized interfaces designed to support many events at once.
                            </p>
                            <p>
                                For a user looking to quickly find the most relevant content about Fabcon 2025, this approach often led to frustration or drop-off.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Design opportunities</h2>
                    <div className='grid-container-1'>
                        <div className='grid-item'>
                            <p>
                                From our research insights, we synthesized a set of core user requirements and opportunity areas that guided the design of our solution:
                            </p>
                            <ol>
                                <li>
                                    <b>Minimize cognitive load</b> - A cleaner interface with prioritized content will help to reduce confusion and allow users to make quick and informed decisions in the moment.
                                </li>
                                <li>
                                    <b>Instant access</b> - Users wanted to explore sessions without having to create an account, download an app, or go through a login flow.
                                </li>
                                <li>
                                    <b>Conversational Q&A interface</b> - Inspired by attendee questions seen on Reddit and LinkedIn, we aimed to design a friendly, question-driven input flow where users could describe their interests conversationally to generate a curated schedule.
                                </li>
                                <li>
                                    <b>Offline capabilities</b> - Allow users to send schedule to their email as a downloadable PDF.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Design strategy & approach</h2>
                    <div className='grid-container-1'>
                        <h2 className='grid-header'>Analyzing the competitor flow</h2>
                        <p> 
                            We began by mapping out Whova's complete user flow, from onboarding and event discovery to session selection. 
                            This process revealed that while Whova offers a broad set of features, its generalized design often introduces cognitive friction for users whose primary goal is simply to build an effective event schedule.
                            At most, there were six user decisions and a lengthy repetitive process of selecting and viewing sessions individually in order for users to complete their schedule creation.
                        </p>
                        {/* <iframe width="800" height="450" src="https://embed.figma.com/board/z9qNF0lGLFUcN6E11EobyC/Whova-Flow?node-id=0-1&embed-host=share" allowfullscreen></iframe> */}

                        <HorizontalScrollImage image={WhovaFlowHorizontal}></HorizontalScrollImage>
                        <h2 className='grid-header'>Simplifying the user flow</h2>
                        <p> 
                            By starting with a competitor's complex flow and stripping it down to its essentials, we laid the foundation for a scheduling experience that is both intuitive and tailored to users. 
                            We removed most of the cognitive friction by using our trained AI to create a schedule that pertains to our user's interest. 
                            When a user is not satisfied with their schedule, they can use our AI recommendation feature to produce a list of sessions that are ordered by relevance to their interests to easily find what they are looking for.
                            These functions greatly reduces the amount of reading and cognitive load the user must perform in order to assemble their schedule.
                        </p>
                        <HorizontalScrollImage image={AIEventRecommenderHorizontal}></HorizontalScrollImage>
                    </div>
                </div>
            </div>

            <div className="section-container-body gray-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Core Features & Design Solutions</h2>
                    <div className='grid-container-1'>
                        <h2 className='grid-header'>Simplifying processes by leveraging AI</h2>
                        <div className='grid-container-2 card-row-space'>
                            <div className='grid-item grid-stretch'>
                                <RowCard title={"Intuitive Q&A Format"} imageUrl={QuestionAndAnswer} description={feature1}></RowCard>
                            </div>
                            <div className='grid-item'>
                                <RowCard title={"Calendar View"} imageUrl={Calendar} description={feature2}></RowCard>
                            </div>
                        </div>
                        <div className='grid-container-2 card-row-space'>
                            <div className='grid-item'>
                                <RowCard title={"Recommended List"} imageUrl={ReplaceSession} description={feature3}></RowCard>
                            </div>
                            <div className='grid-item grid-stretch'>
                                <RowCard title={"Send Schedule to Email"} imageUrl={EmailSchedule} description={feature4}></RowCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container-body white-background left-align">
                <div className='section portfolio-padding'>
                    <h2 className='section-header'>Design Reflections</h2>
                    <div className='grid-container-1'>
                        <h2 className='grid-header'>The project release</h2>
                        <p> 
                            Our passion project, the schedule recommender application, released successfully on our company LinkedIn page.
                            Due to the time restraints of the project, there was not enough time to implement everything that we aimed to acheive.
                            If we had more time, we would have liked to implement a more conversational chat experience so that users could probe the AI for further insights.
                        </p>

                    </div>
                </div>
            </div>
            
        
        </div>


    );
}

export default EventRecommender;
