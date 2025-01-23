import React from "react";
import ProfileIMG from "../img/Nathan_Profile.jpg"
import Portfolio from "./Portfolio.js"
import DataManagementPortfolio from "./DataManagementPortfolio.js";
import DataManagementIMG from "../img/Data_Management.svg";

function Profile() {
    return(
        <div className="section-container introduction-padding Home-bg">
            <div className="profile-container">
                <div className="introduction-container">
                    <h1 className='introduction-header'>Aspiring Designer and Data Scientist</h1>
                    <div className='introduction-text'>
                        <p>
                            I'm Nathan Limono
                        </p>
                        <p>
                            After graduating from the University of Washington with a Bachelors of Science in Informatics,
                            I am currently working as a UX designer at MAQ Software.

                        </p>
                        <p>
                        Each day, I apply my design expertise to craft information architectures and create intuitive 
                            products that prioritize delivering the best possible user experience.
                        </p>
                    </div>
                </div>
                <header className="App-header">
                    {<img className="profile-pic" src={ProfileIMG}></img>}
                </header>
            </div>
        </div>
    // <div className='Home-bg' alt='picture by Thom Milkovic'>
    // </div>
    );
};

export default Profile;