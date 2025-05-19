import React from 'react';
import {useParams} from 'react-router-dom';
import {useRef, useEffect} from 'react';

const HorizontalScrollImage = ({image}) =>{
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
  
    useEffect(() => {
      const container = containerRef.current;
  
      const handleMouseDown = (e) => {
        isDragging.current = true;
        container.classList.add('dragging');
        startX.current = e.pageX - container.offsetLeft;
        scrollLeft.current = container.scrollLeft;
      };
  
      const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX.current;
        container.scrollLeft = scrollLeft.current - walk;
      };
  
      const handleMouseUp = () => {
        isDragging.current = false;
        container.classList.remove('dragging');
      };
  
      const handleMouseLeave = () => {
        if (isDragging.current) handleMouseUp();
      };
  
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
  


    return(
        <div ref={containerRef} className='scroll-container'>
                <img class="flow-image" alt='scrollable' src= {image}></img>
        </div>

    );
}

export default HorizontalScrollImage;