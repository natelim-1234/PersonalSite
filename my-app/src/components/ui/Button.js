import React from 'react';

function Button({ children, solid, href, onClick, className = '', ...props }) {
  const cls = `btn ${solid ? 'solid' : ''} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
