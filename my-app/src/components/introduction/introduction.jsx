import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './introduction.css'
import IconLabel from '../icon-and-label/iconLabel.jsx';

const RUNWAY_PX = 80; // scroll distance the intro stays pinned before it fully fades

const EMAIL = 'natelimono@gmail.com';

function Introduction() {
    const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 2000);
    };

    // const wrapperRef = useRef(null);
    // const contentRef = useRef(null);

    // useEffect(() => {
    //     let ticking = false;

    //     const setWrapperHeight = () => {
    //         const wrapper = wrapperRef.current;
    //         const content = contentRef.current;
    //         if (!wrapper || !content) return;
    //         wrapper.style.height = `${content.offsetHeight + RUNWAY_PX}px`;
    //     }

    //     const update = () => {
    //         const wrapper = wrapperRef.current;
    //         const content = contentRef.current;
    //         if (!wrapper || !content) return;

    //         const wrapperTop = wrapper.getBoundingClientRect().top;
    //         const runway = wrapper.offsetHeight - content.offsetHeight;

    //         const scrolled = -wrapperTop;
    //         const progress = Math.min(Math.max(scrolled/runway,0),1);

    //         content.style.setProperty('--fade', progress.toFixed(3));
    //         ticking = false;
    //     }

    //     const onScroll = () => {
    //         if (!ticking) {
    //             requestAnimationFrame(update);
    //             ticking = true;
    //         }
    //     }

    //     setWrapperHeight();
    //     update();
    //     window.addEventListener('scroll', onScroll, {passive : true});
    //     window.addEventListener('resize', setWrapperHeight);
    //     return () => {
    //         window.removeEventListener('scroll', onScroll);
    //         window.removeEventListener('resize', setWrapperHeight);
    //     };
    // }, []);

    return(
        // <div className='intro-pin-wrapper' ref={wrapperRef}>
        //     <section className='introduction' ref={contentRef}>
        <section className='intro-container'>
            <div className='page-padding-hero animated'>
                <h1 className='hero'>Hello, I'm Nathan Limono!</h1>
                <p className='hero-subtext'>User Experience & User Interface Designer</p>
                <p className='intro-text'>Bridging the gap between data, design, and people by developing intuitive user interfaces.<br/>
                Have a project that needs a designer? Let's talk!</p>
                <div className='email-button-container'>
                    <button className='primary' onClick={handleCopyEmail}>
                        <IconLabel text={EMAIL}></IconLabel>
                    </button>
                    {showCopiedTooltip && (
                        <span className='email-copied-tooltip body-text' role='status'>Email copied to clipboard!</span>
                    )}
                </div>
            </div>
        </section>
        // </div>
    );
}

export default Introduction;
