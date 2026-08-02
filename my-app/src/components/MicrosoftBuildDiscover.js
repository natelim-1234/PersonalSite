import React from 'react';
import { ReadBar, CaseHero, CaseCover, CaseBlock, CaseResults } from './CaseStudyLayout';
import DiscoverWalkthroughVideo from '../img/Build_Walkthrough.mov';

const SPEC = [
  { k: 'Role',     v: 'Lead UX Designer' },
  { k: 'Timeline', v: '6 Weeks' },
  { k: 'Team',     v: '1 PM, 2 Designers, 6 Engineers' },
  { k: 'Platform', v: 'Web (Responsive)' },
];

function MicrosoftBuildDiscover() {
  return (
    <div>
      <ReadBar />

      <CaseHero
        eyebrow="Work / Case Study"
        title="Designing the Microsoft Build Discover page"
        badge="Web · AI"
        lede="Microsoft Build brings tens of thousands of developers together across hundreds of sessions. I led the design of an AI assistant that turns an overwhelming catalog into a personalized, conversational path to the sessions attendees actually care about."
        spec={SPEC}
      />

      <CaseCover>
        <video
          src={DiscoverWalkthroughVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
        />
      </CaseCover>

      <CaseBlock num={1} label="Overview">
        <h3>The 30-second version</h3>
        <p>Microsoft Build is one of Microsoft's largest annual developer conferences, spanning hundreds of sessions, workshops, and labs across dozens of tracks. With so much on offer, attendees often spent more time searching than learning — scrolling through a dense catalog and cross-referencing tracks just to figure out what was relevant to them.</p>
        <p>I led the end-to-end UX design of the event site's Discover page: an AI assistant that asks attendees a few quick questions about their role and interests, then recommends sessions and builds a shareable schedule around them — no manual filtering required.</p>
        <div className="cs-meta-grid">
          <div className="cs-meta-col">
            <h4>Services</h4>
            <ul>
              <li>Ideation &amp; stakeholder interviews</li>
              <li>Competitive analysis</li>
              <li>Feature prioritization</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li>Usability testing</li>
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
              <li>Developer handoff spec</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Outcomes</h4>
            <p>Working closely with product and engineering, we shipped a Discover experience that let attendees generate a personalized schedule in under two minutes in usability testing — down from 15+ minutes of manual browsing — and it became the primary entry point into the Build session catalog.</p>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={2} label="Challenge">
        <h3>Hundreds of sessions. One search box.</h3>
        <p>Before this redesign, Build's session catalog was a flat, filterable list — powerful for someone who already knew exactly what they wanted, but a wall of text for everyone else. First-time attendees and newer developers had no clear starting point, and the sheer number of tracks — AI, cloud, data, security, dev tools, and more — made it easy to miss sessions that actually mattered to them.</p>
        <h4>High-level goals</h4>
        <div className="cs-goals">
          <div className="cs-goal"><p><strong>Give every attendee a personalized starting point</strong>, not just a search bar.</p></div>
          <div className="cs-goal"><p><strong>Reduce the time and effort</strong> it takes to go from "I'm here" to "here's my schedule."</p></div>
          <div className="cs-goal"><p><strong>Make discovery feel conversational</strong> rather than like filling out a form.</p></div>
          <div className="cs-goal"><p><strong>Design a system that scales</strong> gracefully as the session catalog grows year over year.</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={3} label="My Role">
        <h3>What I owned</h3>
        <p>I led the end-to-end UX design of the Discover page, from early concepting through high-fidelity design and developer handoff. I partnered closely with a PM to shape the feature scope, worked alongside another designer on the results and schedule-builder screens, and paired daily with engineering to keep the interface in sync as the recommendation logic evolved.</p>
        <p>I also ran lightweight usability sessions with stakeholders standing in for attendee personas, using their feedback to simplify onboarding from a multi-step form down to three quick prompts.</p>
      </CaseBlock>

      <CaseBlock num={4} label="Research">
        <h3>What was actually slowing people down</h3>
        <p>We reviewed session-browsing analytics and support feedback from prior Build events, and ran quick interviews with past attendees. A clear pattern emerged: people didn't lack interest in sessions — they lacked a fast way to know which ones applied to them.</p>
        <h4>Competitive analysis</h4>
        <p>We looked at how other large developer conferences approached session discovery. Most relied on tag-based filtering that still assumed attendees already understood the event's track taxonomy — useful for power users, but a poor first step for everyone else.</p>
      </CaseBlock>

      <CaseBlock num={5} label="Insights">
        <h3>Four things changed everything</h3>
        <div className="cs-goals">
          <div className="cs-goal"><p><strong>Personalization beats filtering</strong> — recommend sessions from a few signals instead of dozens of filter options.</p></div>
          <div className="cs-goal"><p><strong>Speed matters more than completeness</strong> — get attendees to a first draft schedule in under a minute so they can refine it, rather than start from scratch.</p></div>
          <div className="cs-goal"><p><strong>Trust needs a reason</strong> — show why a session was recommended, not just that it was.</p></div>
          <div className="cs-goal"><p><strong>Design for return visits</strong> — attendees revisit their schedule throughout the event, so the design has to hold up beyond the first use.</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={6} label="Design Strategy">
        <h3>From a filter list to a guided conversation</h3>
        <p>We mapped the existing browse-and-filter flow end to end and found the same friction point every time: attendees had to already understand Build's track taxonomy before the filters were useful to them.</p>
        <h4>Reframing discovery as a conversation</h4>
        <p>We replaced the filter-first model with a short, conversational intake — role, focus areas, and format preference — that fed directly into a ranked recommendation engine. Every recommended session surfaced a short "why this" note tied back to the attendee's answers, so the AI's suggestions felt explainable rather than opaque.</p>
      </CaseBlock>

      <CaseBlock num={7} label="Solution">
        <h3>What we shipped</h3>
        <div className="cs-deliverables">
          <div className="cs-del">
            <div>
              <h4>Conversational Intake</h4>
              <p>Three quick prompts — role, focus areas, format — replace a dense filter panel, getting attendees to relevant recommendations in seconds instead of minutes.</p>
            </div>
            <span className="cs-del-tag">Onboarding</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>AI-Ranked Session Feed</h4>
              <p>Sessions are ranked and grouped by relevance, each paired with a short "why this" note so the recommendation feels explainable rather than arbitrary.</p>
            </div>
            <span className="cs-del-tag">AI / Recommendation</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>One-Tap Schedule Builder</h4>
              <p>Attendees add sessions to a running schedule directly from the recommendation feed, with conflicts flagged automatically as the schedule fills in.</p>
            </div>
            <span className="cs-del-tag">Schedule</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Shareable, Exportable Schedule</h4>
              <p>The finished schedule syncs to a personal calendar and can be shared with teammates attending the same event.</p>
            </div>
            <span className="cs-del-tag">Export</span>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={8} label="Impact">
        <h3>Measured in usability testing</h3>
        <CaseResults results={[
          { n: '<2 min', l: 'Median time to a personalized first-draft schedule, down from 15+ minutes of manual browsing' },
          { n: '3', l: 'Questions replaced a multi-filter panel as the entry point to discovery' },
          { n: '#1', l: 'Discover became the top entry point into the Build session catalog in testing' },
        ]} />
      </CaseBlock>

      <CaseBlock num={9} label="Reflection">
        <h3>What I'd carry forward</h3>
        <p>Shipping Discover reinforced how much good UX writing does the AI's job for it — the "why this" notes did more to build attendee trust than the ranking model underneath them. If I had more runway, I'd extend the same conversational model to speaker and expo-partner discovery, so the whole event experience — not just sessions — benefits from the same personalized entry point.</p>
      </CaseBlock>
    </div>
  );
}

export default MicrosoftBuildDiscover;
