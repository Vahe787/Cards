import React from "react";
import Button from "../Button";

const textButtonClassNames =
  " text-1xl font-bold pr-5 pl-5 pt-2 pb-3 shadow-xl text-gray-500 border transition hover:bg-blue-400";

const Header = ({ addNewCard, sortCards }) => {
  return (
    <div className="h-20 border-b-2 border-gray-100 mr-62 border-r-2">
      <div className="flex justify-center p-3">
        <div>
          <Button
            handleClick={addNewCard}
            className={textButtonClassNames}
            text="Add Card"
          />
        </div>
        <div className="ml-10">
          <Button
            handleClick={sortCards}
            className={textButtonClassNames}
            text="Sort Cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
