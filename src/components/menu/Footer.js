import React from "react";
import { Linkedin, Telegram, Facebook } from "../../icons";

const Footer = () => {
  return (
    <div className="flex h-20 border-t-2 font-bold border-gray-100 mr-62 border-r-2">
      <p className="font-serif ml-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-900">
        Powered by <p className="font-serif">Vahe Ghazaryan</p> 13/05/2022
      </p>
      <Linkedin />
      <Telegram />
      <Facebook />
    </div>
  );
};

export default Footer;
