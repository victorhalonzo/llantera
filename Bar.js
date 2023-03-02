import React from "react";
import "../css/Bar.css";
import "../css/Header.css"
import "../js/menu.js";
import { Link } from "react-router-dom";

export function Bar() {

  function ocultaBar(){
    document.getElementById("check").checked=false;
  }

  function contact() {
    var today = new Date();

    var now = today.toLocaleTimeString();

    var url = "https://web.whatsapp.com/send/";
    var data = { phone: "593996930816" };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-type": "application/json" }),
      mode: "no-cors",
      cache: "default",
    })
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response))
      .then(alert("Contact sent."));
  }

  return (
    <div>
      <nav className="nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <div className="logo">
          <ul className="menu-logo">
            <li>
              <h1>Comercial Giler</h1>
            </li>
          </ul>
        </div>
        <ul className="menu">
          <li>
            <Link to="/" onClick={ocultaBar}>Inicio</Link>
          </li>
          <li>
            <Link to="/llantas" onClick={ocultaBar}>Llantas</Link>
          </li>
          <li>
            <a href="#" onClick={ocultaBar}>Servicios</a>
          </li>
          <li>
            <a href="#" onClick={ocultaBar}>Promoción</a>
          </li>

          <li>
            <a
              className="contact"
              href="https://api.whatsapp.com/send?phone=593996930816&text=Hola"
              target="_blank"
              rel="noreferrer"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
