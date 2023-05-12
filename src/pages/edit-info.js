import React, { useEffect } from "react";
import styles from "@/styles/confirmation.module.css";
import vector from "../assets/img/vector.png";
import Header from "../Components/Ulits/Header";

import ButtonEditInfo from "../Components/EditInfo/buttonEditInfo";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import NavBar from "../Components/desk/NavBar";
import { useRouter } from "next/router";
import { GetHotels, GetRooms } from "../Apis/Auth";
import FooterDesk from "../Components/desk/FooterDesk";
import BottomNav from "../Components/Ulits/BottomNav";
const EditInfo = () => {
  const [phone, setphone] = useState("us");
  const [hotel_id, sethotel_id] = useState(1);

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

  useEffect(() => {
    getHotelsData();
    getRoomsData();
  }, []);
  return (
    <main
      style={{
        width: "100%",
        margin: "auto",
      }}
      className="d-flex  align-items-center flex-column"
    >
      <div className="d-block d-sm-none w-100">
        <Header title="Edit  Info" />
      </div>

      <div className="d-none d-sm-block w-100 ">
        <NavBar />
      </div>

      <div
        className="d-flex w-custom justify-content-center align-items-center flex-column my-2"
        style={{
          backgroundColor: "rgba(15, 67, 146, 0.07)",

          borderRadius: "15px",
          marginBlock: "20px",
        }}
      >
        <h2 style={{ color: "#0F4392" }} className="m-2">
          Edit Info
        </h2>
        <form
          className="d-flex justify-content-center  flex-column "
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
            <label htmlFor="exampleInputPassword1">Select Hotel Name </label>
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
              <option> Select Room Number</option>
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
              text="Save Changes  "
            />
          </div>
        </form>
      </div>
      <div className="d-block d-sm-none w-100">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block w-100">
        <FooterDesk />
      </div>
    </main>
  );
};

export default EditInfo;
