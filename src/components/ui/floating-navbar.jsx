import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { ShineBorder } from "./shine-border";
import { ShimmerButton } from "./shimmer-button";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.075) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className="flex gap-2">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={cn(
            "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2  items-center justify-center space-x-4 transition-all duration-700 ease-in-out",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 px-4 py-4 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block lg:text-lg">{navItem.name}</span>
            </a>
          ))}

          {visible && (
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                x: visible ? 0 : 350,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className={cn(
                "flex max-w-fit right-0  top-9 inset-x-0 mx-auto  z-[500] items-center justify-center space-x-4"
              )}
            >
              <ShimmerButton
                className="shadow-2xl transition-al
                      l duration-300"
                shimmerColor={["#0ea5e9", "#FE8FB5", "#FFBE7B"]}
                shimmerSize="0.20em"
                onClick={() => (window.location.href = "/#subscribe")}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg hover:border hover:border-collapse">
                  Join Us
                </span>
              </ShimmerButton>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            x: visible
              ? 0
              : window.innerWidth >= 1024
              ? 500
              : window.innerWidth >= 768
              ? 350
              : 500,
            opacity: visible ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={cn(
            "flex max-w-fit right-0 fixed top-9 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[500] px-3 py-2  items-center justify-center space-x-4",
            className
          )}
        >
          <ShimmerButton
            className="shadow-2xl transition-al
                      l duration-300"
            shimmerColor={["#0ea5e9", "#FE8FB5", "#FFBE7B"]}
            shimmerSize="0.20em"
            onClick={() => (window.location.href = "/#subscribe")}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg hover:border hover:border-collapse">
              Join Us
            </span>
          </ShimmerButton>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
