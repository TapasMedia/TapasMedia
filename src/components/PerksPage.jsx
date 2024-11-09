import React from 'react'
import { HeroParallax } from './ui/hero-parallax';
import {
  parallax1,
  parallax2,
  parallax3,
  parallax4,
  parallax5,
  parallax6,
  parallax7,
  parallax8,
  parallax9,
  parallax10,
  parallax11,
} from "../assets/parallax";

const PerksPage = () => {
  
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Fuel your growth with predictable virality, driving consistent engagement, amplifying your brand’s reach, and ensuring sustainable success across platforms.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Establish yourself as a leading authority in your market, building a strong brand presence, earning trust, and becoming the go-to resource for your audience’s needs and solutions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Build a lasting, valuable asset in the form of your personal brand, cultivating trust, credibility, and a strong reputation that drives long-term success and influence in your industry.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      ".Access a dedicated, personalized team you can rely on with just a single click, ensuring seamless collaboration and expert support tailored to your needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
 const products = [
   {
     title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
     title: "Cursor",
     // link: "https://cursor.so",
     thumbnail: parallax2,
   },
   {
     title: "Rogue",
     //  link: "https://userogue.com",
     thumbnail: parallax3,
   },

   {
     title: "Editorially",
     //  link: "https://editorially.org",
     thumbnail: parallax4,
   },
   {
     title: "Editrix AI",
     //  link: "https://editrix.ai",
     thumbnail: parallax5,
   },
   {
     title: "Pixel Perfect",
     //  link: "https://app.pixelperfect.quest",
     thumbnail: parallax6,
   },

   {
     title: "Algochurn",
     //  link: "https://algochurn.com",
     thumbnail: parallax7,
   },
   {
     title: "Aceternity UI",
     //  link: "https://ui.aceternity.com",
     thumbnail: parallax8,
   },
   {
     title: "Tailwind Master Kit",
     //  link: "https://tailwindmasterkit.com",
     thumbnail: parallax9,
   },
   {
     title: "SmartBridge",
     //  link: "https://smartbridgetech.com",
     thumbnail: parallax10,
   },
   {
     title: "Renderwork Studio",
     //  link: "https://renderwork.studio",
     thumbnail: parallax11,
   },
   {
     title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
     title: "Renderwork Studio",
     //  link: "https://renderwork.studio",
     thumbnail: parallax11,
   },
   {
     title: "Tailwind Master Kit",
     //  link: "https://tailwindmasterkit.com",
     thumbnail: parallax9,
   },

   {
     title: "Editorially",
     //  link: "https://editorially.org",
     thumbnail: parallax4,
   },
   {
     title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
     title: "Aceternity UI",
     //  link: "https://ui.aceternity.com",
     thumbnail: parallax8,
   },
   {
     title: "Rogue",
     //  link: "https://userogue.com",
     thumbnail: parallax3,
   },
   {
     title: "SmartBridge",
     //  link: "https://smartbridgetech.com",
     thumbnail: parallax10,
   },
 ];
  return (
    <div className="w-screen bg-neutral-950">
      {/* <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12 tracking-tight font-Cambay">
        PERKS OF TAPAS MEDIA
      </h1> */}
      <div className="">
        {/* <StickyScroll content={content} /> */}
        <HeroParallax products={products} />
      </div>
    </div>
  );
}

export default PerksPage