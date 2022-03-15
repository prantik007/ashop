import React from "react";
import bannerPic1 from "../../assets/pictures/banner-carousel/1.jpg";
import bannerPic2 from "../../assets/pictures/banner-carousel/2.jpg";
import bannerPic3 from "../../assets/pictures/banner-carousel/3.jpg";
import bannerPic4 from "../../assets/pictures/banner-carousel/4.jpg";

const BannerCarousel = () => {
  return (
    <div className="carousel__container">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3500">
            <img src={bannerPic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3500">
            <img src={bannerPic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3500">
            <img src={bannerPic3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3500">
            <img src={bannerPic4} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
          style={{"bottom":"45%","filter":"invert(100%)"}}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          style={{"bottom":"45%","filter":"invert(100%)"}}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;
