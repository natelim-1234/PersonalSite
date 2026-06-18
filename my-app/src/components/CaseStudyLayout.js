import React, { useEffect } from 'react';

export function ReadBar() {
  useEffect(() => {
    const bar = document.getElementById('case-read-bar');
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="case-read-bar" className="read-bar" aria-hidden="true" />;
}

export function CaseHero({ eyebrow, title, badge, lede, spec }) {
  return (
    <section className="case-hero">
      <div className="wrap">
        <div className="case-kicker">
          <span className="eyebrow">{eyebrow}</span>
          {badge && <span className="pill">{badge}</span>}
        </div>
        <h1 className="case-title">
          <span className="ln"><span>{title}</span></span>
        </h1>
        {lede && <p className="case-lede">{lede}</p>}
        {spec && spec.length > 0 && (
          <div className="case-spec">
            {spec.map((s, i) => (
              <div className="s" key={i}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function CaseCover({ img, imgAlt, label, children }) {
  return (
    <div className="case-cover">
      <div className="wrap">
        {img
          ? <img src={img} alt={imgAlt || 'Case study cover'} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
          : children || (
            <div
              className="ph"
              data-label={label || 'Cover image'}
              style={{ aspectRatio: '16/9', borderRadius: '8px' }}
            />
          )
        }
      </div>
    </div>
  );
}

export function CaseBlock({ num, label, children }) {
  const numStr = num != null ? String(num).padStart(2, '0') : null;
  return (
    <div className="case-block">
      <div className="wrap">
        <div className="block-grid">
          <div className="block-label">
            {numStr && <span className="num">{numStr}</span>}
            {label}
          </div>
          <div className="block-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseResults({ results }) {
  return (
    <div className="case-results">
      {results.map((r, i) => (
        <div className="r" key={i}>
          <div className="n">{r.n}</div>
          <div className="l">{r.l}</div>
        </div>
      ))}
    </div>
  );
}
