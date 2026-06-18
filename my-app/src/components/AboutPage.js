import React from 'react';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';

function AboutPage() {
  return (
    <main className="page-main">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}

export default AboutPage;
