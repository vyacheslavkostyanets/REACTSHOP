import React from "react";
import { Products } from "../components/Products";
import { Filters } from "../components/Filters";
import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";

const Home = () => {
  const dataServer = useSelector((state) => state.products.dataServer);
  console.log(dataServer, "dataServer");
  return (
    <div className="wrapper">
      <div className="slider-home">
        <Slider />
      </div>
      <div className="container main">
        <div className="main__filter">
          <Filters />
        </div>
        <div className="main__products">
          <Products data={dataServer} />
        </div>
      </div>
    </div>
  );
};

export default Home;
