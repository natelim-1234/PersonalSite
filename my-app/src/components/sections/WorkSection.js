import React from 'react';
import { Link } from 'react-router-dom';
import Pill from '../ui/Pill';
import ScrollReveal from '../ui/ScrollReveal';
import PROJECTS from '../../data/projects';

function WorkSection({ limit }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <div className="work-list">
      {projects.map((p, i) => (
        <ScrollReveal key={p.to} as={Link} to={p.to} className="project" delay={i < 2 ? i : undefined}>
          <div className="project-inner">
            <div className="p-main">
              <h3 className="p-title">{p.title}</h3>
              <p className="p-desc">{p.desc}</p>
              <div className="p-tags">
                {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>
            <div className="p-thumb">
              <img src={p.img} alt={p.title} />
            </div>
          </div>
          <div className="project-cta" aria-hidden="true">↗</div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default WorkSection;
