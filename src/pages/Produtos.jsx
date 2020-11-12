import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FlexApi from "twilio/lib/rest/FlexApi";
import NavBar from "../components/NavBar";

import "./Produtos.css";

const testData = {
  p001: {
    name: "Abacaxi",
    image: "https://i.postimg.cc/1tNqKKXD/abacaxi.jpg",
  },
  p002: {
    name: "Melão",
    image: "https://i.postimg.cc/Znd0SDZq/melao.jpg",
  },
  p003: { name: "Mamão", image: "https://i.postimg.cc/x1StNcss/mamao1.jpg" },
  p004: { name: "Banana", image: "https://i.postimg.cc/YSd3P8tV/banana1.jpg" },
  p005: {
    name: "Maracujá",
    image: "https://i.postimg.cc/QMC5FDr4/maracuja.jpg",
  },
  p006: {
    name: "Manga",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg",
  },
  p007: { name: "Cenoura", image: "https://i.postimg.cc/vH8mYzyX/cenoura.jpg" },
  p008: {
    name: "Beringela",
    image:
      "https://cdn.pixabay.com/photo/2013/03/02/01/25/aubergine-89044_1280.jpg",
  },
  p009: {
    name: "Batata Doce",
    image: "https://i.postimg.cc/MHp8S9BQ/batata-doce.jpg",
  },
  p010: {
    name: "Batata Inglesa",
    image: "https://i.postimg.cc/wMq9B6C3/batata.jpg",
  },
  p011: { name: "Tomate", image: "https://i.postimg.cc/DZWqMTjJ/tomate.jpg" },
  p012: {
    name: "Alface",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/22/01/lettuce-1239155_1280.jpg",
  },
  p013: {
    name: "Cheiro Verde",
    image: "https://i.postimg.cc/Z5T6h3sh/cheiro-verde.jpg",
  },
  p014: {
    name: "Alecrim",
    image: "https://i.postimg.cc/Z5T6h3sh/cheiro-verde.jpg",
  },
  p015: {
    name: "Espinafre",
    image: "https://i.postimg.cc/Z5T6h3sh/cheiro-verde.jpg",
  },
  p016: {
    name: "Rúcula",
    image:
      "https://cdn.pixabay.com/photo/2015/10/02/21/41/green-969099_1280.jpg",
  },
};

const Produtos = (props) => {
  const history = useHistory();
  const keysArray = Object.keys(testData);
  return (
    <>
      <NavBar />
      <h3>Trabalhamos com:</h3>
      <div className="produtos">
        <Carousel>
          {keysArray.map((key) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={testData[key].image}
                alt={testData[key].name}
              />
              <Carousel.Caption>
                <h3>{testData[key].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <button
            type="button"
            className="button"
            onClick={() => {
              history.push("/");
            }}
          >
            PEÇA JÁ
          </button>
        </div>
      </div>
    </>
  );
};

export default Produtos;
