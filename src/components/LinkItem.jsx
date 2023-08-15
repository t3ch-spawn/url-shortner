import React from 'react';
import { useEffect, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function LinkItem(props) {
  function copyLink(e) {
    const copiedLinkTemp = e.target.parentElement.querySelector('.short-link');
    // copiedLink.select()
    // copiedLink.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copiedLink.textContent);
    alert('Copied the text: ' + copiedLinkTemp.textContent);
  }

  return (
    <div className="flex items-center justify-between w-[100%] gap-5 bg-white p-3 rounded text-xs overflow-hidden -850:flex-col -850:text-center">
      {/* full original link */}
      <div>
        <a className="break-all" href={`${props.link}`}>
          {props.link}
        </a>
      </div>

      <hr className="relative left-[-20px] h-[1px] border-none bg-font1 w-[150%] hidden -850:block" />

      {/* shortened link with copy btn */}
      <div className="flex items-center gap-3 -850:flex-col -850:w-[100%]">
        <p className="font-semibold short-link text-cyan">{props.short}</p>
        <CopyToClipboard text={props.short}>
          <span
            onClick={copyLink}
            className={`px-4 py-2 text-white cursor-pointer rounded-md bg-cyan text-center -850:w-[60%] -500:w-[100%]`}
          >
            copy
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}
