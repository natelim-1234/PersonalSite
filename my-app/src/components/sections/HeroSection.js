import React, { useEffect, useRef } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import ProfileIMG from '../../img/Nathan_Profile.jpg';

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.add('hero-anim-in'))
    );
  }, []);

  return (
    <section className="hero wrap" id="top" ref={heroRef}>

      {/* ── Two-column split ── */}
      <div className="hero-split">

        {/* Left — photo */}
        <ScrollReveal className="hero-img-col">
          <div className="hero-img-wrap">
            <div className="hero-img-accent" aria-hidden="true" />
            <img src={ProfileIMG} alt="Nathan Limono" />
            <div className="hero-img-line" aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Right — intro */}
        <div className="hero-text-col">
          <h1 className="hero-greeting">
            <span className="ln"><span>Hello, I'm Nathan.</span></span>
          </h1>

          <ScrollReveal as="p" className="hero-role" delay={1}>
            UX Designer &amp; Informatics Graduate.
          </ScrollReveal>

          <ScrollReveal as="p" className="hero-bio" delay={2}>
            I bridge the gap between <strong>data, design, and people</strong> to build interfaces
            that meet business goals without ever losing sight of the person on the other end of the screen.
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <a href="/about" className="hero-text-link">
              More about me <span className="arrow">→</span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll cue */}
      <ScrollReveal delay={4} className="scroll-cue">
        <span className="arrow-down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </ScrollReveal>

    </section>
  );
}

export default HeroSection;
