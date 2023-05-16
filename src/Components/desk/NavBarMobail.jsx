import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import alert from "../../assets/img/alert.png";
import profile from "../../assets/img/icon.png";
import back from "../../assets/img/Leftwhite.png";

const NavBarMobail = ({ titlePage }) => {
  const [user, setuser] = useState(null);
  const router = useRouter();

  const handleGoBack = () => {
    console.log("Go Back");
    router.back();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);

  return (
    <div
      className="d-flex justify-content-between align-items-center pt-5 pb-4 px-3 d-block d-md-none rounded-bottom"
      style={{
        backgroundColor: "#0F4392",
      }}
    >
      <div className="border py-1 px-2 rounded-3" onClick={handleGoBack}>
        <Image src={back} alt="Next.js Logo" width={15} height={15} priority />
      </div>
      <div>
        <h3 className="text-white fw-bold">{titlePage}</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3">
        {user ? (
          <>
            <Link href="/Notifications" className="position-relative">
              <Image
                src={alert}
                alt="Next.js Logo"
                width={19}
                height={24}
                priority
              />
              <div
                className="position-absolute text-white rounded-5 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "red",
                  top: "-5px",
                  left: "-8px",
                  width: "15px",
                  height: "15px",
                  fontSize: "10px",
                }}
              >
                3
              </div>
            </Link>
            <div
              className="d-flex justify-content-center align-items-center rounded-5"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#C5CAD4",
              }}
            >
              <Image
                src={profile}
                alt="Next.js Logo"
                width={15}
                height={15}
                priority
              />
            </div>
          </>
        ) : (
          <>
            <Link
              href={"/login"}
              className="btn btn-outline-success me-2"
              style={{
                backgroundColor: "white",
                borderColor: "#0F4392",
                color: "#0F4392",
                width: "100px",
              }}
            >
              sign in
            </Link>

            <button
              className="btn btn-outline-success"
              style={{
                color: "white",
                backgroundColor: "#0F4392",
                width: "100px",
              }}
              type="submit"
            >
              sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBarMobail;
