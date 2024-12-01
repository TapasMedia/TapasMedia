import React, { forwardRef, useRef } from "react";
import Particles from "./ui/particles";
import { cn } from "../lib/utils";
import DotPattern from "./ui/dot-pattern";
import { AnimatedBeam } from "./ui/animated-beam";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  brianKouhi,
  conceptTalk,
  kamalesshBarariya,
  sadhana,
  tapasMedia,
  tathastu,
  vedology,
} from "../assets/logo";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <motion.div
      initial={{ scale: 0  }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className={cn(
        "z-10 flex text-3xl size-20 sm:size-24 items-center justify-center rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
});

Circle.displayName = "Circle";

const Connections = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <AnimatePresence mode="wait">
      <div className="relative w-screen bg-slate-950">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          )}
        />{" "}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950"></div>
        <div
          className="relative flex md:h-[80vh] w-full items-center text-black justify-center overflow-hidden rounded-lg bg-background pb-10 md:shadow-xl px-3"
          ref={containerRef}
        >
          <div className="flex size-full flex-col max-w-3xl max-h-[50vh] items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                {/* <FaGoogleDrive /> */}
                <img
              loading="lazy"
                  className="rounded-full"
                  src={brianKouhi}
                  alt="brian-kouhi"
                />
              </Circle>
              <Circle ref={div5Ref}>
                <img
              loading="lazy"
                  className="rounded-full"
                  src={kamalesshBarariya}
                  alt="kamalessh-barariya"
                />
                {/* <SiGoogledocs /> */}
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <img
              loading="lazy"
                  className="rounded-full"
                  src={conceptTalk}
                  alt="concept-talk"
                />
                {/* <RiNotionFill /> */}
              </Circle>
              <Circle ref={div4Ref} className="size-24 sm:size-28">
                <img
              loading="lazy"
                  className="rounded-full"
                  src={tapasMedia}
                  alt="tapas-media"
                />
                {/* <PiOpenAiLogo /> */}
              </Circle>
              <Circle ref={div6Ref}>
                <img
              loading="lazy" className="rounded-full" src={sadhana} alt="sadhana" />
                {/* <TbBrandZapier /> */}
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <img
              loading="lazy" className="rounded-full" src={tathastu} alt="tathastu" />
                {/* <FaWhatsapp /> */}
              </Circle>
              <Circle ref={div7Ref}>
                <img
              loading="lazy" className="rounded-full" src={vedology} alt="vedology" />
                {/* <FaFacebookMessenger /> */}
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            // duration={5}
            pathWidth={4}
            curvature={-125}
            endYOffset={-15}
          />
          <AnimatedBeam
            containerRef={containerRef}
            // duration={5}
            pathWidth={4}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            // duration={5}
            pathWidth={4}
            curvature={125}
            endYOffset={15}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            // duration={5}
            pathWidth={4}
            curvature={-125}
            endYOffset={-15}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            // duration={5}
            pathWidth={4}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            // duration={5}
            pathWidth={4}
            curvature={125}
            endYOffset={15}
            reverse
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Connections;
