import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import Image from "next/image";
import rate from "../../assets/img/star_good.png";

const Rateing = ({ setrate, Val }) => {
  const ratingChanged = (newRating) => {
    setrate(newRating);
    console.log(newRating);
  };

  return (
    <div className="d-flex">
      <ReactStars
        count={5}
        value={5}
        // onChange={ratingChanged}

        size={24}
        isHalf={true}
        emptyIcon={<Image src={rate} alt="empty star" width={24} height={24} />}
        halfIcon={<Image src={rate} alt="half star" width={24} height={24} />}
        fullIcon={<Image src={rate} alt="full star" width={24} height={24} />}
        activeColor="#E67136"
      />
    </div>
  );
};

export default Rateing;
