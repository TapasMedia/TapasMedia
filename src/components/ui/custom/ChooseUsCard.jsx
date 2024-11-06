import React from 'react'

const ChooseUsCard = ({image, heading, content}) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <img className=" md:h-64" src={image} alt="target" />
      <div className="mt-10 grid md:h-40">
        <div className="text-yellow-500 font-[600] text-xl md:text-3xl xl:text-4xl">{heading}</div>
        <div className='xl:text-xl'>{content}</div>
      </div>
    </div>
  );
}

export default ChooseUsCard