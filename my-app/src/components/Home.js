import React from "react";
import background from "../img/Nathan_Profile.jpg"
import Portfolio from "./Portfolio.js"
import DataManagementPortfolio from "./DataManagementPortfolio.js";
import DataManagementIMG from "../img/Data_Management.svg";
import Profile from "./Profile.js";

function Home() {
    return(
        <div className="home-container">
            <Profile/>
            <div className='home-section-bg'>
                <Portfolio imageSrc={DataManagementIMG}/>
                {/* <CardSection/> */}

            </div>
        </div>
    );
}
export default Home;