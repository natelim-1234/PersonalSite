import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from '../components/introduction/introduction.jsx';
import CaseStudyGrid from '../components/case-study-grid/caseStudyGrid.jsx'

function Home () {
    return (
        <div>
            <Introduction/>
            <CaseStudyGrid/>
        </div>

    );
}


export default Home;