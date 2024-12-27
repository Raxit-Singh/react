/* eslint-disable react/jsx-key */
import { useState } from "react";
import data from "./data.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  function handleSingleClick(getId) {
    setSelected(getId === selected ? null : getId);
  }

  function handleMultiClick(getId) {
    let cpyMultiple = [...multiple];
    const findIndexOf = cpyMultiple.indexOf(getId);
    if (findIndexOf === -1) {
      cpyMultiple.push(getId);
    } else {
      cpyMultiple.splice(findIndexOf, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div className="flex justify-center items-center text-center w-full h-screen bg-black flex-col">
      {!selected && (
        <button
          className="bg-slate-500 p-2 rounded-xl text-white "
          onClick={() => setMultiSelection(!multiSelection)}
        >
          Enable Multi Select
        </button>
      )}
      <div className="w-[950px]">
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div className="flex justify-center items-center flex-col text-slate-300 mt-3">
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className="flex flex-col text-2xl border border-slate-500 rounded-lg p-2 w-full justify-center"
              >
                <h3>{dataItem.question}+</h3>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div>{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
