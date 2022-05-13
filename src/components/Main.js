import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [cardNum, setCardNum] = useState(null);
  const [id, setId] = useState(null);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return <div></div>;
};

export default Main;
