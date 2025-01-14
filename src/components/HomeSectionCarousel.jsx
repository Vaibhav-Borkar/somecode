import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState, useRef } from "react";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = Array.from({ length: 40 }).map((_, index) => (
    <HomeSectionCard key={index} />
  ));

  const totalItems = items.length;

  const getVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 5; // Match with responsive config
    if (width >= 720) return 3;
    return 2;
  };

  const slidePrev = () => {
    const visibleItems = getVisibleItems();
    setActiveIndex((prevIndex) => Math.max(prevIndex - visibleItems, 0));
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    const visibleItems = getVisibleItems();
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + visibleItems, totalItems - visibleItems)
    );
    carouselRef.current.slideNext();
  };

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls
          infinite={false} // Disable infinite to respect bounds
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)}
        />
        {/* Next Button */}
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
          }}
          onClick={slideNext}
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </Button>

        {/* Previous Button */}
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
          onClick={slidePrev}
        >
          <KeyboardArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
