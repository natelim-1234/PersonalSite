import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import Eyebrow from './ui/Eyebrow';

const LINKS = [
  { label: 'LinkedIn',        href: 'https://www.linkedin.com/in/nathan-limono-975a26167/', ext: '↗' },
  { label: 'Download résumé', href: '/Nathan Limono Resume 2026.pdf', ext: '↓', download: true },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Contact / CTA */}
      <section className="section contact" id="contact">
        <div className="wrap">
          <div className="contact-inner">
            <div>
              <ScrollReveal as="span">
                <Eyebrow>Open to collaboration</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <h2 style={{ marginTop: '18px' }}>Need a Designer?</h2>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <a href="mailto:natelimono@gmail.com" className="mailto">
                  <span className="u">natelimono@gmail.com</span>
                  <span className="arrow">↗</span>
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={2} className="links">
              {LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={link.download || undefined}
                >
                  {link.label}
                  <span className="ext">{link.ext}</span>
                </a>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="foot">
        <div className="foot-inner wrap">
          <span>© {year} Nathan Limono</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
