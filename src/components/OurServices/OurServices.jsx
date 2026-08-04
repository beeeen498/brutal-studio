import React, { useState } from "react";

import "./OurServices";
import ourServices from "./data/ourServices";

function OurServices() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    if (ourServices && ourServices.length > 0) {
        return (
            <section className="ourServices" id="ourServices">
                <div className="servicesAccordion">
                    {ourServices.map(ourServicesItem => (
                        <div className="item" key={ourServicesItem.id}>
                            <div onClick={() => handleSingleSelection(ourServicesItem.id)} className="title">
                                <h3 className="serviceName">{ourServicesItem.service}</h3>
                            </div>
                            <div className={`serviceDescription ${selected === ourServicesItem.id ? 'open' : 'closed'}`}>
                                {ourServicesItem.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
    return null;
}

export default OurServices;
