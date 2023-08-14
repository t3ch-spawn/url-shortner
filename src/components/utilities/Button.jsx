import React from "react";

export default function Button(props) {
  return (
    <span className={`px-4 py-2 text-white cursor-pointer ${props.style} bg-cyan text-center`}>
     {props.word}
    </span>
  );
}
