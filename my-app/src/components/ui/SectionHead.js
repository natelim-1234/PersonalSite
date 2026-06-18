import React from 'react';
import ScrollReveal from './ScrollReveal';

function SectionHead({ title, index }) {
  return (
    <div className="section-head">
      <ScrollReveal as="h2">{title}</ScrollReveal>
      {index && <span className="section-head-idx">{index}</span>}
    </div>
  );
}

export default SectionHead;
