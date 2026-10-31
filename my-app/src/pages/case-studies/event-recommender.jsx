import React from 'react';
import CaseStudyMeta from '../../components/case-study-meta/CaseStudyMeta.jsx';
import ZoomableImage from '../../components/zoomable-image/ZoomableImage.jsx';
import RecommenderLandingImg from '../../../public/img/Event_recommender_hero_image.svg'
import EventRecommenderCase1 from '../../../public/img/session-recommender-images/Event-Recommender-Case-1.PNG'
import EventRecommenderCase2 from '../../../public/img/session-recommender-images/Event-Recommender-Case-2.PNG'
import WhovaFlowHorizontal from '../../../public/img/session-recommender-images/whova-flow.svg'
import AIEventRecommenderHorizontal from '../../../public/img/session-recommender-images/ai-event-recommender-flow.svg'
import QuestionAndAnswer from '../../../public/img/session-recommender-images/question-and-answer.svg'
import QuestionAndAnswerFilter from '../../../public/img/session-recommender-images/question-and-answer-filter.svg'
import Calendar from '../../../public/img/session-recommender-images/Calendar.svg'
import ReplaceSession from '../../../public/img/session-recommender-images/replace-session.svg'
import EmailSchedule from '../../../public/img/session-recommender-images/email-schedule.svg'
import { bottomNavigationActionClasses } from '@mui/material/BottomNavigationAction';

function EventRecommender () {
    return (
        <div>
            <section className='section-case-study-hero'>
                <div className='page-padding-case-study-hero'>
                    <h1 className='hero'>Designing a convention schedule recommender</h1>
                    <p className='intro-text'>We built an AI-powered scheduling app in one week to help Fabcon Vegas 2025 attendees discover relevant sessions and build a personalized schedule without the friction of generic event platforms.</p>

                    <CaseStudyMeta
                        items={[
                            { label: 'Client', value: 'Redmond Software Company' },
                            { label: 'Role', value: 'Lead Designer' },
                            { label: 'Timeline', value: '2 Week' },
                            { label: 'Platform', value: 'Mobile (iOS)' }
                        ]}
                    />
                </div>
            </section>

            <img className= "case-study-hero-img" src={RecommenderLandingImg}></img>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>Overview</p>
                    <h1 className='section-header'>The 30-second version</h1>

                    <h2>Background</h2>
                    <p className='body-text'>Fabcon Vegas 2025 brought thousands of data professionals together for an expansive lineup of workshops, sessions, and panels. Attendees needed a faster, smarter way to build personalized schedules without downloading another generic event app.</p>

                    <h2>Problem</h2>
                    <p className='body-text'>Existing tools like Whova offered broad scheduling features, but their generalized design required users to download an app, create an account, and wade through interfaces built for dozens of events at once. For someone who just wants a relevant schedule for one conference, that process created unnecessary friction.</p>

                    <h2>Goals</h2>
                    <ul>
                        <li className='body-text'><strong>Streamline session discovery</strong> through AI-driven categorization and filtering.</li>
                        <li className='body-text'><strong>Maximize convenience</strong> by removing login requirements and third-party app dependencies.</li>
                        <li className='body-text'><strong>Support quick decision making</strong> with a clean, mobile-first interface.</li>
                        <li className='body-text'><strong>Design specifically for Fabcon 2025</strong> to deliver context-aware features and recommendations.</li>
                    </ul>

                    <h2>My Role</h2>
                    <p className='body-text'>I led the mobile experience design for the event recommender and collaborated with two other designers on the desktop version, using FigJam to plan user flows and Figma to build high-fidelity mockups. I also worked closely with developers and project managers to ensure designs were both technically feasible and aligned with our company goals, participating in daily sprint reviews throughout the one-week sprint.</p>
                </div>
            </section>

            <section className='section-inverse'>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>01 - Research</p>
                    <h1 className='section-header'>Attendees wanted a schedule. Existing apps wanted a tutorial.</h1>

                    <h2>What are attendees saying?</h2>
                    <p className='body-text'>To understand attendee needs, we reviewed feedback from past Microsoft Fabric events across social media comments, community forums, and LinkedIn conversations. A recurring theme emerged: attendees were excited about the content but needed help navigating the volume of sessions.</p>
                </div>

                <div className='two-col-image-container'>
                    <ZoomableImage className="case-study-hero-img" src={EventRecommenderCase1} />
                    <ZoomableImage className="case-study-hero-img" src={EventRecommenderCase2} />
                </div>

                <div className='page-padding-case-study-text'>
                    <h2>Competitor Analysis</h2>
                    <p className='body-text'>While Whova offers sophisticated scheduling features, it required a multi-step onboarding flow -- download, account creation, event search -- before a user could begin building their schedule. We counted at least six user decisions before schedule creation even began. For a user focused on one event, this was significant friction.</p>
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>02 - Insights</p>
                    <h1 className='section-header'>Four things changed everything</h1>

                    <h2>Key Opportunity Areas</h2>
                    <ul>
                        <li className='body-text'><strong>Minimize cognitive load.</strong> A cleaner interface with AI-prioritized content helps users make quick, informed decisions in the moment.</li>
                        <li className='body-text'><strong>Instant access.</strong> Users wanted to explore sessions without creating an account, downloading an app, or going through a login flow.</li>
                        <li className='body-text'><strong>Conversational Q&A interface.</strong> Inspired by attendee questions seen on Reddit and LinkedIn, we designed a friendly, question-driven flow where users describe interests conversationally to generate a curated schedule.</li>
                        <li className='body-text'><strong>Offline capabilities.</strong> Allow users to send their schedule to email as a downloadable PDF for access during the event.</li>
                    </ul>
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>03 - Design Strategy</p>
                    <h1 className='section-header'>From many steps to one flow</h1>

                    <h2>Mapping the competitor flow</h2>
                    <p className='body-text'>We began by mapping Whova's complete user flow, from onboarding to session selection, to identify exactly where to simplify. Six user decisions, repetitive selection steps, and no AI assistance to surface relevant content -- we documented every step to find where we could cut.</p>
                </div>
                <div className='one-col-image-container'>
                    <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={WhovaFlowHorizontal} />
                </div>
                
                <div className='page-padding-case-study-text'>
                    <h2>Simplifying with AI</h2>
                    <p className='body-text'>By having our AI generate an initial schedule from conversational input, we removed most cognitive work upfront. When users want to swap a session, our relevance-ranked recommendation list makes it easy to find a better fit without scanning everything.</p>
                </div>

                <div className='one-col-image-container'>
                    <ZoomableImage className="case-study-hero-img" src={AIEventRecommenderHorizontal} />
                </div>

            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>04 - Solution</p>
                    <h1 className='section-header'>The redesigned scheduling experience</h1>
                    <p className='body-text'>Four core features define the final design, each addressing a specific research finding.</p>
                    <h2>Intuitive Q&A Format</h2>
                    <p className='body-text'>Instead of forms and filters, users describe their interests conversationally, the same way they'd ask a colleague for recommendations. No steep learning curve. However, for power users and individuals that wish to have more control over the output schedule, I also added an optional filter feature.</p>
                    <div className='two-col-image-container' style={{'padding' : '0px'}}>
                        <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={QuestionAndAnswer} />      
                        <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={QuestionAndAnswerFilter} />      
                    </div>
                </div>


                <div className='page-padding-case-study-text'>
                    <div className='two-col-image-text-container'>

                        <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={Calendar} />
                         <div className='centered-text-container'>
                            <h2>Familiar Calendar View</h2>
                            <p className='body-text'>Following "Recognition Over Recall," the schedule uses a familiar calendar format, like Apple Calendar or Teams, so users immediately understand session timing and can navigate between days.</p>
                        </div>
                    </div>
                    <div className='two-col-image-text-container'>

                        <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={ReplaceSession} />
                         <div className='centered-text-container'>
                            <h2>Relevance-Ranked Session List</h2>
                            <p className='body-text'>When users want to swap a session, an AI-ranked list surfaces the most relevant alternatives at the top, minimizing scroll and reading load when making changes.</p>
                        </div>
                    </div>
                    <div className='two-col-image-text-container' style={{'margin-bottom':'0px'}}>

                        <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={EmailSchedule} />
                         <div className='centered-text-container'>
                            <h2>Send Schedule to Email</h2>
                            <p className='body-text'>Once satisfied, users export their schedule as a PDF to their email for offline access, no app required during the event itself.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>05 - Reflection</p>
                    <h1 className='section-header'>Launched, and what's next</h1>

                    <h2>Impact</h2>
                    <p className='body-text'>The schedule recommender launched successfully on our company LinkedIn page and received positive engagement from the Fabric community. The one-week sprint was a lesson in constraint-driven clarity -- every feature had to justify itself against time.</p>
                    <p className='body-text'>The launch's visibility caught the attention of Microsoft event organizers, who reached out with an opportunity to bring the application to their own main event pages for Microsoft Build and Ignite -- validating the concept well beyond our original single-event scope.</p>

                    <h2>Looking Ahead</h2>
                    <p className='body-text'>If we had more time, I would have prioritized a more conversational follow-up experience, allowing users to probe the AI for session explanations, ask follow-up questions, and refine their schedule through dialogue rather than just a single Q&A input.</p>
                </div>
            </section>
        </div>
    );
}

export default EventRecommender;
