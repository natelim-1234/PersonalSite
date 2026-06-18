import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import ScrollReveal from './ui/ScrollReveal';

function Home() {
  return (
    <main id="top">
      <HeroSection />

      {/* Featured case studies */}
      <section className="section wrap">
        <ScrollReveal className="home-work-header">
          <h2 className="home-work-title">Selected Work</h2>
          <Link to="/work" className="home-work-link">
            View all <span className="arrow">→</span>
          </Link>
        </ScrollReveal>
        <WorkSection limit={3} />
      </section>

    </main>
  );
}

export default Home;
