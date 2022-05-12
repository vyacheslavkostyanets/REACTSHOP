import React from "react";
import { Products } from "../components/Products";
import { Filters } from "../components/Filters";

const Home = () => {
  return (
    <div className="container main">
      <div className="main__filter">
        <Filters />
      </div>
      <div className="main__products">
        <Products />
      </div>
    </div>
  );
};

export default Home;
