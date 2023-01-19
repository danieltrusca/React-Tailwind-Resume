import React from "react";

// import data
import { about } from "../data";

// import images
import Image from "../assets/img/man_about.png";

const About = () => {
  return (
    <section
      id="about"
      className="section relative lg:before:content-pattern lg:before:absolute lg:before:top-[332px] lg:before:left-[180px] lg:after:content-rope lg:after:absolute lg:after:overflow-hidden lg:after:left-0 lg:after:right-0 lg:after:top-1/2 lg:after:flex lg:after:justify-center lg:after:items-center"
    >
      <div className="container mx-auto">
        <h2 className="section-title">
          {about.title}
          <span className="dot"></span>
        </h2>
        <p className="section-subtitle lg:mb-[60px]">{about.subtitle}</p>
        {/* image */}
        <div>
          <div className="absolute w-32 h-32 bg-accent left-[38%] top-[42%] md:left-[50%] md:top-[35%] z-30 rounded-full mix-blend-hue blur-[30px]"></div>
          <img className="mx-auto z-20 relative" src={Image} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
