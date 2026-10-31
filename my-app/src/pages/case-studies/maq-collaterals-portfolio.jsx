import React from 'react';
import CaseStudyMeta from '../../components/case-study-meta/CaseStudyMeta.jsx';
import ZoomableImage from '../../components/zoomable-image/ZoomableImage.jsx';
import MAQIgniteImg from '../../../public/img/MAQ_Ignite_Booth.png'
import CompanyBrochure1 from '../../../public/img/MSIgnite24_Brochure-1.png'
import CompanyBrochure2 from '../../../public/img/MSIgnite24_Brochure-2.png'

function MAQCollateralsPortfolio () {
    return (
        <div>
            <section className='section-case-study-hero'>
                <div className='page-padding-case-study-hero'>
                    <h1 className='hero'>Designing impactful company collaterals</h1>
                    <p className='intro-text'>I designed the full suite of booth collaterals for Microsoft Ignite 2024 -- from backdrop to brochure -- to attract new customers and spark meaningful conversations at the event.</p>

                    <CaseStudyMeta
                        items={[
                            { label: 'Client', value: 'MAQ Software' },
                            { label: 'Role', value: 'Visual Designer' },
                            { label: 'Event', value: 'Microsoft Ignite 2024' },
                            { label: 'Scope', value: 'Brand & Print' },
                        ]}
                    />
                </div>
            </section>

            <img className= "case-study-hero-img" src={MAQIgniteImg}></img>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>Overview</p>
                    <h1 className='section-header'>The 30-second version</h1>

                    <h2>Background</h2>
                    <p className='body-text'>Microsoft Ignite 2024 is an annual conference where companies showcase the latest Microsoft technology innovations and present their own services. I was tasked with designing collaterals for our company booth -- handouts, informational webpages, video demos, and booth backdrops -- each thoughtfully crafted to attract new customers and communicate our brand clearly.</p>

                    <h2>Services</h2>
                    <ul>
                        <li className='body-text'>Requirements gathering</li>
                        <li className='body-text'>Competitive analysis</li>
                        <li className='body-text'>Figma mockup creation</li>
                        <li className='body-text'>Visual design</li>
                        <li className='body-text'>Video editing</li>
                    </ul>

                    <h2>Deliverables</h2>
                    <ul>
                        <li className='body-text'>Company brochure</li>
                        <li className='body-text'>Event information webpage</li>
                        <li className='body-text'>Video demos</li>
                        <li className='body-text'>Booth backdrop</li>
                    </ul>

                    <h2>Outcomes</h2>
                    <p className='body-text'>The collaterals created for Microsoft Ignite 2024 were designed to captivate and engage through striking visuals and compelling content -- sparking meaningful conversations with potential customers at the booth.</p>
                </div>
            </section>

            <section className='section-inverse'>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>01 - Company Brochure</p>
                    <h1 className='section-header'>The main handout</h1>

                    <h2>The main handout</h2>
                    <p className='body-text'>The company brochure was designed to give potential customers a clear, visually engaging overview of MAQ Software's services and products. It needed to be scannable and memorable -- something attendees would hold onto after the conference.</p>
                </div>

                <div className='two-col-image-container'>
                    <ZoomableImage className="case-study-hero-img" src={CompanyBrochure1} />
                    <ZoomableImage className="case-study-hero-img" src={CompanyBrochure2} />
                </div>
            </section>

            <section>
                <div className='page-padding-case-study-text'>
                    <p className='sub-header-text'>02 - Other Deliverables</p>
                    <h1 className='section-header'>Full booth experience</h1>

                    <p className='body-text'>Beyond the brochure, I designed and produced three additional pieces to create a cohesive booth experience across every touchpoint:</p>

                    <h2>Event Information Webpage <span className='body-text'>-- Web</span></h2>
                    <p className='body-text'>A dedicated webpage for the Ignite event showcasing MAQ Software's booth details, session schedule, and key services -- accessible to attendees before and during the conference.</p>

                    <h2>Video Demos <span className='body-text'>-- Video</span></h2>
                    <p className='body-text'>Short, edited video demonstrations of key MAQ Software products and services -- designed to play on screens at the booth and capture attention across a busy conference floor.</p>

                    <h2>Booth Backdrop <span className='body-text'>-- Print</span></h2>
                    <p className='body-text'>A large-format backdrop designed to make the booth visually distinctive and clearly communicate our brand identity and core value proposition from across the room.</p>
                </div>
            </section>
        </div>
    );
}

export default MAQCollateralsPortfolio;
