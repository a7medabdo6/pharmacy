import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import logo from "../assets/img/logo.png";
import welcome from "../assets/img/welcome.png";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GetHotels, GetHotelsDetails, GetRooms, Register } from "../Apis/Auth";
import frame from "../assets/desk/Frame.png";
import well from "../assets/desk/well.png";
import BottomNav from "../Components/Ulits/BottomNav";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Home() {
  const [password, setpassword] = useState("");
  const [hotel_id, sethotel_id] = useState("");
  const [name, setname] = useState("");

  const router = useRouter();

  const [room_id, setroom_id] = useState("");

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getHotelsData = async () => {
    const res = await GetHotels();
    setHotels(res?.results);
    return res;
  };
  const getRoomsData = async () => {
    const res = await GetRooms();
    setRooms(res?.results);
    return res;
  };
  const getHotelsDataApi = async () => {
    const res = await GetHotelsDetails({ hotel_id });
    console.log(res);
    setRooms(res?.rooms);
    return res;
  };
  useEffect(() => {
    getHotelsData();
    getRoomsData();
  }, []);
  const submit = () => {
    Register({ password, hotel_id, phone, room_id, first_name: name });
  };
  useEffect(() => {
    if (hotel_id) {
      getHotelsDataApi();
    }
  }, [hotel_id]);
  const [phone, setphone] = useState("us");
  function handleOnChange(value) {
    setphone(value);
  }
  const onBackClick = () => {
    router.push(`/`);
  };
  return (
    <div className="text-center" style={{ backgroundColor: "white" }}>
      <div
        onClick={onBackClick}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          backgroundColor: "white",
          borderRadius: "100px",
          padding: 10,
          border: "1px solid #0f4392",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon
          color="#0f4392"
          size={54}
          style={{ fontSize: 40, color: "#0f4392" }}
        />
      </div>
      <div className="row">
        <div className="d-sm-none p-0">
          <Head>
            <title>Well+ pharmacy</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <div className={styles.background}>
              <Image
                className={styles.logo}
                src={logo}
                alt="Next.js Logo"
                width={200}
                height={55}
                priority
              />
              <Image
                className={styles.welcome}
                src={welcome}
                alt="Next.js Logo"
                width={100}
                height={37}
                priority
              />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h3 className="mt-3 fs-3">Welcome to Well+ pharmacy</h3>
              <h5
                style={{ color: "#DD1717", marginTop: "0", fontSize: "18px" }}
              >
                live healthy … live well
              </h5>
            </div>
            <div
              className="d-flex justify-content-center align-items-center flex-column mt-4"
              style={{
                backgroundColor: "rgba(15, 67, 146, 0.07)",
                width: "90%",
                // height: "440px",
                borderRadius: "15px",
              }}
            >
              <h2 style={{ color: "#0F4392" }} className="m-2">
                Sign up
              </h2>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <span>Already have an account?</span>
                <Link href={"/login"}>
                  <p className="ms-2">Sign in</p>
                </Link>
              </div>
              <form className="text-start d-flex justify-content-center flex-column w-100 px-4">
                <div className="form-group mt-3">
                  <label htmlFor="name" style={{ fontSize: "16px" }}>
                    Your Name*
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2 font-sm-16 py-1"
                    style={{ fontSize: "16px", color: "#BDBDBD" }}
                    id="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Write here"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="phone" style={{ fontSize: "16px" }}>
                    Phone Number*
                  </label>
                  <ReactPhoneInput
                    placeholder="01234567890"
                    disableDropdown={true}
                    disableCountryCode={true}
                    className="mt-2 font-sm-16"
                    value={phone}
                    onChange={handleOnChange}
                    id="phone"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="hotel" style={{ fontSize: "16px" }}>
                    Select Hotel Name
                  </label>
                  <select
                    type="text"
                    className="form-select mt-2 font-xs-14 py-1"
                    style={{ fontSize: "16px", color: "#BDBDBD" }}
                    value={hotel_id}
                    onChange={(e) => sethotel_id(e.target.value)}
                    id="hotel"
                    placeholder="Select here"
                  >
                    <option>Select Hotel Name</option>

                    {hotels.map((item) => (
                      <option value={item?.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group m-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    Password*
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    id="exampleInputEmail1"
                    placeholder="Write here"
                  />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Room Number*</label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={(e) => setroom_id(e.target.value)}
                    id="exampleInputPassword1"
                    placeholder="Select here"
                  >
                    <option>Select Room Number</option>
                    {rooms.map((item) => (
                      <option selected={rooms == item?.id} value={item?.id}>
                        {item.room_number}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </main>
          {/* <Link
            href="/verification"
            className="w-100 position-fixed bottom-0 start-0 bg-white pt-2 pb-3 px-4"
            style={{
              boxShadow: "0px -18px 40px 0px #0000001F",
            }}
          > */}
          <button
            type="button"
            onClick={submit}
            className="btn btn-primary mt-3 w-100"
          >
            Next
          </button>
          {/* </Link> */}
        </div>
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "100vh", marginBottom: 30 }}
          >
            <Row>
              <Col className="col-6">
                <div className="divlogosignup">
                  <Image
                    style={{
                      width: "381px",
                      height: "122px",
                    }}
                    src={well}
                    alt="Next.js Logo"
                    priority
                  />

                  <Image
                    style={{
                      width: "594px",
                      height: "444px",
                    }}
                    src={frame}
                    alt="Next Logo"
                    priority
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="divsignup d-flex justify-content-end align-items-center flex-column">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="m-3 font-xs-16 fw-bold">
                      Welcome to Well+ pharmacy
                    </h4>
                    <h5
                      style={{
                        color: "#DD1717",
                        fontWeight: "400",
                        marginBottom: "10px",
                      }}
                    >
                      live healthy … live well
                    </h5>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column mt-4"
                    style={{
                      backgroundColor: "rgba(15, 67, 146, 0.07)",
                      width: "487px",
                      borderRadius: "15px",
                      paddingBlock: 20,
                      // height: "580px",
                    }}
                  >
                    <h2 style={{ color: "#0F4392" }}>Sign up</h2>
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <label htmlFor="exampleInputPassword1">
                        Already have an account?
                      </label>
                      {/* <h4 style={{ color: "#202223" }} className="m-2">
              Already have an account?
            </h4> */}
                      <Link href={"/login"}>
                        <p className="m-2 fw-bold">Sign in</p>
                      </Link>
                    </div>

                    <form className="d-flex justify-content-center flex-column w-100 px-4">
                      <div className="form-group mt-3">
                        <label htmlFor="name">Your Name*</label>
                        <input
                          type="text"
                          className="form-control mt-3 font-sm-16 py-2"
                          id="name"
                          placeholder="Write here"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="phone">Phone Number*</label>
                        <ReactPhoneInput
                          placeholder="01234567890"
                          disableDropdown={true}
                          disableCountryCode={true}
                          className="mt-3 font-sm-16"
                          value={phone}
                          onChange={handleOnChange}
                          id="phone"
                        />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="hotel">Select Hotel Name</label>
                        <select
                          type="text"
                          className="form-select mt-3 font-sm-16 py-2"
                          value={hotel_id}
                          onChange={(e) => sethotel_id(e.target.value)}
                          id="hotel"
                          placeholder="Select here"
                        >
                          <option>Select Hotel Name</option>

                          {hotels.map((item) => (
                            <option value={item?.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group m-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          style={{ width: "100%", textAlign: "left" }}
                        >
                          Password*
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          id="exampleInputEmail1"
                          placeholder="Write here"
                        />
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="exampleInputEmail1">Room Number*</label>
                        <select
                          type="text"
                          className="form-control"
                          onChange={(e) => setroom_id(e.target.value)}
                          id="exampleInputPassword1"
                          placeholder="Select here"
                        >
                          <option>Select Room Number</option>
                          {rooms.map((item) => (
                            <option
                              selected={rooms == item?.id}
                              value={item?.id}
                            >
                              {item.room_number}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <Link href="/verification" className="w-100"> */}
                      <button
                        type="button"
                        onClick={submit}
                        className="btn btn-primary mt-3 w-100"
                      >
                        Next
                      </button>
                      {/* </Link> */}
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
