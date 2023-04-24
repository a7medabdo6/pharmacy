import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/verification.module.css";

import logo from "../assets/img/logo2.png";
import user from "../assets/img/user.svg";

import { Input } from "semantic-ui-react";
import CardSlider from "../Components/cardSlider";
import CardBanner from "../Components/cardBanner";
import CategorySliderCard from "../Components/CategorySliderCard";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

import "react-phone-input-2/lib/style.css";
import OurServicesCard from "@/Components/OurServicesCard";
import Testimonial from "@/Components/Testimonial";
import getallCategories from "../Apis/Category";
const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const [phone, setphone] = useState("us");
  const [categories, setcateogies] = useState([]);
  const getHomeData = async () => {
    const res = await getallCategories();
    setcateogies(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
        <div
          style={{ width: "95%" }}
          className="  d-flex justify-content-between align-items-center flex-row  m-4"
        >
          <Image
            //  className="w-20"
            src={logo}
            alt="Next.js Logo"
            width={35}
            height={30}
            priority
          />
          <div className="text-primary  m-0" style={{ textAlign: "center" }}>
            <Image
              //  className="w-20"
              src={user}
              alt="Next.js Logo"
              width={35}
              height={30}
              priority
            />
          </div>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <Input
            style={{ width: "95%" }}
            icon="search"
            iconPosition="left"
            className=" mb-2 mt-2"
            placeholder="Search users..."
          />
          <CardSlider />
          <h4 style={{ width: "95%" }} className=" align-start m-0 pt-2 pb-2">
            LBig deals
          </h4>
          <CardBanner />
          {categories?.length > 0 && (
            <div
              style={{ width: "95%" }}
              className="d-flex justify-content-between align-items-center "
            >
              <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                Categories.
              </h4>
              <Link
                href="/CategoriesViewall"
                className="d-flex justify-content-between align-items-center "
              >
                <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">view all</p>
              </Link>
            </div>
          )}

          <div
            className=" mt-3 d-flex justify-content-start align-items-center flex-row "
            style={{ width: "95%", overflow: "scroll" }}
          >
            {categories?.length > 0 &&
              categories.map((item) => {
                return <CategorySliderCard item={item} />;
              })}
          </div>
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between align-items-center "
          >
            <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
              Our services.
            </h4>
            <Link
              href="/CategoriesViewall"
              className="d-flex justify-content-between align-items-center "
            >
              <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">view all</p>
            </Link>
          </div>

          <div className="w-100 mt-3 d-flex justify-content-between align-items-center flex-column ">
            <OurServicesCard />
            <OurServicesCard />
            <OurServicesCard />
          </div>
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between align-items-center "
          >
            <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
              Testimonial
            </h4>
            <Link
              href="/CategoriesViewall"
              className="d-flex justify-content-between align-items-center "
            >
              <p className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">view all</p>
            </Link>
          </div>

          <Testimonial />
        </div>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </main>
    </>
  );
}
