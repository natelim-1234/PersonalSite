import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll position to top (0, 0)
  }, [location]);

  return null; // No UI needed, just functionality
};

export default ScrollToTop;