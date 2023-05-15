import React, { useEffect } from "react";
import styles from "@/styles/products.module.css";

import BottomNav from "../../Components/Ulits/BottomNav";

import Image from "next/image";

import Sheet from "react-modal-sheet";
import { useState } from "react";
import icon from "../../assets/img/icon.png";
import alert from "../../assets/img/alert.png";
import left from "../../assets/img/Leftwhite.png";
import exit from "../../assets/img/exit.png";
import NavBar from "../../Components/desk/NavBar";
import FooterDesk from "../../Components/desk/FooterDesk";

import iconfilter from "../../assets/img/iconfilter.png";
import SearchInput from "../../Components/products/SearchInput";
import ButtonContact from "../../Components/products/ButtonContact";
import CardProduct from "../../Components/products/CardProduct";
import { useRouter } from "next/router";
import Link from "next/link";
import DropdownFilter from "../../Components/products/DropdownFilter";
import { getallProductsWithNoCategory } from "../../Apis/products";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Filter from "../../Components/desk/Filter";
import SerachBar from "../../Components/SerachBar";
import ButtonOfferDEsk from "../../Components/desk/ButtonOfferDEsk";
import PostCart from "../../Apis/Cart/PostCart";
import NavBarMobail from "../../Components/desk/NavBarMobail";
const products = () => {
  const [isOpen, setOpen] = useState(false);
  const [products, setproducts] = useState([]);

  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  const router = useRouter();
  const { id } = router.query;
  console.log(id, "idd");
  const getHomeData = async () => {
    const res = await getallProductsWithNoCategory();
    console.log(res, "ressss");
    setproducts(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const handleBack = () => {
    router.back();
  };

  console.log(products);

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#0F4392",
        }}
      >
        <NavBarMobail titlePage="Our products" />
        <div className="w-100 py-4 d-flex justify-content-center d-block d-sm-none align-items-center flex-column">
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-2"
          >
            <div onClick={() => setOpen(true)} className={styles.boxfilter}>
              <Image
                src={iconfilter}
                className={styles.iconfilter}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />

              <p className={styles.txtfilter}>Filter</p>
            </div>
            <SearchInput />
          </div>
        </div>
      </div>
      <Container className="padding-bottom-sm">
        <Breadcrumb
          style={{ fontSize: "12px" }}
          className="d-none d-lg-block mt-3"
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Our products</Breadcrumb.Item>
        </Breadcrumb>

        <h1
          className="text-center h3 my-4 d-none d-lg-block fw-bold"
          style={{ color: "#0F4392" }}
        >
          Our products
        </h1>

        <SerachBar showBigScreen={true} />
        <main className={styles.main}>
          <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
            <div
              className="d-flex justify-content-start align-items-center mt-3 gap-2"
              style={{ width: "100%" }}
            >
              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "#DD1717",
                }}
              >
                <p className={styles.label}>All</p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Top 50 medicines</p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Natural oils and herbs </p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Cosmtics </p>
              </div>
            </div>
          </div>

          <Row className="mt-3 mt-lg-5">
            <Col md={3} sm={12} className="d-none d-sm-block">
              <div
                style={{
                  borderRadius: "8px",
                  boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
                }}
                className="d-flex justify-content-center  align-items-center flex-column  "
              >
                <h5 className="my-3">Filter by</h5>

                <Filter label="By diseases" />
                <Filter label="By users" />
                <Filter label="By ingredients" />
                <div
                  style={{ width: "80%" }}
                  className="d-flex justify-content-around my-3 w-100 align-items-end flex-row-reverse "
                >
                  <button className="btn btn-primary">Apply</button>
                  <button
                    className="btn btn-outline-primary"
                    style={{ color: "#0F4392" }}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </Col>
            <Col md={9} sm={12} className="d-flex flex-column">
              <div
                className="d-flex justify-content-start align-items-center gap-2 flex-wrap mb-3 order-2"
                style={{ width: "100%" }}
              >
                <div className={styles.greybox}>
                  <p className={styles.txtofboxgrey}>Diclofenac Sodium</p>
                  <Image
                    //  className="w-20"
                    src={exit}
                    className="mx-1 fs-5"
                    alt="Next.js Logo"
                    width={8}
                    height={8}
                    priority
                  />
                </div>
                <div className={styles.greybox} style={{ width: "134px" }}>
                  <p className={styles.txtofboxgrey}>Sodium Chloride</p>
                  <Image
                    //  className="w-20"
                    src={exit}
                    className="mx-1"
                    alt="Next.js Logo"
                    width={8}
                    height={8}
                    priority
                  />
                </div>
                <div className={styles.greybox} style={{ width: "94px" }}>
                  <p className={styles.txtofboxgrey}>Ibuprofen</p>
                  <Image
                    //  className="w-20"
                    src={exit}
                    className="mx-1"
                    alt="Next.js Logo"
                    width={8}
                    height={8}
                    priority
                  />
                </div>
                <div className={styles.greybox} style={{ width: "134px" }}>
                  <p className={styles.txtofboxgrey}>Sodium Chloride</p>
                  <Image
                    //  className="w-20"
                    src={exit}
                    className="mx-1"
                    alt="Next.js Logo"
                    width={8}
                    height={8}
                    priority
                  />
                </div>
              </div>
              <div className={`${styles.boxwhite} order-1`}>
                <p className={styles.txtExplore}>Explore our products or </p>
                <Link href={"/contactus"}>
                  <ButtonContact
                    txtColor="#0F4392"
                    bckColor="white"
                    BRColor="#0F4392"
                    text="Contact a pharmacist"
                  />
                </Link>
              </div>
              <Row
                className="order-3"
                style={{
                  bsGutterX: "1.5rem",
                }}
              >
                {products?.map((item) => (
                  <Col className="col-md-6 col-lg-4 col-sm-6 col-6 mb-3">
                    <CardProduct item={item} id={item?.id} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <div className="w-80 d-flex  justify-content-start align-items-center  ">
            <Sheet
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              snapPoints={snapPoints}
              className="w-100 d-flex  justify-content-center align-items-center  "
            >
              <Sheet.Container className={styles.bottomsheet}>
                <Sheet.Header />
                <div className="w-100 d-flex  justify-content-center align-items-center mb-3 ">
                  <h4 style={{ color: "#0F4392" }}>Filter by</h4>
                </div>

                <Sheet.Content
                  className=" d-flex"
                  style={{ width: "90%", flexDirection: "column" }}
                >
                  <DropdownFilter
                    title={"By Disease"}
                    options={[
                      { name: "Option ", id: 1 },
                      { name: "Option ", id: 2 },
                    ]}
                  />
                  <DropdownFilter
                    title={"By Users"}
                    options={[
                      { name: "All ", id: 1 },
                      { name: "Option", id: 2 },
                    ]}
                  />
                  <DropdownFilter
                    title={"By ingredients"}
                    options={[
                      { name: "All ", id: 1 },
                      { name: "Option", id: 2 },
                    ]}
                  />
                  <div className="d-flex justify-content-between mt-5">
                    <div
                      className="btn btn-primary pb-2 pt-2 pr-5 pl-5"
                      style={{ paddingInline: "25px", width: "45%" }}
                    >
                      Aplly
                    </div>
                    <div
                      className="btn btn-outline-primary pb-2 pt-2 pr-5 pl-5"
                      style={{ paddingInline: "25px", width: "45%" }}
                    >
                      Clear all
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>

              <Sheet.Backdrop />
            </Sheet>
          </div>
        </main>
      </Container>

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
    </div>
  );
};

export default products;