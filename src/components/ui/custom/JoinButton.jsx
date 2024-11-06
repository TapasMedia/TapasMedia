import React from 'react'
import { ShimmerButton } from "../shimmer-button";

const JoinButton = ({children}) => {
  return (
    <div className="p-3 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[500] px-3 py-2">
      <ShimmerButton
        className="shadow-2xl"
        shimmerColor={["#0ea5e9", "#FE8FB5", "#FFBE7B"]}
        shimmerSize="0.20em"
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {children}
        </span>
      </ShimmerButton>
    </div>
  );
}

export default JoinButton