import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Button from './utilities/Button';
import LinkItem from './LinkItem';

export default function Shortner() {
  const [input, setInput] = useState({ myInp: '' });
  const [links, setLinks] = useState([]);
  const [items, setItems] = useState([]);
  const [myWord, setMyWord] = useState('Shorten It!');
  const urlInp = useRef(null);

  function getInput(e) {
    const { name, value } = e.target;
    setInput({ [name]: value });
  }

  function showItems() {
    if (urlInp.current.value !== '') {
      setMyWord('Loading...');

      fetch(`https://api.shrtco.de/v2/shorten?url=${input.myInp}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.ok) {
            alert('please put in a valid link');
            setMyWord('Shorten It!');

            return;
          }
          setMyWord('Shorten It!');
          setItems((prevItems) => {
            return [{ inp: input.myInp, isCopied: false }, ...prevItems];
          });
          console.log(items);
          return setLinks((prevLinks) => {
            return [data.result.full_short_link2, ...prevLinks];
          });
        })
        .catch((error) => console.log(error));
    }

    urlInp.current.value = '';
  }

  const displayLinks = items.map((curr, i) => {
    return (
      <LinkItem
        key={Math.random()}
        link={curr.inp}
        short={links[i]}
        isCopied={curr.isCopied}
        onCopy={() => {
          const found = links.find((item, idx) => {
            return idx == i;
          });
          setItems((prevItems) => {
            let tempItems = prevItems;
            tempItems[links.indexOf(found)].isCopied = true;
            return tempItems;
          });
        }}
      />
    );
  });

  return (
    <div className="relative flex flex-col gap-5 justify-center items-start w-[80%] -500:w-[100%] max-w-[700px] top-[-150px]">
      <div className="flex w-[100%] bg-darkBlue rounded min-h-[100px] justify-between items-center gap-3  px-5 -850:flex-col -850:items-center -850:justify-center -850:gap-6 -850:py-5 ">
        <input
          ref={urlInp}
          className="w-[70%] rounded-md h-[40px] px-4 text-sm -850:w-[100%]"
          type="text"
          onChange={getInput}
          name="myInp"
          placeholder="Shorten a link here..."
        />
        <div className="-850:flex -850:w-[100%] -850:justify-center" onClick={showItems}>
          <Button
            style={'rounded-md -850:flex -850:w-[60%] -850:justify-center -500:w-[100%]'}
            word={myWord}
          />
        </div>
      </div>

      {displayLinks}
    </div>
  );
}
