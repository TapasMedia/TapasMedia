import React from 'react'

const ChooseUsCard = ({image, heading, content}) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <img
        className="h-32 md:h-44 xl:h-64 bg-blend-multiply bg-opacity-50 rounded-lg"
        src={image}
        alt="target"
      />
      <div className="mt-10 grid md:h-40">
        <div className="text-white font-[600] pb-6 text-xl md:text-2xl xl:text-4xl">
          {heading}
        </div>
        <div className="text-gray-100 xl:text-xl">{content}</div>
      </div>
    </div>
  );
}

export default ChooseUsCard