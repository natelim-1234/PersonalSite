import React from 'react';
import { ReadBar, CaseHero, CaseCover, CaseBlock, CaseResults } from './CaseStudyLayout';

const SPEC = [
  { k: 'Role',     v: 'Lead Designer' },
  { k: 'Timeline', v: 'Confidential' },
  { k: 'Team',     v: '2 Designers, 3 Engineers' },
  { k: 'Platform', v: 'Web Portal' },
];

function DataManagementPortfolio() {
  return (
    <div>
      <ReadBar />

      <CaseHero
        eyebrow="Work / Case Study"
        title="Revamping a data management service"
        badge="Web · Enterprise"
        lede="I transformed a cluttered, error-prone data portal into an intuitive tool — reducing human errors by 50% through AI-assisted forms and a redesigned step-by-step user flow."
        spec={SPEC}
      />

      <CaseCover label="Data Management Portal — hero shot" />

      <CaseBlock num={1} label="Overview">
        <h3>The 30-second version</h3>
        <p>The existing data management interface didn't follow the company's design system and made it difficult for data modelers and engineers to retrieve and manage data efficiently. I was tasked with a full redesign — aligning with the new design system and introducing interfaces for newly developed features.</p>
        <div className="cs-meta-grid">
          <div className="cs-meta-col">
            <h4>Services</h4>
            <ul>
              <li>Ideation meetings</li>
              <li>Stakeholder interviews</li>
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
              <li>Wireframes</li>
              <li>Figma component library</li>
              <li>High-fidelity mockup</li>
              <li>React template code</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Outcomes</h4>
            <p>We delivered a fully interactive mockup following the client's new design system, refined through multiple user tests and stakeholder interviews — and reduced human data entry errors by <strong>50%</strong> through AI-assisted form inputs.</p>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={2} label="Challenge">
        <h3>Users wanted a tool. They got a maze.</h3>
        <p>The existing interface was built without a cohesive design system, resulting in inconsistent visual patterns and confusing navigation. Data modelers and engineers — the primary users — faced error-prone forms with excessive manual input, leading to delayed analysis, increased maintenance costs, and poor scalability when new features were introduced.</p>
        <h4>Problem statement</h4>
        <p>The existing data management interface doesn't follow the company's design system and lacks the ability to support the diverse and evolving data retrieval needs of data modelers and engineers, resulting in delayed analysis, increased maintenance costs, and poor scalability.</p>
        <h4>Our goals</h4>
        <div className="cs-goals">
          <div className="cs-goal"><p>Align all portal screens to the current design system</p></div>
          <div className="cs-goal"><p>Reduce the number of clicks required for each key workflow</p></div>
          <div className="cs-goal"><p>Ensure all designs are intuitive and straightforward for both new and experienced users</p></div>
          <div className="cs-goal"><p>Streamline processes by reducing the number of steps required to complete tasks</p></div>
        </div>
      </CaseBlock>

      <CaseBlock num={3} label="Research">
        <h3>Seeing the bigger picture</h3>
        <p>We conducted interviews with data modelers and engineers to identify current pain points. A common theme: confusing, error-prone forms with too much manual input. Users were spending significant time correcting mistakes rather than doing meaningful work.</p>
        <p>We also performed competitive analysis on other data management tools — examining pipeline creation interfaces and API testing tools — to identify best practices for reducing cognitive load in complex data workflows.</p>
      </CaseBlock>

      <CaseBlock num={4} label="Solution">
        <h3>A step-by-step approach</h3>
        <p>To address the core challenge of clarity and intuitiveness, we redesigned the portal into simple, guided steps that work for both seasoned power users and newcomers. The new flow reduces cognitive load by breaking complex operations into digestible stages.</p>
        <p>We eliminated most manual form-filling by introducing <strong>auto-fill Generative AI processes</strong> and hierarchical dropdown menus. These changes reduced human errors by 50% compared to the previous system.</p>
        <h4>A cooperative effort</h4>
        <p>Throughout the design process, we held daily sprint meetings to ensure mockups and features were fully aligned with both stakeholder and user requirements. A critical part of our role was communicating design feasibility clearly — explaining when certain feature requests needed adjustment to deliver a better experience.</p>
      </CaseBlock>

      <CaseBlock num={5} label="Impact">
        <h3>Measured after launch</h3>
        <p>By replacing manual input with AI-assisted automation and restructuring navigation around a clear, step-by-step model, we achieved measurable improvements in data quality and user efficiency.</p>
        <CaseResults results={[
          { n: '50%', l: 'Reduction in human data entry errors' },
          { n: '5+', l: 'Reduced steps per workflow through simplified navigation' },
          { n: '100%', l: 'Full design system compliance across all portal screens' },
        ]} />
      </CaseBlock>

      <CaseBlock num={6} label="Deliverables">
        <h3>What we shipped</h3>
        <p className="case-note">Details of individual deliverables cannot be provided due to a signed NDA.</p>
        <div className="cs-deliverables">
          <div className="cs-del">
            <div>
              <h4>Workback Plan</h4>
              <p>Starting from the final deadline and working backwards, we identified all key tasks, milestones, and resource allocations — catching potential bottlenecks early and ensuring on-time delivery.</p>
            </div>
            <span className="cs-del-tag">Planning</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Wireframes</h4>
              <p>Low-fidelity wireframes identified potential design issues early, aligned the team on user experience goals, and made it easy to communicate ideas to stakeholders before investing in high-fidelity work.</p>
            </div>
            <span className="cs-del-tag">Design</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Figma Component Library</h4>
              <p>A centralized component library ensured consistent style across all screens — for this project and future work. It served as a source of truth for both designers and developers throughout the project.</p>
            </div>
            <span className="cs-del-tag">Design System</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>High-Fidelity Mockup</h4>
              <p>The final mockup followed the company design system closely to enable a smooth developer handoff. Each screen was validated with users and stakeholders before development began.</p>
            </div>
            <span className="cs-del-tag">Design</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>React Template Code</h4>
              <p>After mockup approval, our developers generated React code closely matching the designs. This was handed off to the client's team to connect to their databases and backend services.</p>
            </div>
            <span className="cs-del-tag">Development</span>
          </div>
        </div>
      </CaseBlock>
    </div>
  );
}

export default DataManagementPortfolio;
