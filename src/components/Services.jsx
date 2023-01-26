import React from "react";

// import data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">
          {services.title} <span className="dot"></span>
        </h2>
        <p className="section-subtitle">{services.subtitle}</p>
        {/* services items */}
        <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px]">
          {services.skills.map((item, index) => {
            return (
              <div key={index} className="p-[30px] w-full max-w-[417px] flex-col text-center lg:text-left hover:bg-white hover:shadow-2xl cursor-crosshair transition-all">
                {/* icon */}
                <div className="w-20 h-20 mb-12 mx-auto lg:mx-0" >
                  <img src={item.icon} alt="service" />
                </div>

                {/* service name */}
                <h3 className="text-2xl mb-3 font-semibold">{item.name}</h3>

                {/* services description */}
                <p className="text-grey text-lg lg:mb-16">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
