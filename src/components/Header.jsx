import React from "react";
import logo from "../assets/images/logo.svg";
import Button from "./utilities/Button";

export default function Header() {
  return (
    <div className="px-8 pt-8 flex items-center justify-between font-bold text-font1 w-[100%]">
      {/* left of header */}

      <nav className="750:hidden">
        <ul className="flex items-center gap-4">
          <li className="mr-3">
            <img src={logo} alt="" />
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>

      {/* right of header */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">Log in</span>
        <Button style={"rounded-3xl"} word={"Sign Up"} />
      </div>
    </div>
  );
}
