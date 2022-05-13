import React from "react";
import { Product } from "./Product";

const Products = ({ data }) => {
  return (
    <div className="product">
      {data.map((item) => {
        return <Product {...item} key={item.id} />;
      })}
    </div>
  );
};

export { Products };
