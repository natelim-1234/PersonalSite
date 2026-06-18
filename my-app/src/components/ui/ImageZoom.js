import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

function MagnifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ImageZoom({ src, alt, className, style }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <div className="img-zoom-wrap" onClick={() => setOpen(true)}>
        <img src={src} alt={alt} className={className} style={style} />
        <div className="img-zoom-trigger" aria-hidden="true">
          <MagnifyIcon />
        </div>
      </div>

      {open && ReactDOM.createPortal(
        <div
          className="img-zoom-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view: ${alt}`}
        >
          <div className="img-zoom-modal" onClick={e => e.stopPropagation()}>
            <img src={src} alt={alt} className="img-zoom-full" />
            <button className="img-zoom-close" onClick={close} aria-label="Close">
              <CloseIcon />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default ImageZoom;
