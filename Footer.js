import React from "react";
import "../css/Footer.css";

export function Footer() {
  return (
    <footer>
      <div id="contacto" className="contenedor-footer">
        <div className="content-foo">
          <h4>Phone</h4>
          <p>0986306700</p>
        </div>
        <div className="content-foo">
          <h4>Email</h4>
          <p>comercialgiler@mail.com</p>
        </div>
        <div className="content-foo-location">
          <h4>Location</h4>
          <p>Atanasio Santos y 27 de junio</p>
        </div>
      </div>
      <h2 className="titulo-final">&copy; 2023 | comercialgiler.com</h2>
    </footer>
  );
}
