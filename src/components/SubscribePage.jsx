import React from "react";
import CalendlyWidget from "./ui/custom/Calendly";

const SubscribePage = () => {


  return (
    <div
      id="subscribe"
      className="flex flex-col lg:flex-row min-h-screen w-screen p-8 items-center justify-center bg-neutral-950"
    >
      <CalendlyWidget />
    </div>
  );
};

export default SubscribePage;
