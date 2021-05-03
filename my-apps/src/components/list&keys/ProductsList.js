import React from "react";
import Products from "./Products";

const products = [
  {
    name: "lenova",
    pID: 123,
    price: 10000,
    rating: 3,
  },
  {
    name: "hp",
    pID: 124,
    price: 90000,
    rating: 4,
  },
  {
    name: "dell",
    pID: 125,
    price: 80000,
    rating: 4,
  },
  {
    name: "apple",
    pID: 126,
    price: 190000,
    rating: 5,
  },
  {
    name: "intel",
    pID: 127,
    price: 98000,
    rating: 4,
  },
];

export default function ProductsList() {
  const productList = products.map((product) => (
    <Products key={product.pID} productDetails={product} />
  ));
  return <div>{productList}</div>;
}
