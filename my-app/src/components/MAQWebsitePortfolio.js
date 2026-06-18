import React from 'react';
import { ReadBar, CaseHero, CaseCover, CaseBlock, CaseResults } from './CaseStudyLayout';

const SPEC = [
  { k: 'Role',     v: 'Designer & Developer' },
  { k: 'Timeline', v: '6 Weeks' },
  { k: 'Team',     v: 'Solo (CEO oversight)' },
  { k: 'Platform', v: 'Web' },
];

function MAQWebsitePortfolio() {
  return (
    <div>
      <ReadBar />

      <CaseHero
        eyebrow="Work / Case Study"
        title="Website development; from mockup to launch"
        badge="Web · Design + Dev"
        lede="I led a full website redesign — from stakeholder interviews to deployment — before the 2024 Microsoft Ignite conference, resulting in a 40% increase in engagement with services and product pages."
        spec={SPEC}
      />

      <CaseCover label="MAQ Software Website — hero shot" />

      <CaseBlock num={1} label="Overview">
        <h3>The 30-second version</h3>
        <p>One of my first major projects at MAQ Software was to revamp the company website before the 2024 Microsoft Ignite conference. The goal: make it easier for customers to understand our services and how they could benefit from working with us.</p>
        <div className="cs-meta-grid">
          <div className="cs-meta-col">
            <h4>Services</h4>
            <ul>
              <li>Stakeholder interviews</li>
              <li>Sprint planning</li>
              <li>Competitive analysis</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li>Ideation facilitation</li>
              <li>Web development</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Deliverables</h4>
            <ul>
              <li>Sprint plan</li>
              <li>Wireframes</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li><a href="https://maqsoftware.com/" rel="noopener noreferrer" target="_blank">Completed website ↗</a></li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Outcomes</h4>
            <p>The redesign improved readability and clarity, making it easier for visitors to find and understand our services. By optimizing layout and navigation, the updated site drove a <strong>40% increase</strong> in activity on services and product pages.</p>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={2} label="Challenge">
        <h3>The website struggled to communicate what we do.</h3>
        <p>The company's existing website made it difficult for visitors to quickly understand our services and value proposition. The layout, content organization, and navigation were confusing — potentially impacting business opportunities before we could even start a conversation.</p>
        <h4>My task</h4>
        <p>Conduct meetings with the CEO and project leads to interpret their vision into actionable sprint items. Create iteratable mockups to finalize all design decisions before moving into development.</p>
        <h4>Goals</h4>
        <div className="cs-goals">
          <div className="cs-goal"><p>Create a sprint plan with clear milestones</p></div>
          <div className="cs-goal"><p>Define the information architecture of the home page</p></div>
          <div className="cs-goal"><p>Design new page components and add them to the Figma library</p></div>
          <div className="cs-goal"><p>Receive sign-off from the CEO and project leads on the mockup</p></div>
          <div className="cs-goal"><p>Develop the new webpage</p></div>
          <div className="cs-goal"><p>Ensure the new website is bug-free before launch</p></div>
          <div className="cs-goal"><p>Publish before the Microsoft Ignite 2024 event</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={3} label="Research">
        <h3>Understanding what wasn't working</h3>
        <p>I began by deconstructing the website's existing information architecture to identify where users were getting lost or losing interest. A third-party analytics tool revealed that users were most interested in our services and products — but had to scroll far down the page to find that information, leading to drop-off.</p>
        <p>I then conducted a competitive analysis of other consulting company websites to see how similar organizations presented their services more clearly. The best examples combined concise, scannable service descriptions with strong visual hierarchy.</p>
        <h4>Meeting the deadline</h4>
        <p>To complete this in time for Ignite, I held daily meetings with the CEO and project leads to understand the vision and translate requests into a concrete sprint plan. Clear prioritization ensured the team knew what needed to ship versus what could come later.</p>
      </CaseBlock>

      <CaseBlock num={4} label="Solution">
        <h3>Unifying design and fixing information hierarchy</h3>
        <p>The previous website lacked design cohesion, making it difficult for users to navigate intuitively from page to page. We redesigned using Microsoft Fluent UI as a reference point — adapting it to create our own distinct visual style while maintaining a familiar, professional feel.</p>
        <p>By establishing a consistent design system, users could navigate the site with confidence. This cohesion, combined with restructured information hierarchy, drove a <strong>40% increase in engagement</strong> on services and product pages.</p>
        <h4>Order matters</h4>
        <p>Analytics revealed users were most interested in our services and products but were abandoning the page before reaching that content. We moved all services and product information to the top of the home page, ordered by popularity — so users could immediately find what mattered most to them.</p>
      </CaseBlock>

      <CaseBlock num={5} label="Impact">
        <h3>Measured after launch</h3>
        <p>The redesigned website launched before Microsoft Ignite 2024 and delivered measurable improvements in engagement and discoverability.</p>
        <CaseResults results={[
          { n: '+40%', l: 'Increase in activity on services & product pages' },
          { n: '↑', l: 'Improved discoverability of key service offerings through restructured navigation' },
          { n: '✓', l: 'Launched on time before Microsoft Ignite 2024' },
        ]} />
      </CaseBlock>

      <CaseBlock num={6} label="Deliverables">
        <h3>What we shipped</h3>
        <p className="case-note">Some details are omitted due to a signed NDA.</p>
        <div className="cs-deliverables">
          <div className="cs-del">
            <div>
              <h4>Sprint Plan</h4>
              <p>An Impact Report for the CEO explaining the benefits of the redesign, estimated effort, and a week-by-week delivery plan that kept the project on schedule.</p>
            </div>
            <span className="cs-del-tag">Planning</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Wireframes</h4>
              <p>Low-fidelity wireframes presenting the new information architecture and page structure to stakeholders before high-fidelity work began — enabling faster, lower-cost iteration.</p>
            </div>
            <span className="cs-del-tag">Design</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Figma Component Library</h4>
              <p>A centralized library ensuring consistent style across all pages — a foundation for this project and a reusable asset for future website updates.</p>
            </div>
            <span className="cs-del-tag">Design System</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>High-Fidelity Mockup</h4>
              <p>Full mobile-first mockup expanded to desktop, then presented to the CEO for sign-off before development began. Multiple rounds of iteration ensured every detail was approved.</p>
            </div>
            <span className="cs-del-tag">Design</span>
          </div>
          <div className="cs-del">
            <div>
              <h4><a href="https://maqsoftware.com/" rel="noopener noreferrer" target="_blank">Completed Website ↗</a></h4>
              <p>Fully developed, bug-tested, and launched before the Ignite 2024 deadline. Every page was reviewed for spelling, link accuracy, and content correctness before going live.</p>
            </div>
            <span className="cs-del-tag">Development</span>
          </div>
        </div>
      </CaseBlock>
    </div>
  );
}

export default MAQWebsitePortfolio;
