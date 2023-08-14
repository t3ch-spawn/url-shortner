import React from "react";

export default function LinkItem(props) {
  return (
    <div className="flex items-center justify-between w-[100%] gap-5 bg-white p-3 rounded text-xs">
      <div>
        <a className="break-all" href={`${props.link}`}>
          {props.link}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-semibold short-link text-cyan">{props.short}</p>
        <span onClick={props.onCopy}
          className={`px-4 py-2 text-white cursor-pointer rounded-md bg-cyan text-center`}
        >
          copy
        </span>
      </div>
    </div>
  );
}
