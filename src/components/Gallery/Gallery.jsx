import React from "react";
import { galleries } from "../../constants/enums";
import dubai from "../../assets/images/dubai.jpg";
import usa from "../../assets/images/usa.jpeg";
import australia from "../../assets/images/australia.jpeg";
import "./Gallery.css";

function Gallery() {
  const images = {
    0: dubai,
    1: usa,
    2: australia,
  };

  return (
    <section>
      <h2>Photo Galleries</h2>
      <div className="gallery">
        {galleries.map(({ src, alt }, i) => (
          <div className="img-container" key={i}>
            <img src={images[i]} alt={alt} />
            <p>{src.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
