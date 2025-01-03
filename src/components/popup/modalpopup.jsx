import React from "react";

const ModalPopup = ({ close }) => {

    function closeFunction(){
        close(false);
    }
  return (
    <div className="absolute flex flex-col w-[600px] h-[500px] border-2 justify-center items-center text-white rounded-lg">
        <div onClick={closeFunction} className="cursor-pointer relative top-[0px] left-[230px]">X</div>
      
        <div className="mt-14 mb-14 text-xl">Header</div>
      
      <div className="mb-14 text-xl">Body</div>
      <div className="text-xl">Footer</div>
    </div>
  );
};

export default ModalPopup;
