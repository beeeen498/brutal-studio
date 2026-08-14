import React from "react";

/* -------- components -------- */
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import OurTeam from "./components/OurTeam/OurTeam";
import Companies from "./components/Companies/Companies";
import OurServices from "./components/OurServices/OurServices";
import OurWork from "./components/OurWork/OurWork";
import BookMeeting from "./components/BookMeeting/BookMeeting";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <OurStory />
      <OurTeam />
      <Companies />
      <OurServices />
      <OurWork />
      <BookMeeting />
      <Footer />
    </main>
  );
};

export default App;
