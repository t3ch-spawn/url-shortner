import React, { useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo copy.svg';
import Button from './utilities/Button';

export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const ham = useRef(null);
  const [not, setNot] = useState('');

  function handleMenu() {
    setIsShown(!isShown);
    if (ham.current.classList.contains('active')) {
      setNot('not');
    } else {
      setNot('');
    }
  }

  return (
    <>
      {/* overlay */}
      {isShown ? (
        <div
          className="fixed bg-overlay top-0 left-0 h-[100%] w-[100%] z-[10]"
          onClick={handleMenu}
        ></div>
      ) : (
        ''
      )}

      <div className="relative shadow-md px-8 pt-8 flex items-center justify-between font-bold text-font1 w-[100%] -750:sticky -750:z-[25] -750:bg-white py-6 -750:top-0">
        <div>
          <img className="hidden -750:block" src={logo} alt="" />
        </div>

        <div
          ref={ham}
          onClick={handleMenu}
          className={`hamburger ${isShown ? 'active' : ''} ${not}`}
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
    </>
  );
}
