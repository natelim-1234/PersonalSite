import React, { useRef, useEffect } from 'react';

function ScrollReveal({ children, delay, as: Tag = 'div', className = '', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    const t = setTimeout(() => el.classList.add('in'), 3500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      {...(delay !== undefined ? { 'data-d': delay } : {})}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default ScrollReveal;
