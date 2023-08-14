import React from "react";
import { useEffect, useRef, useState } from "react";
import Button from "./utilities/Button";
import LinkItem from "./LinkItem";

export default function Shortner() {
  const [input, setInput] = useState({ myInp: "" });
  const [links, setLinks] = useState([]);
  const [items, setItems] = useState([]);
  const urlInp = useRef(null);

  function getInput(e) {
    const { name, value } = e.target;
    setInput({ [name]: value });
  }

  function showItems() {
    if (urlInp.current.value !== "") {
      fetch(`https://api.shrtco.de/v2/shorten?url=${input.myInp}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.ok) {
            alert("please put in a valid link");
            return;
          }
          console.log(data);
          setItems((prevItems) => {
            return [input.myInp, ...prevItems];
          });
          return setLinks((prevLinks) => {
            return [data.result.full_short_link2, ...prevLinks];
          });
        })
        .catch((error) => console.log(error));
    }

    urlInp.current.value = "";
  }

  const displayLinks = items.map((curr, i) => {
    return (
      <LinkItem
        key={Math.random()}
        link={curr}
        short={links[i]}
        onCopy={copyLink}
      />
    );
  });

  function copyLink(e) {
    const copiedLink = e.target.parentElement.querySelector(".short-link");
    copiedLink.select()
    copiedLink.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiedLink.textContent);
    alert("Copied the text: " + copiedLink.textContent);
    console.log(copiedLink.textContent);
  }

  return (
    <div className="relative flex flex-col gap-5 justify-center items-start w-[80%] max-w-[700px] top-[-150px]">
      <div className="flex w-[100%] bg-darkBlue rounded h-[100px] justify-between items-center gap-3 px-5">
        <input
          ref={urlInp}
          className="w-[70%] rounded-md h-[40px] px-4 text-sm"
          type="text"
          onChange={getInput}
          name="myInp"
          placeholder="Shorten a link here..."
        />
        <div onClick={showItems}>
          <Button style={"rounded-md"} word={"Shorten It!"} />
        </div>
      </div>

      {displayLinks}
    </div>
  );
}
