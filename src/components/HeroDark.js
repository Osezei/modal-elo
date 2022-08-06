import React from "react";
import console from "../Images/console.jpg";
import { Fade } from "react-awesome-reveal";

const HeroDark = () => {
  return (
    <Fade duration={3000}>
      <section className="container grid grid-cols-2 gap-4">
        <div className="my-auto">
          <h3 className="text-center text-2xl font-semibold">
            All Consoles Available at the cheapest prices too
          </h3>
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-xl font-bold rounded-lg p-2 bg-[#dddce5] text-[#040410] hover:text-[] hover:bg-[#bb1d1d]"
            >
              Check Store
            </a>
          </div>
        </div>
        <div className="w-full h-screen p-6">
          <img className="w-full h-full" src={console} alt="console" />
        </div>
      </section>
    </Fade>
  );
};

export default HeroDark;
