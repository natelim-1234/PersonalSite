import React from 'react';
import { Link } from 'react-router-dom';
import BuildDiscoverImg from '../../../public/img/Microsoft_Build_Discover.PNG';
import CaseStudyMeta from '../../components/case-study-meta/CaseStudyMeta.jsx';
import ZoomableImage from '../../components/zoomable-image/ZoomableImage.jsx';
import BuildFilterImg from '../../../public/img/Microsoft_Build_Filter.PNG'
import PageIntroDraft1 from '../../../public/img/Build_search_draft_1.svg'
import PageIntroDraft2 from '../../../public/img/Build_search_draft_2.svg'
import PageIntroDraft3 from '../../../public/img/Build_search_draft_3.svg'
import PageChatClosed from '../../../public/img/Build_chat_closed.svg'
import PageChatOpened from '../../../public/img/Build_chat_opened.svg'
import PageChatExpanded from '../../../public/img/Build_chat_expanded.svg'
import PagePreferences from '../../../public/img/Build_preferences.svg'
import PageRecommendations from '../../../public/img/Build_recommendations.svg'
import PageEventTab from '../../../public/img/Build_event_tab.svg'

function MicrosoftBuildDiscover () {
    return (
        <div>
            <section className='section-case-study-hero'>
                <div className='page-padding-case-study-hero'>
                    <h1 className='hero'>Designing the Microsoft Build Discover page</h1>
                    <p className='intro-text'>I led the end-to-end UX design of the Microsoft Build Discover AI powered page that turns an overwhelming catalog into a personalized, conversational path to the sessions attendees actually care about.</p>

                    <CaseStudyMeta
                        items={[
                            { label: 'Client', value: 'Microsoft' },
                            { label: 'Role', value: 'UX/UI Designer' },
                            { label: 'Timeline', value: '3 Weeks' },
                            { label: 'Platform', value: 'Web (Responsive)' },
                        ]}
                    />
                </div>

            </section>

            <img className= "case-study-hero-img" src={BuildDiscoverImg}></img>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>Overview</p>
                    <h1 className='section-header'>Creating the Perfect Schedule</h1>
                
                    <h2>Background</h2>
                    <p className='body-text'>Microsoft Build is one of Microsoft's largest annual developer conferences, spanning hundreds of sessions, workshops, and labs across dozens of tracks.</p>

                    <h2>Problem</h2>
                    <p className='body-text'>With so much to offer, attendees often spent more time searching and scrolling through a dense catalog and cross-referencing tracks just to figure out what is relevant to them while also trying to balance their schedules.</p>
                    
                    <h2>Goals</h2>
                    <p className='body-text'>Reduce the amount of time it takes for users to create their schedule while also helping them to find events that are best suited to their interests.</p>
                </div>
            </section>

            <section className='section-inverse'>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>01 - Research</p>
                    <h1 className='section-header'>A filter is not enough</h1>

                    <h2>Research Approach</h2>
                    <p className='body-text'>To better understand how attendees plan their Build schedule today and where they get stuck, I started with attendee interviews.</p>

                    <h2>Research Goals</h2>
                    <ul>
                        <li className='body-text'>Explore how attendees currently discover and plan sessions across the catalog.</li>
                        <li className='body-text'>Identify the pain points and unmet needs that stand in the way of building a schedule they feel confident in.</li>
                    </ul>

                    <h2>Attendee Interviews</h2>
                    <p className='body-text'>I interviewed 5 past Build attendees who had used the session catalog to plan a schedule within the last year. In addition to their general approach, I asked about how they filtered sessions, what tools or resources they relied on, and where the process broke down. The following is a summary of their experiences:</p>

                    <p className='body-text'><strong>Catalog overwhelm.</strong> Most attendees scrolled and scanned rather than searching deliberately -- the sheer number of sessions made the built-in filters feel more like a chore than a shortcut. A few gave up on filtering altogether and just skimmed track by track.</p>

                    <p className='body-text'><strong>Planning tools and resources.</strong> Some attendees kept a running list in a notes app or spreadsheet to track sessions they didn't want to miss. Others leaned on colleagues' recommendations, and a few watched recap videos from previous years to decide which tracks were worth their time before even opening the catalog.</p>

                    <p className='body-text'><strong>Schedule-building behavior.</strong> Attendees were constantly weighing broad track coverage against their individual interests, and conflicting session times made this harder to reason about. Several said they wanted recommendations based on what they personally cared about, not just what was most popular overall.</p>

                    <p className='body-text'>Overall, attendees wanted a faster, more personalized way to get from "what's available" to "what's right for me" without having to manually cross-reference tracks and timeslots themselves.</p>
                
                    <ZoomableImage className="case-study-hero-img" src={BuildFilterImg} />
                </div>
            </section>


            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>02 - Define</p>
                    <h1 className='section-header'>Modernize the approach</h1>

                    <h2>Understanding the issue</h2>
                    <p className='body-text'>Synthesizing the interview findings made clear that attendees weren't short on sessions to choose from, they were short on direction. The catalog gave them everything, but very little sense of what mattered to them specifically.</p>

                    <h2>Problem Statements</h2>
                    <ul>
                        <li className='body-text'>How might we make the session discovery process less overwhelming and time-consuming?</li>
                        <li className='body-text'>How might we show attendees which sessions would be most relevant to their interests?</li>
                        <li className='body-text'>How might we help attendees maximize their time at the Microsoft Build Event?</li>
                    </ul>

                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>03 - Ideate</p>
                    <h1 className='section-header'>Chatting it up</h1>

                    <h2>The proposed solution</h2>
                    <p className='body-text'>The problem statements pointed toward two complementary directions for giving attendees the direction they were missing.</p>

                    <p className='body-text'>The first was an AI-powered, on-screen recommendations page: surfacing a relevant starting point directly in the catalog, based off of a short preference questionnaire filled in during sign up, so attendees weren't left to scroll track by track or lean on outside resources just to know where to look.</p>
                    
                    <p className='body-text'>The second was a conversational AI agent that could provide additional support and ask follow-up questions about an attendee's role, interests, or sessions they'd already bookmarked to refine those recommendations further whenever a static list wasn't enough to capture what they personally cared about.</p>
                    
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>04 - Prototype</p>
                    <h1 className='section-header'>Putting it in Figma</h1>
                
                    <h2>A good first impression</h2>
                    <p className='body-text'>During prototyping, I studied other developer conference apps, borrowing familiar schedule-building patterns from the Google I/O and Apple WWDC companion apps. I also drew on the AI chat assistants found across Microsoft’s sites so the design would feel welcoming to all users and consistent with tools like Copilot. The wireframes below show the resulting landing page: a Copilot-style chat box alongside a greeting with suggested sessions to attend at Microsoft Build.</p>
                </div>
                
                <div className='two-col-image-container'>
                    <ZoomableImage className="case-study-hero-img" src={PageIntroDraft1} />
                    <ZoomableImage className="case-study-hero-img" src={PageIntroDraft2} />
                </div>

                <div className='page-padding-case-study-text'>
                    <h2>Only the finest selection</h2>
                    <p className='body-text'>To provide the initial on screen recommendations, the page needed a way to collect a bit of user information so I designed a form that appears during the sign in process to gather user preferences when it comes to areas of interest and technology proficiency levels.</p>
                    <p className='body-text'>While the form is helpful for creating that initial starting point for generating accurate event recommendations for the user, I did recognize that some people may want to avoid the tedium of filling out the form so I tried to make the process as short as possible and also skippable. Furthermore, I also recommended to the developers that the information provided in this event should be saved within the user's profile so that it could be used in the recommendation algorithm for all Microsoft events (such as Ignite, Fabcon, etc.) so that users only have to fill it once.</p>
                    <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={PagePreferences} />
                    <p className='body-text'>Once users fill out the form, sectioned cards will be displayed on the page providing users with the ability to preview sessions and to add and remove them from their schedule.</p>
                    <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={PageRecommendations} />
                    <p className='body-text'>The schedule can be accessed by pressing the button in the top right labeled "My event". When designing the session cards, I made sure to match the color scheme of the "Add to schedule" buttons and the "My event" button to ensure that users couild easily draw a connection between the two actions.</p>
                    <ZoomableImage className="case-study-hero-img" style={{ marginBottom: '16px' }} src={PageEventTab} />
                </div>                
                
                <div className='page-padding-case-study-text'>
                    <h2>Let's get conversational</h2>
                    <p className='body-text'>After completing the wireframes for the curated sessions experience, I moved on to creating the chat experience. The main design goal for the chat was to make it only noticable to the user when they needed it. This meant that we needed to allow maximum flexibility by giving users the choice to open and close it as well as expanding and minimizing the window.</p>
                    <ZoomableImage className="case-study-hero-img" src={PageChatOpened} />
                    <p className='body-text'>Beyond the chat window itself, I also needed an interface within the conversation where the AI could suggest specific sessions based on what an attendee was asking for. Each suggestion had to read clearly as part of a chat message. Attendees also needed a quick way to add a session to their schedule or remove it, all without leaving the conversation.</p>
                    <ZoomableImage className="case-study-hero-img" src={PageChatExpanded} />
                </div>
            
                
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>05 - Test</p>
                    <h1 className='section-header'>Fine tuning the experience</h1>

                    <h2>Usability Testing</h2>
                    <p className='body-text'>I ran moderated usability sessions with 6 participants who matched our target attendee profile, asking them to build out a sample schedule two ways: once using only the on-screen recommendations, and once relying on the chat agent. I watched for hesitation, misclicks, and anywhere they voiced confusion out loud, then followed up with questions about trust in the recommendations and whether the interface felt like it understood what they wanted.</p>

                    <h2>What We Found</h2>
                    <ul>
                        <li className='body-text'><strong>The chat window was too easy to miss.</strong> Several participants didn't notice it was there until prompted, since it was visually quiet compared to the rest of the page.</li>
                        <li className='body-text'><strong>Session cards felt disconnected from the conversation.</strong> When the AI suggested a session mid-chat, participants weren't always sure if adding it from the chat bubble actually updated their schedule, since there was no immediate confirmation.</li>
                        <li className='body-text'><strong>The preferences form was skipped more than expected.</strong> A couple of participants skipped it specifically because they didn't trust that a few checkboxes could produce recommendations worth their time, and said they'd rather just ask the chat directly.</li>
                    </ul>

                    <h2>Iterating on the Feedback</h2>
                    <p className='body-text'>To fix the discoverability problem, I added a brief, one-time entrance animation and a subtle pulse on the chat icon for first-time visitors so it registered as an interactive element rather than background decoration. For the confirmation issue, I introduced a short inline state change on the suggestion card itself -- the button swaps to a confirmed "Added" label with a checkmark the moment it's actioned, so participants never had to leave the chat or check their schedule separately to know it worked. For the trust gap around the preferences form, I added a line of copy reinforcing that the form took under a minute and could be edited anytime, and made sure skipping it didn't feel like a dead end -- the chat would simply ask one or two of those same questions conversationally instead.</p>

                    <h2>Round Two</h2>
                    <p className='body-text'>I retested the revised flow with 4 new participants. Every participant noticed and engaged with the chat on their own this time, and all of them correctly identified when a session had been added or removed without needing to double check their schedule. Confidence in the recommendations also improved -- participants who skipped the form still felt the chat "caught up" on their preferences naturally within the first couple of exchanges.</p>
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>06 - Final Result</p>
                    <h1 className='section-header'>Completed page and moving forward</h1>

                    <h2>The Finished Experience</h2>
                    <p className='body-text'>The final Discover page pairs a curated, preference-driven set of session recommendations with a conversational AI agent that attendees can lean on for anything the static list doesn't cover. Attendees can skim recommended sessions as cards, dig deeper or refine their picks through the chat, and add or remove sessions from their schedule from either surface with an immediate, visible confirmation every time.</p>

                    <h2>Impact</h2>
                    <p className='body-text'>Following launch, Discover became one of the most-used entry points into the Build session catalog, with the majority of attendees who used it engaging with the chat at least once during their planning process rather than treating it as a hidden extra. Average time spent building an initial schedule dropped noticeably compared to the prior year's catalog-first experience, and post-event survey responses specifically called out the chat as making it easier to find sessions attendees wouldn't have found by browsing alone.</p>

                    <h2>Looking Ahead</h2>
                    <p className='body-text'>The profile-level preference data this project introduced was built to extend beyond Build, and there's a clear opportunity to carry it across other Microsoft events like Ignite and FabCon so attendees only have to set their interests once. I'd also like to explore letting the chat proactively flag schedule conflicts as sessions are added, rather than leaving attendees to notice overlaps on their own.</p>
                </div>
            </section>
        </div>


    );
}


export default MicrosoftBuildDiscover;
