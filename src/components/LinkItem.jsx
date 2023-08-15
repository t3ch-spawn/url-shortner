import React from "react";
import { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

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
        <CopyToClipboard text={props.short}>
          <span
            onClick={copyLink}
            className={`px-4 py-2 text-white cursor-pointer rounded-md bg-cyan text-center`}
          >
            copy
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}
