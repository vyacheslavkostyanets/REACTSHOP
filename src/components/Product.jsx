import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="product__item">
      <img className="product__image" src={image} alt="" />
      <a href="/">{name}</a>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export { Product };
