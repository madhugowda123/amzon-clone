import React from "react";

export default function Products({ productDetails }) {
  return (
    <div>
      <h2>
        You Searched for {productDetails.name} and Its cost is
        {productDetails.price} with the rating of {productDetails.rating}
      </h2>
    </div>
  );
}
