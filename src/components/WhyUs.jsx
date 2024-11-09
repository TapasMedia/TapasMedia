import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { focus, production, business, connection, socialMedia } from "../assets/svgs";
import JoinButton from "./ui/custom/JoinButton";
import ChooseUsCard from "./ui/custom/ChooseUsCard";
import { community, growthImg, studio, telescope } from "../assets/images";
import GradualSpacing from "./ui/gradual-spacing";

const WhyUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="bg-neutral-950 w-screen min-h-screen flex flex-col items-center justify-center text-white ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className=" flex flex-col min-h-screen justify-around text-center pt-10 px-10"
        >
          <h1 className="text-5xl md:text-7xl my-2 font-bold  text-center">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
              text="Why Choose Us?"
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 max-w-[80vw] gap-6 container opacity-80">
            <ChooseUsCard
              image={studio}
              heading="Personalized Edits"
              content="Each video is crafted with your unique style in mind"
            />
            <ChooseUsCard
              image={growthImg}
              heading="Strategic Growth"
              content="Our content doesn’t just look good; it drives results"
            />
            <ChooseUsCard
              image={community}
              heading="Cross-Platform Impact"
              content=" From Instagram to YouTube, we help you dominate across all
                channels"
            />
            <ChooseUsCard
              image={telescope}
              heading="Supporting Visual"
              content="A sleek, attention-grabbing video reel showcasing highlights of
                your best work"
            />
          </div>
          <div className="flex flex-col py-14 md:py-0 md:mt-8 justify-center items-center">
            <JoinButton>Book a Call</JoinButton>
            <span className="p-4 text-blue-400/80 font-semibold">
              We Engage, Elevate and Convert <br /> "Get Your Free Video
              Strategy Session"
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// http://192.168.192.32:5173/

export default WhyUs;
