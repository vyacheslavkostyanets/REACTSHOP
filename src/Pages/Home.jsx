import React from "react";
import { Products } from "../components/Products";
import { Filters } from "../components/Filters";
import { useSelector } from "react-redux";

const Home = () => {
  const dataServer = useSelector((state) => state.products.dataServer);
  console.log(dataServer, "dataServer");
  return (
    <div className="container main">
      <div className="main__filter">
        <Filters />
      </div>
      <div className="main__products">
        <Products data={dataServer} />
      </div>
    </div>
  );
};

export default Home;
