import React from "react";
import { adidasArr } from "./Adidas";
import { useParams } from "react-router-dom";
import { Error404 } from "./Error404";

export const AdidasModel = () => {
  const params = useParams();
  const currentModel = adidasArr.find((el) => el.id === Number(params.id));

  return (
    <div style={{ textAlign: "center" }}>
      {currentModel ? (
        <>
          <h2>{currentModel.model}</h2>
          <p>{currentModel.collection}</p>
          <p>{currentModel.price}</p>
          <img src={currentModel.picture} alt={currentModel.model} />
        </>
      ) : (
        <h2>Такой модели не существует</h2>
      )}
    </div>
  );
};

//вариант 2
//   (
//     <div style={{ textAlign: "center" }}>
//       {adidasArr[Number(params.id)] ? (
//         <>
//           <h2>{adidasArr[Number(params.id)].model}</h2>
//           <p>{adidasArr[Number(params.id)].collection}</p>
//           <p>{adidasArr[Number(params.id)].price}</p>
//           <img
//             src={adidasArr[Number(params.id)].picture}
//             alt={adidasArr[Number(params.id)].model}
//           />
//         </>
//       ) : (
//         <Error404 />
//       )}
//     </div>
//   );
// };
