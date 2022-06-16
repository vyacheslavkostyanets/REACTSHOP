import { Checkbox } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const filtersDataServer = useSelector((state) => state.filters.filtersServer);
  console.log(filtersDataServer, "filtersDataServer");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="main-filter">
      <div className="filter__wrapper">
        <h2 className="main-filter__header">Filter by color</h2>

        <ul className="main-filter__items">
          <button onClick={() => dispatch({ type: "searchValue" })}>
            dispatch
          </button>
          {filtersDataServer.map((item) => {
            return <li key={item.id}>{item.type}</li>;
          })}

          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              red
            </a>
          </li>
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              blue
            </a>
          </li>
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              yellow
            </a>
          </li>
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              pink
            </a>
          </li>
          <h2 className="main-filter__header">Filter by type</h2>
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              1 main-filter__link main-filter__link main-filter__link
            </a>
          </li>
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              2 main-filter__link main-filter__link main-filter__link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Filters };
