import React from 'react';
import WorkSection from './sections/WorkSection';
import ScrollReveal from './ui/ScrollReveal';

function WorkPage() {
  return (
    <main className="page-main">
      <section className="section wrap" id="work">
        <ScrollReveal className="work-page-header">
          <h1 className="work-page-title">Case Studies</h1>
          <p className="work-page-sub">
            A selection of UX and product design work — click any project to read the full case study.
          </p>
        </ScrollReveal>

        <WorkSection />
      </section>
    </main>
  );
}

export default WorkPage;
