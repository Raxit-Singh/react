/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./menu-list";

const MenuItem = ({ items }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] =
    useState({});

  function handleDisplay(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <div className="ml-3 mb-8 w-[400px] pt-2 text-white">
        <div className="flex gap-5 items-center">
      <p className="text-xl">{items.label}</p>
      {items && items.children && items.children.length ? (
        <span className="cursor-pointer text-2xl" onClick={() => handleDisplay(items.label)}>
          {displayCurrentChildren[items.label] ? "-" : "+"}
        </span>
      ) : null}
      </div>
      {items &&
      items.children &&
      items.children.length > 0 &&
      displayCurrentChildren[items.label] ? (
        <div className="pl-5">
            <MenuList list={items.children} />
        </div>
        
      ) : null}
      
    </div>
  );
};

export default MenuItem;
