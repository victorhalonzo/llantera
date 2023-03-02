import React from "react";
import "../css/Slider.css";

export function Slider() {
  return (
    <section className="section-slides">
      <div className="contenedor-slide">
        <input type="radio" id="1" name="image-slide" hidden />
        <input type="radio" id="2" name="image-slide" hidden />
        <input type="radio" id="3" name="image-slide" hidden />
        <input type="radio" id="4" name="image-slide" hidden />

        <div className="slide">
          <div className="item-slide">
            <img src={require(`../images/img1.png`)} />
          </div>

          <div className="item-slide">
          <img src={require(`../images/img2.png`)} />
          </div>

          <div className="item-slide">
          <img src={require(`../images/img3.jpg`)} />
          </div>

          <div className="item-slide">
          <img src={require(`../images/img4.png`)} />
          </div>
        </div>

        <div className="pagination">
          <label className="pagination-item" htmlFor="1">
          <img src={require(`../images/img1.png`)} />
          </label>
          <label className="pagination-item" htmlFor="2">
          <img src={require(`../images/img2.png`)} />
          </label>
          <label className="pagination-item" htmlFor="3">
          <img src={require(`../images/img3.jpg`)} />
          </label>
          <label className="pagination-item" htmlFor="4">
          <img src={require(`../images/img4.png`)} />
          </label>
        </div>
      </div>
    </section>
  );
}
