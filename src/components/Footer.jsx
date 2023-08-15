import React from 'react';
import logo from '../assets/images/logo copy.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twiiter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <div className="relative flex w-[100%] justify-evenly items-start mt-[-2.5rem] py-[100px] bg-darkViol -850:flex-col -850:items-center -850:gap-16">
      {/* Footer logo */}
      <div>
        <img className="cursor-pointer" src={logo} alt="" />
      </div>
      {/* Footer Redirects */}
      <div className="flex gap-[5rem] text-sm -850:flex-col -850:gap-8">
        <FooterHelper
          listHead={'Features'}
          arr={['Link Shortening', 'Branded Links', ' Analytics']}
        />
        <FooterHelper listHead={'Resources'} arr={['Blog', 'Developers', 'Support']} />
        <FooterHelper
          listHead={'Company'}
          arr={['About', 'Our Team', 'Careers', 'Contact']}
        />
      </div>
      {/* Footer icons */}
      <ul className="flex justify-center items-center gap-4">
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twiiter} alt="" />
        </li>
        <li>
          <img src={pinterest} alt="" />
        </li>
        <li>
          <img src={instagram} alt="" />
        </li>
      </ul>
      Name
      <div className="absolute bottom-2 text-white text-sm flex flex-col justify-center items-center">
        <span>
          Built with ❤ by
          <a className="underline mx-2" href="https://twitter.com/t3ch_spawn">
            Boluwatife
          </a>
        </span>

        <span>
          Challenge by
          <a
            className="underline mx-2"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
        </span>
      </div>
    </div>
  );
}

function FooterHelper(props) {
  const lists = props.arr.map((curr) => {
    return <li key={Math.random()} className="text-grey">{curr}</li>;
  });

  return (
    <ul className="flex flex-col  items-start -850:items-center gap-4">
      <li className="text-white font-bold mb-4">{props.listHead}</li>
      {lists}
    </ul>
  );
}
