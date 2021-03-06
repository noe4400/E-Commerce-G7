import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./FilterGroup.css";
import { setFilters } from "../../actions/ProductActions";
const FilterGroup = (props) => {
  const dispatch = useDispatch();
  const { title, items, type, active, disabledGenre } = props;

  const toggleHandler = (e) => {
    e.preventDefault();
    if (!disabledGenre) {
      dispatch(setFilters({ name: type, value: e.target.id }));
    }
  };

  return (
    <>
      <h4 className="mt-5 mb-3">{title}</h4>
      <ListGroup as="ul" onClick={toggleHandler} className="disabled">
        <ListGroup.Item
          key="all"
          as="li"
          id="all"
          className={`${active === "all" ? "active" : ""} ${
            disabledGenre ? "disabled" : ""
          }`}
        >
          Todos
        </ListGroup.Item>
        {items?.map((item, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            id={item}
            className={`${active === item ? "active" : ""} ${
              disabledGenre ? "disabled" : ""
            } `}
          >
            {item[0].toUpperCase() + item.substring(1)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default FilterGroup;
