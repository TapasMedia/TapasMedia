import React from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import JoinButton from "./ui/custom/JoinButton";

const ScrollPage = () => {
  return (
    <div className="bg-neutral-950 flex flex-col items-center py-16">
      <div className="w-[99vw] overflow-y-hidden mb-12">
        {/* Scroll content can be added here */}
        <VelocityScroll
          default_velocity={9}
          className="font-display w-[120vw] text-5xl font-bold tracking-[-0.02em] drop-shadow-sm  md:text-7xl md:leading-[5rem]"
        >
          We Deliver <span className="text-blue-600">Excellence.</span> Trust.{" "}
          <span className="text-blue-600">Engagement.</span>
        </VelocityScroll>
        <VelocityScroll
          default_velocity={-8}
          className="font-display w-[120vw] text-5xl font-bold tracking-[-0.02em] drop-shadow-sm  md:text-7xl md:leading-[5rem]"
        >
          Engagement.
          <span className="text-blue-600"> We Deliver </span>
          Excellence.{" "}<span className="text-blue-600">Trust.</span>
        </VelocityScroll>
      </div>
      <h1 className="text-white text-xl md:text-5xl font-bold text-center max-w-4xl mx-auto mb-8">
        No more edits just for the sake of it let's create videos that truly
        stand out!
      </h1>
      <JoinButton>Join the Community</JoinButton>
    </div>
  );
};

export default ScrollPage;
