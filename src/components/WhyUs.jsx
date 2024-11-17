import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { focus, production, business, connection, socialMedia } from "../assets/svgs";
import JoinButton from "./ui/custom/JoinButton";
import ChooseUsCard from "./ui/custom/ChooseUsCard";
import {
  community,
  growthImg,
  studio,
  telescope,
  bussinessSuccess,
  expertEnhancing,
  flatLayStatistics,
  handShaking,
  greatJob,
} from "../assets/images";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimatedTestimonials } from "./ui/animated-testimonials";


 const testimonials = [
   {
     quote:
       "We craft each project with meticulous attention to detail, tailoring edits to reflect your unique style and brand identity. Our customized approach ensures that the final product resonates with your audience and enhances your brand’s storytelling.",
     name: "Personalized Edits",
     //  designation: "CTO at InnovateSphere",
     src: expertEnhancing,
   },
   {
     quote:
       "We prioritize a deep understanding of your brand’s vision, objectives, and target audience to deliver tailored, high-impact content. Our team collaborates closely with you at each stage, ensuring that every detail aligns with your brand and exceeds expectations",
     name: "Client-Centric Approach",
     //  designation: "Product Manager at TechFlow",
     src: bussinessSuccess,
   },
   {
     quote:
       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.We are dedicated to driving sustainable growth by creating media solutions that not only meet immediate objectives but also support your long-term vision, helping to expand your brand's reach and impact.",
     name: "Strategic Growth",
     //  designation: "Operations Director at CloudScale",
     src: flatLayStatistics,
   },
   {
     quote:
       "Our team enhances your content with carefully curated visuals that amplify your message and engage your audience. From compelling graphics to seamless animations, we ensure that every visual element is designed to support and elevate your story, adding depth and professionalism to your brand’s narrative.",
     name: "Supporting Visuals",
     //  designation: "Engineering Lead at DataPro",
     src: handShaking,
   },
   {
     quote:
       "We create versatile content optimized for multiple platforms, ensuring your message reaches and resonates with audiences wherever they are. By adapting visuals, formats, and messaging for each platform, we help maximize your brand’s visibility, engagement, and impact across digital channels.",
     name: "Cross-Platform Impact",
     //  designation: "VP of Technology at FutureNet",
     src: greatJob,
   },
 ];

const WhyUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="bg-neutral-950 w-screen min-h-screen flex flex-col items-center justify-center text-white " id="about">
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
          {/* <div className="grid grid-cols-1 md:grid-cols-4 max-w-[80vw] gap-6 container opacity-80">
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
          </div> */}

          <AnimatedTestimonials testimonials={testimonials} />

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
