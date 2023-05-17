import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import alert from "../../assets/img/alert.png";
import alertBlue from "../../assets/img/alertblue.png";

import profile from "../../assets/img/icon.png";
import userSvg from "../../assets/img/user.svg";
import back from "../../assets/img/Leftwhite.png";
import logoImg from "../../assets/img/logo2.png";

const NavBarMobail = ({
  logo = false,
  titlePage = "",
  sectionRight = true,
  bgColor = "#0F4392",
}) => {
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
      className="d-flex justify-content-between align-items-center pt-4 pb-4 px-3 d-block d-md-none rounded-bottom w-100"
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <div>
        {logo ? (
          <Image
            src={logoImg}
            alt="Next.js Logo"
            // width={12}
            // height={12}
            priority
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center border rounded-3"
            style={{ width: "24px", height: "24px" }}
            onClick={handleGoBack}
          >
            <Image
              src={back}
              alt="Next.js Logo"
              width={12}
              height={12}
              priority
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-white fw-bold">{titlePage}</h3>
      </div>
      <div>
        {sectionRight ? (
          <div className="d-flex justify-content-center align-items-center gap-3">
            {user ? (
              <>
                <Link href="/Notifications" className="position-relative">
                  <Image
                    src={logo ? alertBlue : alert}
                    alt="Next.js Logo"
                    width={24}
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
                    backgroundColor: "#C5CAD4",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <Image
                    src={logo ? userSvg : profile}
                    alt="Next.js Logo"
                    width={30}
                    height={30}
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBarMobail;
