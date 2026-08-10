import React from "react";
import "./Footer.scss";

function Footer() {
    const year = new Date().getFullYear();

    return (

        <footer>
            <div className="footerContent">

                <div className="footerNav">
                    <div className="footerNavItems">

                        <div className="infoHeaderItems">
                            <h3 className="footerHeader">info</h3>
                            <p><a href="#home">home</a></p>
                            <p><a href="#ourStory">our story</a></p>
                            <p><a href="#ourTeam">our team</a></p>
                            <p><a href="#ourServices">our services</a></p>
                            <p><a href="#ourWork">our work</a></p>
                            <p><a href="#bookMeeting">book a meeting</a></p>
                        </div>

                        <div className="contactHeaderItems">
                            <h3 className="footerHeader">contact</h3>
                            <div className="address">
                                <p>123 BRUTAL AV.</p>
                                <p>LOREM IPSUM</p>
                                <p>3004 CA.</p>
                            </div>
                            <p>+34 123 456 789</p>
                            <p>HELLO@BRUTALISM.COM</p>
                        </div>
                    </div>
                </div>

                <div className="bottomContent">    
                    <p className="tableParagraph">Created by Ben Kedem. Inspired by <a href="https://www.freepik.com/serie/7166638" target="_blank" rel="noopener noreferrer">Freepik</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


