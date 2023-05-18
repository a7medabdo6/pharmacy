import React, { useEffect } from "react";
import styles from "@/styles/confirmation.module.css";
import vector from "../assets/img/vector.png";
import Header from "../Components/Ulits/Header";

import ButtonEditInfo from "../Components/EditInfo/buttonEditInfo";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import NavBar from "../Components/desk/NavBar";
import NavBarMobaile from "../Components/desk/NavBarMobail";
import { useRouter } from "next/router";
import { GetHotels, GetRooms, updateUser } from "../Apis/Auth";
import FooterDesk from "../Components/desk/FooterDesk";
import BottomNav from "../Components/Ulits/BottomNav";
import { Breadcrumb, Button, Container } from "react-bootstrap";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";

const EditInfo = () => {
  const [phone, setphone] = useState("us");
  const [hotel_id, sethotel_id] = useState(1);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);

  function handleOnChange(value) {
    setphone(value);
  }
  const router = useRouter();
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(JSON.parse(localStorage?.getItem("user")));
    }
  }, []);
  useEffect(() => {
    console.log(user, "ussser");
    if (user) {
    } else {
      // router.push("/");
    }
    sethotel_id(user?.hotel);
    setName(user?.first_name);
  }, [user]);
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
  const callupdateUser = async () => {
    updateUser({ id: user?.id, hotel: hotel_id, phone, name: name });
  };
  useEffect(() => {
    getHotelsData();
    getRoomsData();
  }, []);
  return (
    <div className="padding-bottom-sm">
      <NavBar />
      <NavBarMobaile titlePage="Edit Info" />

      <div
        className="w-100 h-100 overflow-hidden pb-3"
        style={{ background: "#eaeaea" }}
      >
        <Container>
          <Breadcrumb
            style={{ fontSize: "18px" }}
            className="d-none d-lg-block mt-3"
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Our products</Breadcrumb.Item>
            <Breadcrumb.Item>Requests</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit info</Breadcrumb.Item>
          </Breadcrumb>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <div
              className="d-flex w-custom justify-content-center align-items-center flex-column my-2 bg-white py-4 rounded-3"
              style={{
                boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <h2 style={{ color: "#0F4392" }} className="m-2">
                Edit Info
              </h2>
              <form
                className="d-flex justify-content-center flex-column"
                style={{ width: "90%" }}
              >
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Your Name*</label>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Write here"
                    value={user?.first_name}
                  />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputPassword1">Phone Number* </label>
                  <ReactPhoneInput
                    defaultCountry={"us"}
                    value={user?.phone}
                    onChange={handleOnChange}
                    className="w-100"
                  />
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputPassword1">
                    Select Hotel Name{" "}
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={(e) => sethotel_id(e.target.value)}
                    id="exampleInputPassword1"
                    placeholder="Select here"
                  >
                    <option> Select Hotel Name</option>
                    {hotels.map((item) => (
                      <option selected={hotel_id == item?.id} value={item?.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Room Number*</label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={(e) => setRooms(e.target.value)}
                    id="exampleInputPassword1"
                    placeholder="Select here"
                  >
                    <option>Select Room Number</option>
                    {rooms.map((item) => (
                      <option selected={rooms == item?.id} value={item?.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center  mt-5">
                  <ButtonEditInfo
                    txtColor="#0F4392"
                    bckColor="white"
                    BRColor="#0F4392"
                    text="Discard"
                  />
                  <ButtonEditInfo
                    txtColor="white"
                    bckColor="#0F4392"
                    BRColor="#0F4392"
                    text="Save Changes"
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div className="d-block d-sm-none w-100">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block w-100">
        <FooterDesk />
      </div>
      <WriteReview />
      <Support />
    </div>
  );
};

export default EditInfo;
