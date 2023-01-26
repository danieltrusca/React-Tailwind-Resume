import React from "react";

// import portfolio data
import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <h3 className="text-2xl text-center lg:text-3xl">{portfolio.preTitle}</h3>
        <h2 className="section-title text-accent mb-16 lg:mb-[120px]">{portfolio.title}</h2>

        {/* portfolio projects grid */}
        <div className="flex flex-col  lg:flex-row gap-6">
          <div>
            <img src={portfolio.image1} alt="portfolio" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex">
              <img src={portfolio.image2} alt="portfolio" />
            </div>
            <div className="flex">
              <img src={portfolio.image3} alt="portfolio" />
            </div>
            <div className="flex">
              <img src={portfolio.image4} alt="portfolio" />
            </div>
            <div className="flex">
              <img src={portfolio.image5} alt="portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
