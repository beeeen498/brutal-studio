import React from "react";
import "./Socials.scss"; 

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; 
import { FaWhatsappSquare } from "react-icons/fa";

function Socials() {
    return (
        <div className="socials"> 
            <FaInstagramSquare className="logo" size={30}/>
            <FaFacebookSquare className="logo" size={30}/>
            <FaSquareXTwitter className="logo" size={30}/>
            <FaWhatsappSquare className="logo" size={30}/>
        </div>
    );
};

export default Socials;
