import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import imagesData from "../api/carouselData.json";

const MainCarousel = () => {
  const data = imagesData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer"
      role="presentation"
      src={item.url}
      alt={item.alt}
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={data}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      animationType="fadeout"
      animationDuration={600}
    />
  );
};

export default MainCarousel;
