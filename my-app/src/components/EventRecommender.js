import React from 'react';
import { ReadBar, CaseHero, CaseCover, CaseBlock } from './CaseStudyLayout';
import ImageZoom from './ui/ImageZoom';
import RecommenderLanding from '../img/session-recommender-images/session-recommender-landing.svg';
import EventRecommenderCase1 from '../img/session-recommender-images/Event-Recommender-Case-1.PNG';
import EventRecommenderCase2 from '../img/session-recommender-images/Event-Recommender-Case-2.PNG';
import WhovaFlowHorizontal from '../img/session-recommender-images/whova-flow-horizontal.png';
import AIEventRecommenderHorizontal from '../img/session-recommender-images/ai-event-recommender-flow-horizontal.png';
import QuestionAndAnswer from '../img/session-recommender-images/question-and-answer.svg';
import Calendar from '../img/session-recommender-images/Calendar.svg';
import ReplaceSession from '../img/session-recommender-images/replace-session.svg';
import EmailSchedule from '../img/session-recommender-images/email-schedule.svg';

const SPEC = [
  { k: 'Role',     v: 'Lead Designer' },
  { k: 'Timeline', v: '1 Week' },
  { k: 'Team',     v: '3 Designers, 4 Engineers' },
  { k: 'Platform', v: 'Mobile (iOS)' },
];

function EventRecommender() {
  return (
    <div>
      <ReadBar />

      <CaseHero
        eyebrow="Work / Case Study"
        title="Designing a convention schedule recommender"
        badge="Mobile · AI"
        lede="We built an AI-powered scheduling app in one week to help Fabcon Vegas 2025 attendees discover relevant sessions — without the friction of generic event platforms."
        spec={SPEC}
      />

      <CaseCover>
        <div className="cs-cover-app">
          <img src={RecommenderLanding} alt="Convention Schedule Recommender app screens" />
        </div>
      </CaseCover>

      <CaseBlock num={1} label="Overview">
        <h3>The 30-second version</h3>
        <p>Fabcon Vegas 2025 brought thousands of data professionals together for an expansive lineup of workshops, sessions, and panels. Attendees needed a faster, smarter way to build personalized schedules without downloading another generic event app.</p>
        <p>I led the mobile design for an AI-powered recommender that takes conversational Q&amp;A input and generates a tailored schedule — with the ability to swap sessions via a relevance-ranked list and export to email as a PDF.</p>
        <div className="cs-meta-grid">
          <div className="cs-meta-col">
            <h4>Services</h4>
            <ul>
              <li>Ideation &amp; stakeholder interviews</li>
              <li>Competitor analysis</li>
              <li>Feature prioritization</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li>Code generation</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Deliverables</h4>
            <ul>
              <li>Workback plan</li>
              <li>User flow diagrams</li>
              <li>Wireframes</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li>React template code</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Outcomes</h4>
            <p>Working closely with stakeholders and developers, we transformed a complex scheduling challenge into a focused AI-driven experience. The app released on our company LinkedIn page and received positive engagement from the Fabric community.</p>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={2} label="Challenge">
        <h3>Conference attendees wanted a schedule. Existing apps wanted a tutorial.</h3>
        <p>Fabcon has rapidly become the premier event for the Microsoft Fabric community. With thousands of sessions across multiple tracks, attendees — especially first-timers — struggled to build personalized schedules quickly.</p>
        <p>Existing tools like Whova offered broad scheduling features, but their generalized design required users to download an app, create an account, and wade through interfaces built for dozens of events at once. For someone who just wants a relevant schedule for one conference, that process created unnecessary friction.</p>
        <h4>High-level goals</h4>
        <div className="cs-goals">
          <div className="cs-goal"><p><strong>Streamline session discovery</strong> through AI-driven categorization and filtering.</p></div>
          <div className="cs-goal"><p><strong>Maximize convenience</strong> by removing login requirements and third-party app dependencies.</p></div>
          <div className="cs-goal"><p><strong>Support quick decision making</strong> with a clean, mobile-first interface.</p></div>
          <div className="cs-goal"><p><strong>Design specifically for Fabcon 2025</strong> to deliver context-aware features and recommendations.</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={3} label="My Role">
        <h3>What I owned</h3>
        <p>I led the mobile experience design for the event recommender and collaborated with two other designers on the desktop version. We used FigJam to plan user flows and Figma to build high-fidelity mockups.</p>
        <p>I also worked closely with developers and project managers to ensure designs were both technically feasible and aligned with our company goals — participating in daily sprint reviews throughout the one-week sprint.</p>
      </CaseBlock>

      <CaseBlock num={4} label="Research">
        <h3>What are attendees saying?</h3>
        <p>To understand attendee needs, we reviewed feedback from past Microsoft Fabric events — social media comments, community forums, and LinkedIn conversations. A recurring theme emerged: attendees were excited about the content but needed help navigating the volume of sessions.</p>
        <div className="cs-img-pair">
          <ImageZoom src={EventRecommenderCase1} alt="User feedback from social media — example 1" />
          <ImageZoom src={EventRecommenderCase2} alt="User feedback from social media — example 2" />
        </div>
        <h4>Competitor analysis</h4>
        <p>While Whova offers sophisticated scheduling features, it required a multi-step onboarding flow — download, account creation, event search — before a user could begin building their schedule. We counted at least six user decisions before schedule creation began. For a user focused on one event, this was significant friction.</p>
      </CaseBlock>

      <CaseBlock num={5} label="Insights">
        <h3>Four things changed everything</h3>
        <p>From our research, we synthesized four core opportunity areas that guided every design decision:</p>
        <div className="cs-goals">
          <div className="cs-goal"><p><strong>Minimize cognitive load</strong> — A cleaner interface with AI-prioritized content helps users make quick, informed decisions in the moment.</p></div>
          <div className="cs-goal"><p><strong>Instant access</strong> — Users wanted to explore sessions without creating an account, downloading an app, or going through a login flow.</p></div>
          <div className="cs-goal"><p><strong>Conversational Q&amp;A interface</strong> — Inspired by attendee questions seen on Reddit and LinkedIn, we designed a friendly, question-driven flow where users describe interests conversationally to generate a curated schedule.</p></div>
          <div className="cs-goal"><p><strong>Offline capabilities</strong> — Allow users to send their schedule to email as a downloadable PDF for access during the event.</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={6} label="Design Strategy">
        <h3>From many steps to one flow</h3>
        <p>We began by mapping Whova's complete user flow — from onboarding to session selection — to identify exactly where to simplify.</p>
        <h4>Analyzing the competitor flow</h4>
        <p>Six user decisions, repetitive selection steps, and no AI assistance to surface relevant content. We documented every step to find where we could cut.</p>
        <ImageZoom src={WhovaFlowHorizontal} alt="Whova competitor user flow diagram" />
        <h4>Simplifying with AI</h4>
        <p>By having our AI generate an initial schedule from conversational input, we removed most cognitive work upfront. When users want to swap a session, our relevance-ranked recommendation list makes it easy to find a better fit without scanning everything.</p>
        <ImageZoom src={AIEventRecommenderHorizontal} alt="Simplified AI event recommender flow diagram" />
      </CaseBlock>

      <CaseBlock num={7} label="Solution">
        <h3>The redesigned scheduling experience</h3>
        <p>Four core features define the final design, each addressing a specific research finding:</p>
        <div className="cs-features">
          <div className="cs-feature">
            <div className="cs-feature-img">
              <ImageZoom src={QuestionAndAnswer} alt="Q&A input screen" />
            </div>
            <div className="cs-feature-body">
              <h4>Intuitive Q&amp;A Format</h4>
              <p>Instead of forms and filters, users describe their interests conversationally — the same way they'd ask a colleague for recommendations. No steep learning curve.</p>
            </div>
          </div>
          <div className="cs-feature">
            <div className="cs-feature-img">
              <ImageZoom src={Calendar} alt="Calendar view screen" />
            </div>
            <div className="cs-feature-body">
              <h4>Familiar Calendar View</h4>
              <p>Following "Recognition Over Recall," the schedule uses a familiar calendar format — like Apple Calendar or Teams — so users immediately understand session timing and can navigate between days.</p>
            </div>
          </div>
          <div className="cs-feature">
            <div className="cs-feature-img">
              <ImageZoom src={ReplaceSession} alt="Recommended sessions list" />
            </div>
            <div className="cs-feature-body">
              <h4>Relevance-Ranked Session List</h4>
              <p>When users want to swap a session, an AI-ranked list surfaces the most relevant alternatives at the top — minimizing scroll and reading load when making changes.</p>
            </div>
          </div>
          <div className="cs-feature">
            <div className="cs-feature-img">
              <ImageZoom src={EmailSchedule} alt="Send schedule to email screen" />
            </div>
            <div className="cs-feature-body">
              <h4>Send Schedule to Email</h4>
              <p>Once satisfied, users export their schedule as a PDF to their email for offline access — no app required during the event itself.</p>
            </div>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={8} label="Reflection">
        <h3>What I'd carry forward</h3>
        <p>The schedule recommender launched successfully on our company LinkedIn page and received positive engagement from the Fabric community. The one-week sprint was a lesson in constraint-driven clarity — every feature had to justify itself against time.</p>
        <p>If we had more time, I would have prioritized a more conversational follow-up experience — allowing users to probe the AI for session explanations, ask follow-up questions, and refine their schedule through dialogue rather than just a single Q&amp;A input.</p>
      </CaseBlock>
    </div>
  );
}

export default EventRecommender;
