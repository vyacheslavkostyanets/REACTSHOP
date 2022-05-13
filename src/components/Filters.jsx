import { Checkbox } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { ControlledCheckbox } from "./ControlledCheckbox";

const Filters = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
    <div className="main-filter">
      <div className="filter__wrapper">
        <h2 className="main-filter__header">Filter by color</h2>
        <ul className="main-filter__items">
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
        </ul>
      </div>
      <div className="filter__wrapper">
        <h2 className="main-filter__header">Filter by type</h2>
        <ul className="main-filter__items">
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
          <li className="main-filter__item">
            <Checkbox />
            <a href="" className="main-filter__link">
              3 main-filter__linkmain-filter__link main-filter__link
            </a>
          </li>
          <li className="main-filter__item" onClick={handleChange}>
            <ControlledCheckbox checked={checked} />
            <span>redd</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Filters };
