import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="product__item">
      <div className="product__picture">
        <img className="product__image" src={image} alt="" />
      </div>
      <a className="product__item__link" href="/">
        {name}
      </a>

      <div className="product__item__price">
        <span>{price}</span>
      </div>
      <div className="product__icons">
        <span>
          <ShoppingBagOutlined className="product__icon" />
        </span>
        <span>
          <SearchOutlined className="product__icon" />
        </span>
        <span>
          <FavoriteBorderOutlined className="product__icon" />
        </span>
      </div>
    </div>
  );
};

export { Product };
