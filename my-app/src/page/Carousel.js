import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="1.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption">
            <h5>สไลด์ 1</h5>
            <p>รายละเอียดเกี่ยวกับภาพนี้</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="2.jpg" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption">
            <h5>สไลด์ 2</h5>
            <p>รายละเอียดเกี่ยวกับภาพนี้</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="3.jpg" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption">
            <h5>สไลด์ 3</h5>
            <p>รายละเอียดเกี่ยวกับภาพนี้</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
}

export default Carousel;
