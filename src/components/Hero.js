import React, { useState, useEffect } from "react";
import gameLight from "../Images/j-pi.jpg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade duration={3000}>
      <section className="container grid grid-cols-2 gap-4">
        <div className="w-full h-screen p-6">
          <img className="w-full h-full" src={gameLight} alt="gamelight" />
        </div>
        <div className="my-auto">
          <h3 className="text-center text-2xl font-semibold">
            Enjoy the Best Gaming Experiences here!
          </h3>
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-xl font-bold rounded-lg p-2 bg-[#040410] text-[#dddce5] hover:text-[#040410] hover:bg-[#bb1d1d]"
            >
              Click here
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
