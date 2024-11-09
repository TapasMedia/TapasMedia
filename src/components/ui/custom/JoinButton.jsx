import React from "react";
import { ShimmerButton } from "../shimmer-button";

const JoinButton = ({ children }) => {
  return (
    <div className=" border border-white/[0.2] rounded-full bg-[#242424] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[500] hover:scale-105 ">
      <ShimmerButton
        onClick={() => (window.location.href = "/#subscribe")}
        className="shadow-2xl transition-all duration-300 "
        shimmerColor={["#0ea5e9", "#FE8FB5", "#FFBE7B", "#FFBE7B"]}
        shimmerSize="0.20em"
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
          {children}
        </span>
      </ShimmerButton>
    </div>
  );
};

export default JoinButton;
