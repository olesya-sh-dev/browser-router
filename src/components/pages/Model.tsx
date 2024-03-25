import React from "react";
import { adidasArr } from "./Adidas";
import { useParams } from "react-router-dom";

export const Model = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>{adidasArr[Number(params.id)].model}</h2>
      <p>{adidasArr[Number(params.id)].collection}</p>
      <p>{adidasArr[Number(params.id)].price}</p>
      <img
        src={adidasArr[Number(params.id)].picture}
        alt={adidasArr[Number(params.id)].model}
      />
    </div>
  );
};
