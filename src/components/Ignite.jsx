import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { brianKouhi, conceptTalk, sadhana, vedology } from "../assets/logo";
import { reel1, reel2, reel3 } from "../assets/reel";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { WordPullUp } from "./ui/word-pull-up";

const images = [reel1, reel2, reel3];

const Ignite = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({});

  const translateFirst = useTransform(scrollYProgress, [0, 1], [150, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [-100, 250]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [150, -200]);

  const translateXFirst = useTransform(scrollYProgress, [0, 1], [15, -25]);
  const translateXSecond = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [-15, 25]);

  const third = Math.floor(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "text-center flex flex-col justify-center items-center py-10 overflow-y-auto w-screen bg-neutral-950"
      )}
      ref={gridRef}
    >
      <div className="text-7xl my-10 text-center grid-flow-col container">
        <WordPullUp
          className="text-5xl md:text-7xl font-normal -translate-x-24 md:-translate-x-36 text-blue-500"
          words="Video"
        />
        <WordPullUp
          className="text-5xl md:text-7xl tracking-[10]"
          words="that ignite"
        />
        <WordPullUp
          className="text-5xl md:text-7xl tracking-[10]"
          words="your brand and spread"
        />
        <WordPullUp
          className="text-5xl md:text-7xl font-normal  text-blue-500"
          words="like Wildfire"
        />
      </div>

      <div className="text-2xl flex justify-center ">
        <div className="w-[60vw]">
          Our system brings you steady organic followers and slowly turns them
          into loyal fans!
        </div>
      </div>
      <div className=" grid grid-cols-3 items-start max-w-[90vw] xl:max-w-[70vw] mx-auto md:gap-6 xl:gap-10 py-10 md:py-32 md:px-10 ">
        <div className="grid gap-10 z-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst, x: translateXFirst }}
              key={"grid-1" + idx}
            >
              <video
                poster="https://res.cloudinary.com/dlf8srce5/video/upload/v1733053699/MaaTara_was_cursed_rjtb8p.jpg"
                className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border border-red-700 rotate-[-3deg]"
                height="400"
                width="400"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_50/v1733053699/MaaTara_was_cursed_rjtb8p.mp4"
                  type="video/mp4"
                  media="(max-width: 480px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_80/v1733053699/MaaTara_was_cursed_rjtb8p.mp4"
                  type="video/mp4"
                  media="(min-width: 481px) and (max-width: 1080px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_100/v1733053699/MaaTara_was_cursed_rjtb8p.mp4"
                  type="video/mp4"
                  media="(min-width: 1081px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/v1733053699/MaaTara_was_cursed_rjtb8p.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <video
                poster="https://res.cloudinary.com/dlf8srce5/video/upload/v1733050799/TapasMedia/iisfbjkaacgpvx45h0u6.jpg"
                className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border border-red-700"
                height="400"
                width="400"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_50/v1733050799/TapasMedia/iisfbjkaacgpvx45h0u6.mp4"
                  type="video/mp4"
                  media="(max-width: 480px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_80/v1733050799/TapasMedia/iisfbjkaacgpvx45h0u6.mp4"
                  type="video/mp4"
                  media="(min-width: 481px) and (max-width: 1080px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_100/v1733050799/TapasMedia/iisfbjkaacgpvx45h0u6.mp4"
                  type="video/mp4"
                  media="(min-width: 1081px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/v1733050799/TapasMedia/iisfbjkaacgpvx45h0u6.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 z-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird, x: translateXThird }}
              key={"grid-3" + idx}
            >
              <video
                poster="https://res.cloudinary.com/dlf8srce5/video/upload/v1733053717/Shiva_aur_Rudra_zmelhn.jpg"
                className="w-full object-cover object-left-top rounded-lg gap-10 rotate-[3deg] !m-0 !p-0 border border-red-700"
                height="400"
                width="400"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_50/v1733053717/Shiva_aur_Rudra_zmelhn.mp4"
                  type="video/mp4"
                  media="(max-width: 480px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_80/v1733053717/Shiva_aur_Rudra_zmelhn.mp4"
                  type="video/mp4"
                  media="(min-width: 481px) and (max-width: 1080px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/q_100/v1733053717/Shiva_aur_Rudra_zmelhn.mp4"
                  type="video/mp4"
                  media="(min-width: 1081px)"
                />
                <source
                  src="https://res.cloudinary.com/dlf8srce5/video/upload/v1733053717/Shiva_aur_Rudra_zmelhn.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neutral-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950"></div> */}
    </div>
  );
};

export default Ignite;
