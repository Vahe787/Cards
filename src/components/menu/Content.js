import React from "react";
import Button from "../Button";
const deleteButtonClassNames = "mb-44 mr-2 font-bold";

const Content = ({ deleteItem, cards }) => {
  return (
    <div className="flex flex-wrap justify-center h-screen h-500 overflow-auto w-10/12">
      {cards.map((el) => {
        return (
          <div key={el.id} className="p-3">
            <div className="flex border-2 border-black">
              <div className="flex justify-center items-center  w-96 h-44">
                <p className="text-3xl font-bold">{el.cardNum}</p>
              </div>
              <Button
                handleClick={() => deleteItem(el.id)}
                className={deleteButtonClassNames}
                text="X"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
