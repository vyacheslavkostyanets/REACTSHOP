import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div>
      <img src={image} alt="" />
      <a href="/">{name}</a>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export { Product };
