import React from 'react';
import Button from './utilities/Button';

export default function Boost() {
  return (
    <div className="flex flex-col gap-8 w-[100%] px-8 mt-[-2.5rem] py-[100px] justify-center items-center bg-darkBlue ">
      <h2 className="text-4xl font-bold text-white text-center">Boost your links today</h2>

      <Button style={'rounded-3xl font-bold'} word={'Get Started'} />
    </div>
  );
}
