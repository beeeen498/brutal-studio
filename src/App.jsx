import React from "react";

import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import OurTeam from "./components/OurTeam/OurTeam";
import Companies from "./components/Companies/Companies";
import OurSrvices from "./components/OurServices/OurServices";
import OurWork from "./components/OurWork/OurWork";
import BookMeeting from "./components/BookMeeting/BookMeeting";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
      <div>
        <Header />
        <Hero />
        <OurStory />
        <OurTeam />
        <Companies />
        <OurSrvices />
        <OurWork />
        <BookMeeting />
        <Footer />
      </div>
    );
};

export default App;