import React from 'react'
import { VelocityScroll } from './ui/scroll-based-velocity';

const ScrollPage = () => {
  return (
    <div className="bg-black flex flex-col items-center py-16">
      <div className="w-[99vw] overflow-y-hidden mb-12">
        {/* Scroll content can be added here */}
        <VelocityScroll
          default_velocity={8}
          className="font-display w-[120vw] text-7xl font-bold tracking-[-0.02em] drop-shadow-sm  md:text-7xl md:leading-[5rem]"
        >
          Velocity Scroll
        </VelocityScroll>
        <VelocityScroll
          default_velocity={-8}
          className="font-display w-[120vw] text-7xl font-bold tracking-[-0.02em] drop-shadow-sm  md:text-7xl md:leading-[5rem]"
        >
          Velocity Scroll
        </VelocityScroll>
      </div>
      <h1 className="text-white text-5xl font-bold text-center max-w-4xl mx-auto mb-8">
        No more edits just for the sake of it—let's create videos that truly
        stand out!
      </h1>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg">
        Join Now
      </button>
    </div>
  );
}

export default ScrollPage