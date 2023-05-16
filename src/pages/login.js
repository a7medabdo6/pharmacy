import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import logo from "../assets/img/logo.png";
import welcome from "../assets/img/welcome.png";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GetHotels, GetRooms, loginUser } from "../Apis/Auth";
import frame from "../assets/desk/Frame.png";
import well from "../assets/desk/well.png";
import { useRouter } from "next/router";

export default function Home() {
  const [password, setpassword] = useState("");
  const router = useRouter();

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const submit = async () => {
    const res = await loginUser({ password, phone });
    if (res.token) {
      router.push("/");
    }
  };
  const [phone, setphone] = useState("us");
  function handleOnChange(value) {
    setphone(value);
  }
  return (
    <div className=" text-center" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div className="d-sm-none p-0">
          <>
            <Head>
              <title>Create Next App</title>
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
                  width={100}
                  height={37}
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
                <h3 className="m-3 font-xs-16">Welcome to Well Medic</h3>
                <h5 style={{ color: "red " }}>live healthy … live well</h5>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  backgroundColor: "rgba(15, 67, 146, 0.07)",
                  width: " 90%",
                  borderRadius: "15px",
                  marginBlock: "20px",
                }}
              >
                <h2 style={{ color: "#0F4392" }} className="m-2">
                  Sign in
                </h2>
                <div className="d-flex justify-content-center  align-items-center w-80">
                  <label htmlFor="exampleInputPassword1">
                    {" "}
                    Don't have an account?{" "}
                  </label>

                  <Link href={"/register"}>
                    <p className="m-2">Sign up</p>
                  </Link>
                </div>
                <form className="d-flex justify-content-center  flex-column">
                  <div className="form-group m-2">
                    <label
                      htmlFor="exampleInputPassword1"
                      style={{ width: "100%", textAlign: "left" }}
                    >
                      Phone Number*{" "}
                    </label>
                    <ReactPhoneInput
                      defaultCountry={"us"}
                      value={phone}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="form-group m-2">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{ width: "100%", textAlign: "left" }}
                    >
                      {" "}
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

                  <button
                    type="button"
                    onClick={submit}
                    className="btn btn-primary mb-3 mt-3 w-100"
                  >
                    Next
                  </button>
                  {/* </Link> */}
                </form>
              </div>

              {/* <Image
            className={styles.logo}
            src="/curve.svg"
            alt="Next.js Logo"
            width={500}
            height={37}
            priority
          /> */}
            </main>
          </>{" "}
        </div>
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="divlogosignup">
              <Image
                src={well}
                alt="Next.js Logo"
                className="logowell"
                //   width={381}
                //   height={122}
                priority
              />

              <Image
                src={frame}
                alt="Next Logo"
                className="logoFrame"
                priority
              />
            </div>

            <div className="divsignup d-flex justify-content-end align-items-center flex-column">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h3 className="m-3 font-xs-16">Welcome to Well Medic</h3>
                <h5 style={{ color: "red" }}>live healthy … live well</h5>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  backgroundColor: "rgba(15, 67, 146, 0.07)",
                  width: " 80%",
                  borderRadius: "15px",
                  height: "75vh",

                  marginBlock: "20px",
                }}
              >
                <h2 style={{ color: "#0F4392" }} className="m-2">
                  Sign up
                </h2>
                <div className="d-flex justify-content-center  align-items-center w-80">
                  <label htmlFor="exampleInputPassword1">
                    {" "}
                    Already have an account?{" "}
                  </label>
                  <Link href={"/register"}>
                    <p className="m-2">Sign up</p>
                  </Link>{" "}
                </div>

                <form className="d-flex justify-content-center  flex-column w-80">
                  <div className="form-group m-2">
                    <label
                      htmlFor="exampleInputPassword1"
                      style={{ width: "100%", textAlign: "left" }}
                    >
                      Phone Number*{" "}
                    </label>
                    <ReactPhoneInput
                      defaultCountry={"us"}
                      value={phone}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="form-group m-2">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{ width: "100%", textAlign: "left" }}
                    >
                      {" "}
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

                  <button
                    type="button"
                    onClick={submit}
                    className="btn btn-primary mb-3 mt-3 w-100"
                  >
                    Next
                  </button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
