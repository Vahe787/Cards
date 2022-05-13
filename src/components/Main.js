import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Footer from "./menu/Footer";
import Instructions from "./menu/Instructions";

const Main = () => {
  const [cardNum, setCardNum] = useState(null);
  const [id, setId] = useState(null);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addNewCard = () => {
    const newCard = {
      id: uuidv4(),
      cardNum: Math.floor(Math.random() * 1000) + 1,
    };
    setCardNum(newCard.cardNum);
    setId(newCard.id);
    setCards((items) => [...items, newCard]);
  };

  const sortCards = () => {
    const newCards = [...cards];
    newCards.sort((a, b) => a.cardNum - b.cardNum);
    setCards(newCards);
  };

  const deleteItem = (id) => {
    setCards(cards.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header addNewCard={addNewCard} sortCards={sortCards} />
      <div className="flex">
        <Content deleteItem={deleteItem} cards={cards} />
        <Instructions />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
