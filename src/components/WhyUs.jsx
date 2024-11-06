import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { focus, production, business, connection, socialMedia } from "../assets/svgs";
import JoinButton from "./ui/custom/JoinButton";
import ChooseUsCard from "./ui/custom/ChooseUsCard";

const WhyUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="bg-[#F1F6F9] w-screen min-h-screen flex flex-col items-center justify-center text-black">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className=" flex flex-col min-h-screen justify-around text-center gap-10 p-10"
        >
          <h1 className="text-5xl md:text-7xl my-10 font-bold  text-center">
            Why Choose Us?
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ChooseUsCard
              image={production}
              heading="Personalized Edits"
              content="Each video is crafted with your unique style in mind"
            />
            <ChooseUsCard
              image={business}
              heading="Strategic Growth"
              content="Our content doesn’t just look good; it drives results"
            />
            <ChooseUsCard
              image={socialMedia}
              heading="Cross-Platform Impact"
              content=" From Instagram to YouTube, we help you dominate across all
                channels"
            />
            <ChooseUsCard
              image={focus}
              heading="Supporting Visual"
              content="A sleek, attention-grabbing video reel showcasing highlights of
                your best work"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <JoinButton>Book a Call</JoinButton>
            <span className="p-4 text-yellow-500 font-semibold">
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
