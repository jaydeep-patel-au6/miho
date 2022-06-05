import React, { useState } from "react";

const Pagination = ({ pageNumber, setPageApiCall }) => {
  const [selectElement, setSelectElement] = useState(0);

  // for call api page wise
  const PageApiHandler = (idx) => {
    setPageApiCall(idx + 1);
    setSelectElement(idx);
  };
  return (
    <div className="flex flex-wrap px-5">
      {pageNumber?.map((pagenumber, idx) => {
        return (
          <div key={idx} onClick={() => PageApiHandler(idx)}>
            <Cell
              number={pagenumber?.number}
              selectedcell={selectElement === idx ? true : false}
            />
          </div>
        );
      })}
    </div>
  );
};

const Cell = ({ number, selectedcell }) => {
  return (
    <div
      className={`m-3 flex items-center justify-center rounded-full h-6 w-6 ${
        selectedcell ? "bg-zinc-400 font-bold" : "bg-zinc-100 font-normal"
      }  cursor-pointer hover:bg-zinc-400 hover:font-bold`}
    >
      <div className="text-xs">{number}</div>
    </div>
  );
};

export default Pagination;
