import React from "react";
import background from "../images/background.jpg"; // your custom background

const BackgroundLayer = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    />
  );
};

export default BackgroundLayer;