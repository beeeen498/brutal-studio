import React from "react";

import "./Companies.scss";

function Companies(){
    return(
        <div className="companies">
            <h3 className="ourClients">our clients</h3>
            
            <div className="logos">
                <div className="logosSlide">
                    <img className="companyImage" src="/assets/images/company-1.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-2.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-3.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-4.png" alt="company logo" />
                </div>

                <div className="logosSlide">
                    <img className="companyImage" src="/assets/images/company-1.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-2.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-3.png" alt="company logo" />
                    <img className="companyImage" src="/assets/images/company-4.png" alt="company logo" />
                </div>
            </div>
        </div>
    );
};

export default Companies;
