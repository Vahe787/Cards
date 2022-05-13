import React from "react";
import Button from "../Button";

const textButtonClassNames =
  "text-white text-1xl font-bold pr-5 pl-5 pt-2 pb-3 shadow-xl text-gray-500 border transition hover:bg-blue-400";

const Header = ({ addNewCard, sortCards }) => {
  return (
    <div className="h-20 border-b-2 border-black mr-62 border-r-2">
      <div className="p-3">
        <Button
          handleClick={addNewCard}
          className={textButtonClassNames}
          text="Add Card"
        />
        <Button
          handleClick={sortCards}
          className={textButtonClassNames}
          text="Sort Cards"
        />
      </div>
    </div>
  );
};

export default Header;
