import React from 'react';
import illustration from '../assets/images/illustration-working.svg';

export default function Hero(props) {
  return (
    <div className="px-8 relative pt-[40px] pb-[80px] flex flex-col justify-center w-[100%] gap-[80px]  items-center">
      <div className="flex justify-between w-[100%] gap-[80px] items-center -850:flex-col ">
        {/* typography */}
        <div className="text-left w-[100%] max-w-[650px] flex flex-col gap-3 -850:text-center -850:items-center">
          <h1 className="text-6xl font-bold leading-[120%] text-heading -500:text-4xl">
            More than just shorter links
          </h1>
          <p className="text-font1 font-[500] max-w-[500px]">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
        </div>

        {/* image */}
        <div className="flex justify-center">
          <img className="-850:w-[75%] -500:w-[90%]" src={illustration} alt="" />
        </div>
      </div>

      {props.children}
    </div>
  );
}
