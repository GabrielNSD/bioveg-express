import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.css";
import NavBar from "../components/NavBar";

const Home = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="Home">
        <NavBar />
        <div className="body">
          <h2>Cestas</h2>
          <div className="main-container">
          <div className="container">
            <a href="/pequena">
              <button
                className="cesta-btn"
                /* onClick={() => {
                history.push("/pequena");
              }} */
              >
                Pequena R$55,00
              </button>
            </a>
          </div>
          <div
            className="container"
            onClick={() => {
              history.push("/media");
            }}
          >
            <button className="cesta-btn">Media R$ 85,00</button>
          </div>
          <div className="container">
            <button
              type="button"
              className="cesta-btn"
              onClick={() => {
                history.push("/grande");
              }}
            >
              Grande R$120,00
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
