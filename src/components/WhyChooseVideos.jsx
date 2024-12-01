import React from "react";
import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { beats, cinema, dna, motionImg, physics, youtubeLogo } from "../assets/gif";
import { arjun, brianKouhi, conceptTalk, kamalesshBarariya, sadhana, tathastu,seo1,seo2,seo3 } from "../assets/logo";

const WhyChooseVideos = () => {
  return (
    <div className="px-8 py-12 w-screen bg-neutral-950 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-center mb-12">
        WHY <span className="font-medium text-6xl text-blue-500">Choose</span>{" "}
        Videos{" "}
        <span className="text-blue-500">?</span> 
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default WhyChooseVideos;

const SkeletonOne = () => {

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <video
        className="rounded-xl p-1"
        width="320"
        height="240"
        autoPlay
        muted
        loop
      >
        <source src={cinema} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <video
        className="rounded-xl p-1"
        width="320"
        height="240"
        autoPlay
        muted
        loop
      >
        <source src={beats} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};
const SkeletonThree = () => {
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <video
        className="rounded-xl p-1"
        width="320"
        height="240"
        autoPlay
        muted
        loop
      >
        <source src={motionImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
              loading="lazy"
          src={seo3}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full bg-cover h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          SEO helps videos rank higher in search results, boosting visibility
          and views.
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Discoverability
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
              loading="lazy"
          src={seo1 }
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 "
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Optimized content encourages longer viewing and improves rankings.
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Engagement
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
              loading="lazy"
          src={seo2}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          SEO-optimized videos drive traffic and enhance overall marketing
          strategies.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Marketing Synergy
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
              loading="lazy"
          src={arjun}
          alt="Tapas Media"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          I create engaging media content that amplifies your brand's voice and captures attention.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Let’s work together to take it to the next level.
        </p>
        <img
              loading="lazy"
          src={conceptTalk}
          alt="conceptTalk"
          className="h-10 w-10 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Video that speak more than text",
    description: (
      <span className="text-sm">
        Compared to text, video content grabs attention up to 10 times more
        effectively, making it the ideal choice for quickly engaging audiences
        and boosting retention
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Make Information Memorable with Video",
    description: (
      <span className="text-sm">
        Using visual content, especially in videos, boosts memory retention by
        making information more vivid and relatable, which helps people recall
        details long after viewing
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Unmatched Engagement",
    description: (
      <span className="text-sm">
        Videos are uniquely effective at capturing and holding viewers'
        attention, engaging audiences far more deeply than other media formats
        by combining visuals, sound, and motion to create a compelling
        experience.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "SEO Benefits",
    description: (
      <span className="text-sm">
        Videos increase the amount of time visitors spend on your website, which
        helps improve your site's SEO ranking. Moreover, platforms like YouTube
        are also search engines that can help new audiences discover your brand.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Videos can reach a wider audience by offering easily consumable content
        across devices like smartphones, tablets, and computers, regardless of
        reading ability or language proficiency.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
