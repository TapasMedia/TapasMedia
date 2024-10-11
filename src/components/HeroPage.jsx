import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamps";
import Particles from "./ui/particles";

const HeroPage = () => {
  return (
    <div className="relative w-screen h-screen">
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
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Unlock the Power of Video <br /> to Amplify Your Brand
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default HeroPage;
