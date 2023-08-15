import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo copy.svg';
import Button from './utilities/Button';

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="px-8 pt-8 flex items-center justify-between font-bold text-font1 w-[100%] -750:sticky -750:z-[20] -750:bg-white -750:py-6    -750:top-0">
      <div>
        <img className="hidden -750:block" src={logo} alt="" />
      </div>

      <div
        onClick={() => {
          setIsShown(!isShown);
        }}
        className={`hamburger ${isShown ? 'active' : 'not'}`}
      >
        <div className="ham-bar ham-bar-1"></div>
        <div className="ham-bar ham-bar-2"></div>
        <div className="ham-bar ham-bar-3"></div>
      </div>

      <div
        className={`navbar ${
          isShown ? 'active' : ''
        } px-8 flex items-center justify-between font-bold text-font1 w-[100%]`}
      >
        {/* left of header */}

        <nav>
          <ul className="flex items-center gap-4">
            <li className="mr-3">
              <img className="-750:hidden" src={logo} alt="" />
            </li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>

        {/* right of header */}
        <div className="flex items-center gap-4 -750:w-[100%]">
          <span className="cursor-pointer">Log in</span>
          <Button style={'rounded-3xl -750:w-[80%]'} word={'Sign Up'} />
        </div>
      </div>
    </div>
  );
}
