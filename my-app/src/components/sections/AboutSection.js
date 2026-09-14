import React from 'react';
import SectionHead from '../ui/SectionHead';
import ScrollReveal from '../ui/ScrollReveal';
import ProfileIMG from '../../img/Nathan_Profile.jpg';

function AboutSection() {
  return (
    <section className="section wrap" id="about">
      <SectionHead title="Bringing data and people together through design."/>

      <div className="about-grid">
        <ScrollReveal className="about-portrait">
          <img src={ProfileIMG} alt="Nathan Limono" />
        </ScrollReveal>

        <div className="about-body">
          <ScrollReveal>
            <h1 className="hero-greeting">
              <span className="ln"><span>Nathan Limono</span></span>
            </h1>
            <p className="big">
              I graduated from the University of Washington with a BS in{' '}
              <span>Informatics</span>, and now I'm a UX Designer at MAQ Software
              working at the intersection of <span>data, design, and people</span>.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p>
              My work spans information architecture, interaction design, and visual design.
              I believe great products come from deeply understanding the people who use them,
              and from removing everything that doesn't earn its place.
            </p>
          </ScrollReveal>
          {/* <ScrollReveal delay={2} className="about-stats">
            <div className="stat">
              <div className="n">4+</div>
              <div className="l">Case studies</div>
            </div>
            <div className="stat">
              <div className="n">UW</div>
              <div className="l">Informatics '24</div>
            </div>
            <div className="stat">
              <div className="n">MAQ</div>
              <div className="l">Software</div>
            </div>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
