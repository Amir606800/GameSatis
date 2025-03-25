import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

// .slice((currentPage-1)*productsPerPage,currentPage*productsPerPage)
{/* <PaginationComp
  main={wishes}
  perPage={productsPerPage}
  current={currentPage}
  setCurrent={setCurrentPage}
/>; */}
const PaginationComp = ({ main, current, setCurrent, perPage }) => {
  const numOfPages = Array.from(
    { length: Math.ceil(main.length / perPage) },
    (_, index) => index + 1
  );
  return (
    <>
      <Pagination className=" justify-content-center my-3 ">
        <Pagination.First onClick={() => setCurrent(1)} />
        <Pagination.Prev
          onClick={() => {
            if (current != 1) setCurrent((prev) => prev - 1);
          }}
        />
        {numOfPages
          ? numOfPages.map((item, index) => (
              <Pagination.Item
                onClick={() => setCurrent(item)}
                key={index}
                className={`${current === item ? "active" : ""}`}
              >
                {item}
              </Pagination.Item>
            ))
          : "Loading.."}
        <Pagination.Next
          onClick={() => {
            if (current != Math.ceil(main.length / perPage))
              setCurrent((prev) => prev + 1);
          }}
        />
        <Pagination.Last
          onClick={() => {
            setCurrent(Math.ceil(main.length / perPage));
          }}
        />
      </Pagination>
    </>
  );
};

export default PaginationComp;
