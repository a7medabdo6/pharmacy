import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CategorySliderCard from "./CategorySliderCard";

const SliderCategory = ({ categories }) => {
  const [sliderCategory] = useKeenSlider({
    mode: "free",
    slides: {
      perView: 3.5,
      spacing: 15,
    },
  });

  return (
    <div
      ref={sliderCategory}
      className="keen-slider"
      style={{
        height: "165px",
        boxShadow: "none",
      }}
    >
      {categories?.map((item, index) => (
        <div
          className={`keen-slider__slide number-slide${index + 1} fs-6`}
          style={{ backgroundColor: "transparent" }}
        >
          <CategorySliderCard key={index} item={item} />
        </div>
      ))}
    </div>
  );
};

export default SliderCategory;
