import React, { useState } from "react";

const Tabs = ({ tabsContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
  }
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white h-[6
    00px] gap-10">
      <div className="flex gap-10 justify-center items-center bg-gray-400 p-3 rounded-xl cursor-pointer">
        {tabsContent &&
          tabsContent.map((tabItem, index) => (
            <div
              onClick={() => handleOnClick(index)}
              key={tabItem.label}
              className=""
            >
              <span>{tabItem.label}</span>
            </div>
          ))}
      </div>
      {tabsContent[currentIndex] && tabsContent[currentIndex].content}
    </div>
  );
};

export default Tabs;
