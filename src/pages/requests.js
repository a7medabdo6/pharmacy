import React,{useState,useEffect} from "react";
import styles from "@/styles/requests.module.css";
import ButtonRequests from "../Components/Requests/ButtonRequests";
import CardInfo from "../Components/Requests/CardInfo";
import CardOrder from "../Components/Requests/CardOrder";
import BottomNav from "../Components/Ulits/BottomNav";
import InputWithButton from "../Components/Requests/InputWithButton";
import Header from "../Components/Ulits/Header";
import NavBar from "@/Components/desk/NavBar";
import { Col, Row } from "react-bootstrap";
import FooterDesk from "@/Components/desk/FooterDesk";

import GetCart from "../Apis/Cart/GetCart"
import PostCart from "../Apis/Cart/PostCart"


const requests = () => {
  const circleStyle = {
    backgroundColor: "#0F4392",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
  };



  const [CartList, setCartList] = useState([]);
  const GetCartFun = async () => {
    const res = await GetCart();
    setCartList(res?.cart_items);
    return res;
  };
  useEffect(() => {
    GetCartFun();
  }, []);
  console.log(CartList);
  return (
    <main style={{ backgroundColor: "#EDEDED", width: "100%", margin: "auto" }}>
      <div className="d-block d-sm-none">
        <Header title="Requests" />
      </div>

      <div className="d-none d-sm-block w-100 ">
        <NavBar />
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div
          className=" flex-column  d-flex justify-content-start align-items-center mt-4 "
          style={{ overflowY: "scroll" }}
        >
          <Row>
            <Col className="col-12 col-sm-8 col-md-8">
              <Row>
                <Col className="col-12 ">
                  <div
                    className="   me-1  d-flex justify-content-start align-items-center "
                    style={{ width: "100%" }}
                  >
                    <h5>Your Info</h5>
                  </div>
                  <div
                    className="  mt-1  d-flex justify-content-start align-items-center "
                    style={{ width: "100%" }}
                  >
                    <CardInfo />
                  </div>
                </Col>
                <Col className="col-12 "></Col>
                <div
                  className="  mt-5 me-1  d-flex justify-content-start align-items-center "
                  style={{ width: "100%" }}
                >
                  <h5>Your Order</h5>
                </div>

                <div
                  className="  mt-1  d-flex justify-content-start flex-column align-items-center "
                  style={{ width: "100%" }}
                >
                  {
                    CartList?.map((item)=>{return(
                      <CardOrder item={item} />

                    )})
                  }
                </div>
              </Row>
            </Col>
            <Col className="col-12 col-sm-4 col-md-4">
              <div
                className="w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center "
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  position: "relative",
                  marginTop: "20px",
                }}
              >
                <div
                  className="  d-flex justify-content-start align-items-center flex-column  "
                  style={{
                    bottom: 0,
                    marginLeft: "5px",
                    width: "95%",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{ width: "100%", margin: "5px" }}
                    className="my-4"
                  >
                    <p>Promocodes</p>
                    <input
                      placeholder="Well20"
                      style={{
                        borderRadius: "4px",
                        width: " 90%",
                        padding: "6px",
                        border: "1px solid #8080806e",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  <div
                    className="w-100  d-flex justify-content-start align-items-center  "
                    style={{ marginBottom: "20px" }}
                  >
                    <div style={circleStyle}>
                      <span>4</span>
                    </div>
                    <p
                      style={{
                        color: "#0F4392",
                        fontFamily: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                        marginLeft: "10px",
                      }}
                    >
                      Products have been selected
                    </p>
                  </div>

                  <div className="w-100  d-flex justify-content-start align-items-center ">
                    <ButtonRequests
                      txtColor="white"
                      bckColor="#0F4392"
                      BRColor="#0F4392"
                      text="Place Order"
                    />
                  </div>
                  <div className="w-100  d-flex justify-content-start align-items-center ">
                    <p style={{ textAlign: "center", color: "#DD1717" }}>
                      Note that: your order will not be confirmed before you
                      receive a call from us to let you know your order price to
                      confirm.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div
            className="  me-1  d-flex justify-content-start align-items-center d-block d-sm-none"
            style={{ width: "100%" }}
          >
            <h5 className="mt-3">Promocodes</h5>
          </div>
          <div
            style={{ width: "100%", margin: "5px" }}
            className="my-4 d-block d-sm-none"
          >
            <InputWithButton />
          </div>
        </div>

        <div
          className="position-relative "
          style={{ bottom: 0, width: "100%", borderRadius: "15px" }}
        ></div>
      </div>
      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
    </main>
  );
};

export default requests;
