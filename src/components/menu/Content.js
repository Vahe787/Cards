import React from "react";
import Delete from "../../icons/delete";
import Button from "../Button";
const deleteButtonClassNames =
  "mb-44 mr-2 font-bold transition hover:text-red-600 transition hover:scale-125";

const Content = ({ deleteItem, cards }) => {
  return (
    <div className="flex flex-wrap justify-center h-screen h-500 overflow-auto w-10/12">
      {cards.map((el) => {
        return (
          <div key={el.id} className="p-3">
            <div className="flex shadow-xl text-gray-500 border transition hover:bg-blue-400 ">
              <div className="flex justify-center items-center w-96 h-44">
                <p className="text-3xl font-bold">{el.cardNum}</p>
              </div>

              <Button
                handleClick={() => deleteItem(el.id)}
                className={deleteButtonClassNames}
                icon={<Delete />}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
