import React from "react";

export default function Statistics(props) {
  return (
    <div className=" relative flex flex-col items-center justify-center px-8 py-[100px] bg-gray-200 w-[100%] ">
      {props.children}

      {/* typogrpahy */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-heading">Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-[100px]">
        <StatsHelper
          subHeading={"Brand Recognition"}
          para={`
        Boost your brand recognition with each click. Generic links don’t  
        mean a thing. Branded links help instil confidence in your content.
      `}
        />
        <StatsHelper
          subHeading={"Detailed Records"}
          para={`
          Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.
      `}
        />
        <StatsHelper
          subHeading={"Fully Customizable"}
          para={`
          Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.
      `}
        />
      </div>
    </div>
  );
}

function StatsHelper(props) {
  return (
    <div className="flex flex-col justify-start items-start gap-3 p-6 bg-white max-w-[300px] min-h-[200px] rounded">
      <h3 className="text-xl font-bold text-heading">{props.subHeading}</h3>
      <p className="text-font1">{props.para}</p>
    </div>
  );
}
