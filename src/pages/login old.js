import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../assets/img/logo.png";
import welcome from "../assets/img/welcome.png";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Link from "next/link";
import loginUser from "../Apis/Auth";
import frame from "../assets/desk/Frame.png";
import well from "../assets/desk/well.png";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [phone, setphone] = useState("us");
  const [hotel_id, sethotel_id] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("us");

  const submit = () => {
    loginUser({ phone, hotel_id, email });
  };
  function handleOnChange(value) {
    setphone(value);
  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="d-sm-none">
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
                <h3 className="m-3">Welcome back</h3>
                <h5 style={{ color: "red" }}>live healthy … live well</h5>
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
                <div className="d-flex justify-content-center align-items-center ">
                  <h5 style={{ color: "#202223" }} className="m-2">
                    Don’t have an account?{" "}
                  </h5>
                  <a href="#" style={{ color: "#0F4392" }} className="m-2">
                    sign in
                  </a>
                </div>
                <form className="d-flex justify-content-center  flex-column">
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">
                      Phone Number*{" "}
                    </label>
                    <ReactPhoneInput
                      defaultCountry={"us"}
                      value={phone}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">password*</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="password"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center ">
                    <label className="d-flex justify-content-center align-items-center">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#" style={{ color: "#0F4392" }} className="m-2">
                      Forgot password?{" "}
                    </a>
                  </div>

                  <Link href="/Home" className="w-100">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3 mt-3 w-100"
                    >
                      Next
                    </button>
                  </Link>
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

            <div className="divsignup d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h5 className="m-3 font-xs-16">Welcome Back</h5>
                <p
                  style={{
                    color: "#DD1717 ",
                    lineHeight: "28px",
                    fontSize: "25px !important",
                  }}
                >
                  live healthy … live well
                </p>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  backgroundColor: "rgba(15, 67, 146, 0.07)",
                  width: " 80%",
                  borderRadius: "15px",

                  marginBlock: "20px",
                }}
              >
                <h2 style={{ color: "#0F4392" }} className="m-2">
                  Sign up
                </h2>
                <div className="d-flex justify-content-center  align-items-center w-80">
                  <label htmlFor="exampleInputPassword1">
                    {" "}
                    Don’t have an account?{" "}
                  </label>

                  {/* <h4 style={{ color: "#202223" }} className="m-2">
              Already have an account?
            </h4> */}
                  <a className="m-2">Sign up</a>
                </div>

                <form className="d-flex justify-content-center  flex-column w-80">
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">
                      Phone Number*{" "}
                    </label>
                    <ReactPhoneInput
                      defaultCountry={"us"}
                      value={phone}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1"> Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      id="exampleInputEmail1"
                      placeholder="Write here"
                    />
                  </div>

                  {/* <Link href="/verification" className='w-100'> */}

                  <button
                    type="button"
                    onClick={submit}
                    className="btn btn-primary mb-3 mt-3 w-100"
                  >
                    Sign in
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
