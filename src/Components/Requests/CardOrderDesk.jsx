import React from "react";

const CardOrderDesk = () => {
  return (
    <div
      className="w-100 d-flex justify-content-start align-items-center mt-3 pe-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "400px",
        position: "relative",
      }}
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        style={{
          fontSize: 15,
          color: "red",
          marginRight: "20px",
          top: "13px",
          right: "-5px",
          position: "absolute",
        }}
      />

      <Row>
        <Col md={6}>
          <div
            className="m-3"
            style={{
              borderRadius: "5px",
              display: "flex",
              width: "165px",
              height: "100%",
              justifyContent: "center",
              border: "1px solid #C9CCCF",
            }}
          >
            <Image
              src={telfast}
              alt="Next.js Logo"
              width={100}
              height={116}
              style={{ width: "100%", height: "100%" }}
              priority
              className=""
            />
          </div>
        </Col>
        <Col xs={6}>
          <div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px", fontWeight: "bold" }} className="">
                Telfast 180mg
              </h5>
            </div>

            <p
              className={styles.heddin}
              style={{ color: "grey", fontSize: "12px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempo Lorem ipsum dolor sit amet, co....
            </p>
            <Quantity />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardOrderDesk;
