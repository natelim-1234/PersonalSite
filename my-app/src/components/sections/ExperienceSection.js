import React from 'react';
import SectionHead from '../ui/SectionHead';
import ScrollReveal from '../ui/ScrollReveal';

const EXPERIENCE = [
  {
    years: '2024 — Now',
    role: 'UX Designer',
    company: 'MAQ Software',
    desc: 'UX &amp; Product Design · <b>MAQ Software</b>',
    place: 'Bellevue, WA',
  },
  {
    years: '2019 — 2024',
    role: 'BS Informatics',
    company: 'University of Washington',
    desc: 'Information School · <b>University of Washington</b>',
    place: 'Seattle, WA',
  },
];

function ExperienceSection() {
  return (
    <section className="section wrap" id="experience">
      <SectionHead title="Experience" index="/ Where I've worked" />

      <div className="xp-list">
        {EXPERIENCE.map((item, i) => (
          <ScrollReveal key={i} as="div" className="xp">
            <div className="yr">{item.years}</div>
            <div>
              <div className="role">{item.role}</div>
              <div className="co" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
            <div className="place">{item.place}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
