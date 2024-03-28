import React from "react";
import { useParams } from "react-router-dom";
import { pumaArr } from "./Puma";

export const PumaModel = () => {
  const { id } = useParams();
  const currentModel = pumaArr.find((el) => el.id === Number(id));
  return (
    <>
      {currentModel ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{currentModel.model}</h2>
          <span>{currentModel.collection}</span>
          <span>{currentModel.price}</span>
          <img
            src={currentModel.picture}
            alt={currentModel.model}
            style={{ width: "800px", height: "600px" }}
          />
        </div>
      ) : (
        <h2>Модели не существует</h2>
      )}
    </>
  );
};
