import React from "react";
import Image from "next/image";
import slid1 from "../../assets/desk/shopping.png";

const SliderOffer = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators" style={{ marginBottom: 0 }}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            style={{
              height: "234px",
            }}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "28px !important",
              }}
            >
              20 % off on your first purchase
            </p>
            <p
              style={{
                textAlign: "center",
                width: "300px",
                fontSize: "13px !important",
              }}
            >
              Any description (lorem ipsum)Any description (lorem ipsum)Any
              description (lorem ipsum)Any description (lorem ipsum)Any
              description (lorem ipsum)
            </p>
            <button
              style={{
                backgroundColor: "#0F4392",
                width: "200px",
                border: "none",
                color: "white",
                height: "28px",
                borderRadius: "4px",
              }}
            >
              Get this offer{" "}
            </button>
            <p
              style={{
                fontSize: "13px !important",
              }}
              className="my-2"
            >
              Check offers
            </p>
          </div>
        </div>
        <div class="carousel-item"></div>
        <div class="carousel-item">
          <Image
            //  className="w-20"
            src={slid1}
            alt="Next.js Logo"
            width={50}
            height={30}
            priority
          />{" "}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SliderOffer;
