import React from 'react';
import Button from './ui/Button';
import Pill from './ui/Pill';
import Eyebrow from './ui/Eyebrow';

/* ---------- helpers ---------- */
function Token({ name, value }) {
  return (
    <div className="sg-token">
      <code className="sg-token-name">{name}</code>
      <span className="sg-token-value">{value}</span>
    </div>
  );
}

function ColorSwatch({ varName, label }) {
  return (
    <div className="sg-swatch">
      <div className="sg-swatch-block" style={{ background: `var(${varName})` }} />
      <code className="sg-swatch-var">{varName}</code>
      {label && <span className="sg-swatch-label">{label}</span>}
    </div>
  );
}

function TypeSample({ size, weight = 600, family = 'display', label, sample }) {
  const fontFamily =
    family === 'mono'
      ? 'var(--font-mono)'
      : family === 'body'
      ? 'var(--font-body)'
      : 'var(--font-display)';
  return (
    <div className="sg-type-row">
      <div className="sg-type-meta">
        <code>{label}</code>
        <span>{size} · wt {weight} · {family}</span>
      </div>
      <div
        className="sg-type-sample"
        style={{ fontSize: size, fontWeight: weight, fontFamily, lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {sample || 'The quick brown fox'}
      </div>
    </div>
  );
}

function SpacingSwatch({ value, label }) {
  return (
    <div className="sg-spacing-row">
      <div className="sg-spacing-bar" style={{ width: value, height: '10px', background: 'var(--ink)', borderRadius: '2px' }} />
      <code>{label}</code>
      <span>{value}</span>
    </div>
  );
}

/* ---------- main ---------- */
function StyleGuide() {
  return (
    <div className="sg-root wrap">
      <div className="sg-page-header">
        <Eyebrow>Design System</Eyebrow>
        <h1 className="sg-title">Style Guide</h1>
        <p className="sg-subtitle">Tokens, type ramp, color palette, and base components for natelimono.com</p>
      </div>

      {/* ── COLORS ──────────────────────────────────────────── */}
      <section className="sg-section">
        <h2 className="sg-section-title">Color Tokens</h2>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Surface</h3>
          <div className="sg-swatches">
            <ColorSwatch varName="--paper"   label="Background" />
            <ColorSwatch varName="--paper-2" label="Raised surface" />
            <ColorSwatch varName="--paper-3" label="Sunken surface" />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Ink</h3>
          <div className="sg-swatches">
            <ColorSwatch varName="--ink"      label="Primary text" />
            <ColorSwatch varName="--ink-soft" label="Secondary text" />
            <ColorSwatch varName="--ink-mute" label="Tertiary / labels" />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Lines</h3>
          <div className="sg-swatches">
            <ColorSwatch varName="--line"        label="Default border" />
            <ColorSwatch varName="--line-strong" label="Emphasis border" />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Accent</h3>
          <div className="sg-swatches">
            <ColorSwatch varName="--accent"     label="Accent fill" />
            <ColorSwatch varName="--accent-ink" label="Text on accent" />
          </div>
          <p className="sg-note">
            Defaults to <code>--ink</code> (monochrome). Override by setting <code>--accent</code> on <code>:root</code>.
          </p>
        </div>
      </section>

      {/* ── TYPOGRAPHY ──────────────────────────────────────── */}
      <section className="sg-section">
        <h2 className="sg-section-title">Typography</h2>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Font Families</h3>
          <div className="sg-tokens">
            <Token name="--font-display" value='"Bricolage Grotesque", "Hanken Grotesk", sans-serif' />
            <Token name="--font-body"    value='"Hanken Grotesk", system-ui, sans-serif' />
            <Token name="--font-mono"    value='"Space Mono", ui-monospace, monospace' />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Display Scale — <em>Bricolage Grotesque</em></h3>
          <div className="sg-type-stack">
            <TypeSample label="Display / Hero"     size="clamp(48px,11.5vw,148px)" weight={600} sample="UX Designer" />
            <TypeSample label="Display / Section"  size="clamp(30px,4.6vw,60px)"   weight={600} sample="Selected work" />
            <TypeSample label="Display / Contact"  size="clamp(42px,9vw,120px)"    weight={600} sample="In mind?" />
            <TypeSample label="Display / Project"  size="clamp(28px,4.4vw,54px)"   weight={600} sample="Convention Schedule" />
            <TypeSample label="Display / About big" size="clamp(22px,2.9vw,34px)"  weight={500} sample="A designer who brings data and people together." />
            <TypeSample label="Display / XP role"  size="clamp(19px,2vw,27px)"     weight={600} sample="UX Designer" />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Body Scale — <em>Hanken Grotesk</em></h3>
          <div className="sg-type-stack">
            <TypeSample label="Body / Hero lede" size="clamp(18px,2vw,24px)"   weight={400} family="body" sample="I turn complex, data-heavy problems into interfaces that feel clear." />
            <TypeSample label="Body / Default"   size="clamp(15px,1.05vw,17px)" weight={400} family="body" sample="My work spans information architecture, interaction design, and visual design." />
            <TypeSample label="Body / Small"     size="clamp(14px,1.1vw,16px)"  weight={400} family="body" sample="Designed and built with care." />
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Mono Scale — <em>Space Mono</em></h3>
          <div className="sg-type-stack">
            <TypeSample label="Mono / Nav"      size="14px" weight={400} family="mono" sample="01 About  02 Work  03 Experience" />
            <TypeSample label="Mono / Eyebrow"  size="12px" weight={400} family="mono" sample="DESIGN SYSTEM / 01 — About" />
            <TypeSample label="Mono / Label"    size="11px" weight={400} family="mono" sample="CASE STUDIES · UX DESIGN · EXPERT" />
            <TypeSample label="Mono / Smallest" size="10px" weight={400} family="mono" sample="ROLE · YEAR · LOCATION" />
          </div>
        </div>
      </section>

      {/* ── SPACING ─────────────────────────────────────────── */}
      <section className="sg-section">
        <h2 className="sg-section-title">Spacing &amp; Layout</h2>
        <div className="sg-tokens">
          <Token name="--maxw" value="1280px — max content width" />
          <Token name="--gut"  value="clamp(20px, 5vw, 72px) — inline padding" />
          <Token name="--rule" value="1px — border thickness" />
        </div>
        <div className="sg-subsection" style={{ marginTop: '28px' }}>
          <h3 className="sg-subsection-title">Section padding</h3>
          <div className="sg-tokens">
            <Token name="section padding-block" value="clamp(72px, 11vw, 160px)" />
            <Token name="hero padding-top"      value="clamp(150px, 22vh, 260px)" />
            <Token name="nav height"            value="~64px (18px padding-block)" />
          </div>
        </div>
        <div className="sg-subsection" style={{ marginTop: '28px' }}>
          <h3 className="sg-subsection-title">Fixed scale</h3>
          <div className="sg-spacing-stack">
            <SpacingSwatch value="4px"  label="4px  — xs" />
            <SpacingSwatch value="8px"  label="8px  — sm" />
            <SpacingSwatch value="12px" label="12px — base" />
            <SpacingSwatch value="18px" label="18px — md (--rise)" />
            <SpacingSwatch value="24px" label="24px — lg" />
            <SpacingSwatch value="36px" label="36px — xl" />
            <SpacingSwatch value="48px" label="48px — 2xl" />
            <SpacingSwatch value="72px" label="72px — 3xl" />
          </div>
        </div>
      </section>

      {/* ── MOTION ──────────────────────────────────────────── */}
      <section className="sg-section">
        <h2 className="sg-section-title">Motion</h2>
        <div className="sg-tokens">
          <Token name="--ease" value="cubic-bezier(0.22, 0.61, 0.36, 1) — primary easing" />
          <Token name="--dur"  value="0.7s — reveal duration" />
          <Token name="--rise" value="18px — reveal translateY offset" />
        </div>
        <p className="sg-note" style={{ marginTop: '16px' }}>
          All <code>.reveal</code> elements start hidden and animate in via IntersectionObserver (<code>ScrollReveal</code> component). Respects <code>prefers-reduced-motion</code>.
        </p>
      </section>

      {/* ── COMPONENTS ──────────────────────────────────────── */}
      <section className="sg-section">
        <h2 className="sg-section-title">Base Components</h2>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Button</h3>
          <div className="sg-component-row">
            <Button href="#">Default</Button>
            <Button href="#" solid>Solid</Button>
            <Button href="#">View my work <span className="arrow">↗</span></Button>
            <Button href="#" solid>View selected work <span className="arrow">↗</span></Button>
          </div>
          <div className="sg-code">
            {`<Button href="#work">View my work <span className="arrow">↗</span></Button>\n<Button href="#work" solid>View selected work <span className="arrow">↗</span></Button>`}
          </div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Pill</h3>
          <div className="sg-component-row">
            <Pill>UX Design</Pill>
            <Pill>Product Strategy</Pill>
            <Pill>Mobile</Pill>
            <Pill>Brand</Pill>
            <Pill>Data Design</Pill>
          </div>
          <div className="sg-code">{`<Pill>UX Design</Pill>`}</div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Eyebrow</h3>
          <div className="sg-component-row">
            <Eyebrow>Design System</Eyebrow>
            <Eyebrow>Let's work together</Eyebrow>
          </div>
          <div className="sg-code">{`<Eyebrow>Let's work together</Eyebrow>`}</div>
        </div>

        <div className="sg-subsection">
          <h3 className="sg-subsection-title">Section Head</h3>
          <div className="sg-section-head-demo">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 style={{ fontSize: 'clamp(30px,4.6vw,60px)' }}>Selected work</h2>
              <span className="section-head-idx">/ 02 — Four case studies</span>
            </div>
          </div>
          <div className="sg-code">{`<SectionHead title="Selected work" index="/ 02 — Four case studies" />`}</div>
        </div>
      </section>
    </div>
  );
}

export default StyleGuide;
