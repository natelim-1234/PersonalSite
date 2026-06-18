import React from 'react';
import SectionHead from '../ui/SectionHead';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const LECTURES = [
  { title: 'Designing for Data Clarity',        sub: 'Lecture · INFO 340',        dur: 'Coming soon' },
  { title: 'Information Architecture Principles', sub: 'Lecture · INFO 200',       dur: 'Coming soon' },
  { title: 'From Research to Prototype',         sub: 'Workshop · UX Methods',     dur: 'Coming soon' },
  { title: 'Accessibility in Practice',          sub: 'Guest lecture · Design Lab', dur: 'Coming soon' },
  { title: 'Building a UX Portfolio',            sub: 'Career talk',               dur: 'Coming soon' },
];

function TeachingSection() {
  return (
    <section className="section wrap" id="teaching">
      <SectionHead title="Teaching" index="/ Lectures &amp; talks" />

      <div className="teach-grid">
        {/* Featured */}
        <ScrollReveal className="teach-feature">
          <div className="video">
            <div className="ph" data-label="Featured lecture — coming soon" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
            <span className="badge">Lecture Materials</span>
            <button className="play" type="button" aria-label="View lecture materials" onClick={() => window.location.href = '/lecture'}>
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <span className="dur">Coming soon</span>
          </div>
          <div className="f-meta">
            <h3 className="f-title">
              Lecture materials &amp; talks <span className="go">↗</span>
            </h3>
            <p className="f-sub">
              Slides, notes, and recordings from lectures and workshops I've given on
              UX design, information architecture, and designing with data.
            </p>
          </div>
        </ScrollReveal>

        {/* Sidebar list */}
        <div className="teach-side">
          <ScrollReveal as="div" className="side-label">
            <span>Upcoming content</span>
            <span>In progress</span>
          </ScrollReveal>

          {LECTURES.map((lec, i) => (
            <ScrollReveal
              key={lec.title}
              as="div"
              className="lecture"
              delay={i < 3 ? Math.floor(i / 2) : undefined}
            >
              <div>
                <div className="l-title">{lec.title}</div>
                <div className="l-sub">{lec.sub}</div>
              </div>
              <div className="l-dur">{lec.dur}</div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={2}>
            <Button href="/lecture" className="btn">
              View all materials <span className="arrow">↗</span>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default TeachingSection;
