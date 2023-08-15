import React from 'react';
import { useEffect, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function LinkItem(props) {
  function copyLink(e) {
    const copiedLinkTemp = e.target.parentElement.querySelector('.short-link');
    alert('Copied the text: ' + copiedLinkTemp.textContent);
    const letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    let iteration = 0;
    if (e.target.innerText != 'copied!') {
      e.target.classList.add('active');
      const phraser = setInterval(() => {
        iteration += 1 / 3;
        e.target.innerText = e.target.dataset.value
          .split('')
          .map((curr, i) => {
            if (i < iteration) {
              return e.target.dataset.value[i];
            }

            return letters[Math.floor(Math.random() * 26)].toLowerCase();
          })
          .join('');

        if (iteration > e.target.dataset.value.length) {
          clearInterval(phraser);
        }
      }, 30);
    }
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
            data-value="copied!"
            onClick={(e) => {
              copyLink(e);
              props.onCopy();
            }}
            className={`copy-btn ${
              props.isCopied ? 'active' : ''
            } px-4 py-2 text-white cursor-pointer rounded-md bg-cyan text-center -850:w-[60%] -500:w-[100%]`}
          >
            {props.isCopied ? 'copied!' : 'copy'}
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}
