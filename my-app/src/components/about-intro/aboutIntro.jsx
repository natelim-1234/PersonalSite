import React from 'react';
import './aboutIntro.css';
import NathanProfileImg from '../../../public/img/Nathan_Profile.jpg';

function AboutIntro() {
    return (
        <section className='about-intro'>
            <div className='about-intro-text'>
                <p className='sub-header-text'>About me</p>
                <h1 className='section-header'>Hello, I'm Nathan Limono</h1>

                <p className='body-text'>I graduated from the University of Washington with a BS in Informatics, and now I work as a UX Designer at MAQ Software -- working at the intersection of data, design, and people.</p>

                <p className='body-text'>My work spans information architecture, interaction design, and visual design. I believe great products come from deeply understanding the people who use them, and from removing everything that doesn't earn its place.</p>

                <p className='body-text'>Each day I apply design expertise to craft clear information architectures and intuitive products -- whether that means leading a redesign that cuts clicks by 30% or designing an app that helps hundreds of people plan their conference schedule.</p>

                <p className='body-text'>Through my work, I want to help create useful, engaging, and intuitive solutions that make people's lives easier.</p>
            </div>

            <div className='about-intro-image'>
                <img src={NathanProfileImg} alt="Nathan Limono" />
            </div>
        </section>
    );
}

export default AboutIntro;
