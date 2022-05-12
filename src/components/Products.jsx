import React from "react";
import { Product } from "./Product";
import { data } from "./Data";

const Products = () => {
  return (
    <div className="product">
      {data.map((item) => {
        return <Product {...item} key={item.id} />;
      })}
    </div>
  );
};

export { Products };
