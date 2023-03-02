import React from "react";

export function Header() {
  return (
    <header>
      <nav class="nav">
        <div class="logo"></div>
        <ul class="menu">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#about-us">Acerca de</a>
          </li>
          <li>
            <a href="#portafolio">Portafolio</a>
          </li>
          <li>
            <a href="#services">Servicio</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <section class="textos-header">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>COMERCIAL GILER</h1>
        <br />
        <h2>VENTA DE LLANTAS AL POR MENOR</h2>
        <h2>EN VARIAS MARCAS Y MEDIDAS</h2>
      </section>
      <div className="wave" >
        <svg className="svg_css"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path className="path_css"
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            
          ></path>
        </svg>
      </div>
    </header>
  );
}
