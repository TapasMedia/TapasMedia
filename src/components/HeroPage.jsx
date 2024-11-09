import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamps";
import Particles from "./ui/particles";
import { ShimmerButton } from "./ui/shimmer-button";
import JoinButton from "./ui/custom/JoinButton";

const HeroPage = () => {
  return (
    <div id="home" className="relative w-screen h-screen">
      <Particles
        className="absolute inset-0 z-10"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl  font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl"
        >
          Unlock the Power of Video <br /> to Amplify {" "}
          <span className="font-bold text-blue-700">
          Your Brand

          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0.5, y: 130 }}
          whileInView={{ opacity: 1, y: 55 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-semibold text-sm md:text-lg  w-[90vw] sm:w-[70vw] lg:w-[50vw]  text-center"
        >
          From scroll-stopping edits to full-scale video strategies, we
          transform your{" "}
          <span className=" text-blue-500">
            raw footage into story-driven masterpieces.
          </span>
        </motion.div>
      </LampContainer>
      <div className="absolute text-white z-10 flex items-center justify-center w-full bottom-14 mb-8">
        <JoinButton>Book a Call</JoinButton>
      </div>
    </div>
  );
};

export default HeroPage;
