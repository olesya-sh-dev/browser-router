import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { NavLink } from "react-router-dom";

import { S } from "./components/pages/_styles";
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  ERROR404: "/*",
  PRICES: "/prices",
} as const;
function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
          </S.NavWrapper>

          <S.NavWrapper>
            <NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink>
            </S.NavWrapper>
          
          {/* <div>
            <a href="/page3">page3 HTML</a>
          </div> */}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.ADIDAS} />} />
            <Route path={PATH.ADIDAS} element={<Adidas />} />
            <Route path={PATH.PUMA} element={<Puma />} />
            <Route path={PATH.ABIBAS} element={<Abibas />} />
            <Route path={`/:model/:id`} element={<Model />} />
            <Route path={`/:model/:id`} element={<Model />} />
            <Route path={PATH.ERROR404} element={<Error404 />} />
            <Route path={PATH.PRICES} element={<Prices />} />

            {/* <Route path={"/page/error"} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={"/page/error"} />} /> */}
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
