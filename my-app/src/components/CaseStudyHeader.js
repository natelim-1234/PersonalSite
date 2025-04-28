import React from "react";

const CaseStudyHeader = ({HeaderName, SummaryArray}) => {
    return (
        <div className="section-container-body dark-gray-background">
            <div className='section'>
                <h2 className='section-header'>{HeaderName}</h2>
                <div className='portfolio-padding'>
                    {SummaryArray.map((text, index) => (
                        <p className="header-sub-text">{text}</p>
                    ))}
                    <p className='disclaimer'>
                        To comply with my non-disclosure agreement, I have omitted confidential information such as the name of the client and sensitive project details.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CaseStudyHeader;