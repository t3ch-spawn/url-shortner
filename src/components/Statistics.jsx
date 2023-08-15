import React from 'react';
import brand from '../assets/images/icon-brand-recognition.svg';
import records from '../assets/images/icon-detailed-records.svg';
import customisable from '../assets/images/icon-fully-customizable.svg';

export default function Statistics(props) {
  return (
    <div className=" relative flex flex-col items-center justify-center px-8 py-[100px] bg-gray-200 w-[100%] ">
      {props.children}

      {/* typogrpahy */}
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-bold text-heading">Advanced Statistics</h2>
        <p className="text-font1 font-[500] max-w-[500px]">
          Track how your links are performing across the web with our advanced statistics
          dashboard.
        </p>
      </div>

      <div className="stat-boxes relative flex -850:flex-col -850:flex -850:gap-[5rem] items-center justify-center gap-8 mt-[100px]">
        <div className="stats-bar absolute w-[100%] h-2 bg-cyan -850:flex -850:h-[100%] -850:w-2"></div>
        <StatsHelper
          subHeading={'Brand Recognition'}
          para={`
        Boost your brand recognition with each click. Generic links don’t  
        mean a thing. Branded links help instil confidence in your content.
      `}
          img={brand}
          style={'mt-0'}
        />
        <StatsHelper
          subHeading={'Detailed Records'}
          para={`
          Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.
      `}
          img={records}
          style={'mt-[50px]'}
        />
        <StatsHelper
          subHeading={'Fully Customizable'}
          para={`
          Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.
      `}
          img={customisable}
          style={'mt-[100px] col-span-full'}
        />
      </div>
    </div>
  );
}

function StatsHelper(props) {
  return (
    <div
      className={`${props.style} relative flex flex-col justify-start items-start gap-3 p-6 pt-16 bg-white max-w-[300px] min-h-[200px] rounded -850:text-center -850:items-center`}
    >
      <img
        className="absolute bg-darkBlue top-[-40px] left-11 -850:left-[50%] -850:translate-x-[-50%] p-5 rounded-[50%]"
        src={props.img}
        alt=""
      />
      <h3 className="text-xl font-bold text-heading">{props.subHeading}</h3>
      <p className="text-font1">{props.para}</p>
    </div>
  );
}
