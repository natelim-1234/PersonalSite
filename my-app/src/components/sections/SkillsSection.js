import React from 'react';
import SectionHead from '../ui/SectionHead';
import ScrollReveal from '../ui/ScrollReveal';

const SKILLS = [
  {
    category: 'Design',
    items: [
      { name: 'UX Design',              level: 'Core' },
      { name: 'Interaction Design',     level: 'Core' },
      { name: 'Information Architecture', level: 'Core' },
      { name: 'Visual Design',          level: 'Advanced' },
      { name: 'Prototyping',            level: 'Advanced' },
    ],
  },
  {
    category: 'Methods',
    items: [
      { name: 'User Research',          level: 'Advanced' },
      { name: 'Usability Testing',      level: 'Advanced' },
      { name: 'Journey Mapping',        level: 'Advanced' },
      { name: 'Design Systems',         level: 'Advanced' },
      { name: 'Accessibility (WCAG)',   level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Figma',                  level: 'Daily' },
      { name: 'HTML / CSS',             level: 'Advanced' },
      { name: 'React',                  level: 'Intermediate' },
      { name: 'Data Visualization',     level: 'Advanced' },
      { name: 'Power BI',               level: 'Intermediate' },
    ],
  },
];

function SkillsSection() {
  return (
    <section className="section wrap" id="skills">
      <SectionHead title="Capabilities" index="/ How I work" />

      <div className="skills-grid">
        {SKILLS.map((col, i) => (
          <ScrollReveal key={col.category} as="div" className="skill-col" delay={i > 0 ? i : undefined}>
            <h3>{col.category}</h3>
            <ul>
              {col.items.map(skill => (
                <li key={skill.name}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
