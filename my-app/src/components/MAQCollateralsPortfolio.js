import React from 'react';
import { ReadBar, CaseHero, CaseCover, CaseBlock } from './CaseStudyLayout';
import ImageZoom from './ui/ImageZoom';
import companyBrochure1 from '../img/MSIgnite24_Brochure-1.png';
import companyBrochure2 from '../img/MSIgnite24_Brochure-2.png';

const SPEC = [
  { k: 'Role',   v: 'Visual Designer' },
  { k: 'Event',  v: 'Microsoft Ignite 2024' },
  { k: 'Scope',  v: 'Brand & Print' },
  { k: 'Output', v: '4 Deliverables' },
];

function MAQCollateralsPortfolio() {
  return (
    <div>
      <ReadBar />

      <CaseHero
        eyebrow="Work / Case Study"
        title="Designing impactful company collaterals"
        badge="Brand · Visual Design"
        lede="I designed the full suite of booth collaterals for Microsoft Ignite 2024 — from backdrop to brochure — to attract new customers and spark meaningful conversations at the event."
        spec={SPEC}
      />

      <CaseCover label="Microsoft Ignite 2024 — booth collaterals" />

      <CaseBlock num={1} label="Overview">
        <h3>The 30-second version</h3>
        <p>Microsoft Ignite 2024 is an annual conference where companies showcase the latest Microsoft technology innovations and present their own services. I was tasked with designing collaterals for our company booth — handouts, informational webpages, video demos, and booth backdrops — each thoughtfully crafted to attract new customers and communicate our brand clearly.</p>
        <div className="cs-meta-grid">
          <div className="cs-meta-col">
            <h4>Services</h4>
            <ul>
              <li>Requirements gathering</li>
              <li>Competitive analysis</li>
              <li>Figma mockup creation</li>
              <li>Visual design</li>
              <li>Video editing</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Deliverables</h4>
            <ul>
              <li>Company brochure</li>
              <li>Event information webpage</li>
              <li>Video demos</li>
              <li>Booth backdrop</li>
            </ul>
          </div>
          <div className="cs-meta-col">
            <h4>Outcomes</h4>
            <p>The collaterals created for Microsoft Ignite 2024 were designed to captivate and engage through striking visuals and compelling content — sparking meaningful conversations with potential customers at the booth.</p>
          </div>
        </div>
      </CaseBlock>

      <CaseBlock num={2} label="Company Brochure">
        <h3>The main handout</h3>
        <p>The company brochure was designed to give potential customers a clear, visually engaging overview of MAQ Software's services and products. It needed to be scannable and memorable — something attendees would hold onto after the conference.</p>
        <div className="cs-img-pair">
          <ImageZoom src={companyBrochure1} alt="Company brochure — page 1" />
          <ImageZoom src={companyBrochure2} alt="Company brochure — page 2" />
        </div>
      </CaseBlock>

      <CaseBlock num={3} label="Other Deliverables">
        <h3>Full booth experience</h3>
        <p>Beyond the brochure, I designed and produced three additional pieces to create a cohesive booth experience across every touchpoint:</p>
        <div className="cs-deliverables">
          <div className="cs-del">
            <div>
              <h4>Event Information Webpage</h4>
              <p>A dedicated webpage for the Ignite event showcasing MAQ Software's booth details, session schedule, and key services — accessible to attendees before and during the conference.</p>
            </div>
            <span className="cs-del-tag">Web</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Video Demos</h4>
              <p>Short, edited video demonstrations of key MAQ Software products and services — designed to play on screens at the booth and capture attention across a busy conference floor.</p>
            </div>
            <span className="cs-del-tag">Video</span>
          </div>
          <div className="cs-del">
            <div>
              <h4>Booth Backdrop</h4>
              <p>A large-format backdrop designed to make the booth visually distinctive and clearly communicate our brand identity and core value proposition from across the room.</p>
            </div>
            <span className="cs-del-tag">Print</span>
          </div>
        </div>
      </CaseBlock>
    </div>
  );
}

export default MAQCollateralsPortfolio;
