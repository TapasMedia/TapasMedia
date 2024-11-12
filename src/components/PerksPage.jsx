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
  
 const products = [
   {
    //  title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
    //  title: "Cursor",
     // link: "https://cursor.so",
     thumbnail: parallax2,
   },
   {
    //  title: "Rogue",
     //  link: "https://userogue.com",
     thumbnail: parallax3,
   },

   {
    //  title: "Editorially",
     //  link: "https://editorially.org",
     thumbnail: parallax4,
   },
   {
    //  title: "Editrix AI",
     //  link: "https://editrix.ai",
     thumbnail: parallax5,
   },
   {
    //  title: "Pixel Perfect",
     //  link: "https://app.pixelperfect.quest",
     thumbnail: parallax6,
   },

   {
    //  title: "Algochurn",
     //  link: "https://algochurn.com",
     thumbnail: parallax7,
   },
   {
    //  title: "Aceternity UI",
     //  link: "https://ui.aceternity.com",
     thumbnail: parallax8,
   },
   {
    //  title: "Tailwind Master Kit",
     //  link: "https://tailwindmasterkit.com",
     thumbnail: parallax9,
   },
   {
    //  title: "SmartBridge",
     //  link: "https://smartbridgetech.com",
     thumbnail: parallax10,
   },
   {
    //  title: "Renderwork Studio",
      // link: "https://renderwork.studio",
     thumbnail: parallax11,
   },
   {
    //  title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
    //  title: "Renderwork Studio",
     //  link: "https://renderwork.studio",
     thumbnail: parallax11,
   },
   {
    //  title: "Tailwind Master Kit",
     //  link: "https://tailwindmasterkit.com",
     thumbnail: parallax9,
   },

   {
    //  title: "Editorially",
     //  link: "https://editorially.org",
     thumbnail: parallax4,
   },
   {
    //  title: "Virality",
     // link: "https://gomoonbeam.com",
     thumbnail: parallax1,
   },
   {
    //  title: "Aceternity UI",
     //  link: "https://ui.aceternity.com",
     thumbnail: parallax8,
   },
   {
    //  title: "Rogue",
     //  link: "https://userogue.com",
     thumbnail: parallax3,
   },
   {
    //  title: "SmartBridge",
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
        <HeroParallax products={products} />
      </div>
    </div>
  );
}

export default PerksPage