import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Card } from "react-bootstrap";
import "./Cestas.css";

import * as pedidosActions from "../actions/pedidos";
import { useHistory } from "react-router-dom";

const testData = {
  p001: {
    name: "Abacaxi",
    image: "https://i.postimg.cc/YSd3P8tV/banana1.jpg",
  },
  p002: {
    name: "Melão",
    image: "https://i.postimg.cc/Znd0SDZq/melao.jpg",
  },
  p003: { name: "Mamão", image: "https://i.postimg.cc/x1StNcss/mamao1.jpg" },
  p004: { name: "Banana", image: "https://i.postimg.cc/YSd3P8tV/banana1.jpg" },
  p005: {
    name: "Maracujá",
    image: "https://i.postimg.cc/YSd3P8tV/banana1.jpg",
  },
  p006: { name: "Manga", image: "https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg" },
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
    image: "https://cdn.pixabay.com/photo/2015/10/02/21/41/green-969099_1280.jpg",
  },
};

const Grande = (props) => {
  const keysArray = Object.keys(testData);
  const [orderType, setOrderType] = useState(null);
  const [pediu, setPediu] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  console.log(name);
  console.log(orderType);

  const finishHanlder = () => {
    pedidosActions.postarPedido(name, phone, orderType, "grande");
    alert("Pedido registrado! Entraremos em contato em breve!");
    history.push("/");
  };

  return (
    <>
      <NavBar />
      <div className="body">
        <h3>Cesta Grande</h3>
        <h5>Pedido:</h5>
        <div className="btn-type">
          <input
            type="radio"
            id="avulso"
            value="avulso"
            name="type"
            onClick={() => {
              setOrderType("avulso");
            }}
          />
          <label for="avulso">Avulso</label>
          <br></br>
          <input
            type="radio"
            id="mensal"
            value="mensal"
            name="type"
            onClick={() => {
              setOrderType("mensal");
            }}
          />
          <label for="mensal">Mensal</label>
          <br></br>
          <div className="btn-pedir">
            <button
              disabled={orderType === null}
              onClick={() => {
                setPediu((state) => !state);
              }}
            >
              Pedir
            </button>
            {pediu && (
              <div className="form">
                <label for="name">Nome:</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <label for="phone">Whatsapp: </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <button onClick={finishHanlder}>Finalizar</button>
              </div>
            )}
          </div>
        </div>
        <h3>Produtos:</h3>
        <div className="container">
        <Card>
            <Card.Body>
              6  variedades de frutas
            </Card.Body>
            <Card.Body>
              5 variedades de legumes
            </Card.Body>
            <Card.Body>
              3 variedades de verduras
            </Card.Body>
            <Card.Body>
              1 variedade de tempero
            </Card.Body>
          </Card>
          <button type="button" onClick={()=>{history.push('/produtos')}}>Conheça toda a variedade de produtos aqui!</button>
          {/* {keysArray.map((key) => (
            <div>
              <Card>
                <Card.Body>
                  <img
                    width="40px"
                    height="40px"
                    alt="produto"
                    src={testData[key].image}
                    className="img"
                  ></img>

                  {testData[key].name}
                </Card.Body>
              </Card>
            </div>
          ))} */}
        </div>
        <div className="body"></div>
      </div>
    </>
  );
};

export default Grande;
