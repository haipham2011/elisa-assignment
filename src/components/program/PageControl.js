import React from "react";
import { Pagination } from "react-bootstrap";

const PageControl = ({page, bound, pageBoundCal}) => {
    const active = page;
    let items = [];
    const [min, max] = bound;
    for (let number = min; number <= max; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            pageBoundCal(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
};

export default PageControl;
