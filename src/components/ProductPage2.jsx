import React, { useEffect, useState } from "react";

function ProductPage2() {
  const [state, setState] = useState([]);

  const getApiData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(function () {
    getApiData();
  });

  return (
    <div className="row">
      {state.map((ele) => (
        <div className="col-4" key={ele.id}>
          <h1>{ele.title}</h1>
          <img src={ele.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ProductPage2;
