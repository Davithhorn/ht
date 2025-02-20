import React from 'react';
import DavidPf from "./modals/main/DavidPf";
import AboutDavid from "./modals/about-david/AboutDavid";
import MainSkill from "./modals/skill/MainSkill";
import Portfolio from "./modals/portfolio/Portfolio";



const DavidPortfolio = () => {
    return (
        <div>
            <DavidPf/>
            <div className="custom-body text-ok p-0">
                <AboutDavid/>
               <div className="mt-30px fs-24px">
                   <MainSkill/>
                   <Portfolio/>
               </div>
            </div>
        </div>
    );
};

export default DavidPortfolio;