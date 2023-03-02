import React from "react";
import dibujo_llanta from "../images/llanta-de-carro.png";
import "../css/Bulletin.css";

export function Bulletin() {
  return (
    <section className="sobre-nosotros">
      <div className="contenedor-sobre-nosotros">
        <img src={dibujo_llanta} className="App-logo" alt="logo" />
        <div className="contenido-textos">
          <h3>
            <span>1</span>Dirección
          </h3>
          <p>
            {" "}
            Atanasio Santos y 27 de junio
          </p>
          <h3>
            <span>2</span>Teléfono
          </h3>
          <p>
            0986306700
          </p>
        </div>
      </div>
    </section>
  );
}
