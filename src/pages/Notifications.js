import React from "react";
import Header from "../Components/Ulits/Header";
import styles from "@/styles/Notifications.module.css";
import NavBarMobail from "../Components/desk/NavBarMobail";

const Notifications = () => {
  return (
    <main className={styles.main} style={{ backgroundColor: "#eaeaea" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <NavBarMobail titlePage="Notifications" />
      </div>
      <div
        className="w-100 d-flex mt-3 justify-content-center align-items-center flex-column"
        style={{ backgroundColor: "white", borderRadius: "4px" }}
      >
        <div className="w-100 d-flex justify-content-start me-5 mt-3 align-items-center flex-row-reverse">
          <p style={{ color: "#2C6ECB" }}>mark all as read</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start ms-3 mt-3 align-items-center"
        >
          <p style={{ fontWeight: "bold" }}>new</p>
        </div>

        <div className="d-flex justify-content-center my-2 py-5 align-items-start boxnotify flex-column">
          <p className="titlenotify ms-3 mb-0">
            Order Placed Successfully. Thank you for{" "}
          </p>
          <p className="titlenotify ms-3 mt-0"> shopping with us.</p>

          <div className="offergreen">
            <p className="txtoffergreen">Offer</p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "grey", width: "95%", height: "1px" }}
        ></div>
        <div className=" d-flex justify-content-center my-2 align-items-start boxnotifywhite flex-column ">
          <p className="titlenotify ms-3 mb-0">
            Order Placed Successfully. Thank you for{" "}
          </p>
          <p className="titlenotify ms-3 mt-0"> shopping with us.</p>
        </div>
      </div>
    </main>
  );
};

export default Notifications;
