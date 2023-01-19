import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
