import React from "react";
import "../css/Header.css";

export function Header() {
  return (
    <div>
      <div className="wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="svg_css"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="path_css"
          ></path>
        </svg>
      </div>
      <section className="textos-header">
        <br />
        <br />
      
        
        <h1>COMERCIAL GILER</h1>       
        <h2>VENTA DE LLANTAS AL POR MENOR</h2>
        <h2>EN VARIAS MARCAS Y MEDIDAS</h2>
      </section>
    </div>
  );
}
