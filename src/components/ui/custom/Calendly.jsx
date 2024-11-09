import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[320px] h-[910px] lg:h-[700px] w-full max-w-[1010px] rounded-lg"
      data-url="https://calendly.com/ap654-undead/30min?hide_gdpr_banner=1"
    ></div>
  );
};

export default CalendlyWidget;
