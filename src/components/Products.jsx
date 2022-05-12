import React from "react";
import { Product } from "./Product";
import { data } from "./Data";

const Products = () => {
  return (
    <div className="product">
      {data.map((item) => {
        return (
          <div className="product__item">
            <Product {...item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export { Products };
