import React, { useEffect } from "react";
import styles from "@/styles/products.module.css";

import BottomNav from "../../../Components/Ulits/BottomNav";

import Image from "next/image";

import Sheet from "react-modal-sheet";
import { useState } from "react";
import icon from "../../../assets/img/icon.png";
import alert from "../../../assets/img/alert.png";
import left from "../../../assets/img/Leftwhite.png";
import exit from "../../../assets/img/exit.png";
import NavBar from "../../../Components/desk/NavBar";
import FooterDesk from "../../../Components/desk/FooterDesk";

import iconfilter from "../../../assets/img/iconfilter.png";
import SearchInput from "../../../Components/products/SearchInput";
import ButtonContact from "../../../Components/products/ButtonContact";
import CardProduct from "../../../Components/products/CardProduct";
import { useRouter } from "next/router";
import Link from "next/link";
import DropdownFilter from "../../../Components/products/DropdownFilter";
import gettAllProducts from "../../../Apis/products";
import { Col, Row } from "react-bootstrap";
import Filter from "../../../Components/desk/Filter";
import ButtonOfferDEsk from "../../../Components/desk/ButtonOfferDEsk";
import PostCart from "../../../Apis/Cart/PostCart";
const products = () => {
  const [isOpen, setOpen] = useState(false);
  const [products, setproducts] = useState([]);

  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  const router = useRouter();
  const { id } = router.query;
  console.log(id, "idd");
  const getHomeData = async (e) => {
    const res = await gettAllProducts({ id: e });
    console.log(res, "ressss");
    setproducts(res?.results);
    return res;
  };
  useEffect(() => {
    if (id) {
      getHomeData(id);
    }
  }, [id]);
  const handleBack = () => {
    router.back();
  };

  console.log(products);


  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="d-none d-sm-block w-100 ">
        <NavBar />
        <div
          class="input-group mb-3 position-relative mt-3 d-flex justify-content-center align-items-center flex-column"
          style={{ width: "100%" }}
        >
          <input
            type="text"
            style={{
              backgroundColor: "#FAFBFB",
              borderRadius: "10px",
              width: "78% !important",
            }}
            className="form-control w-100 inputsearch"
            placeholder="Search products"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          {/* <SearchIcon style={{ position: "absolute", left: "0px" }} /> */}
        </div>
      </div>
      <main
        className={styles.main}
        style={{ backgroundColor: "white", marginBottom: "100px" }}
      >
        <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
          <div
            className="w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center  d-block d-sm-none align-items-center flex-column "
            style={{
              backgroundColor: "#0F4392",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              height: "150px",
              position: "relative",
            }}
          >
            <div className="w-100 d-flex justify-content-between align-items-center ">
              <div
                onClick={handleBack}
                className="d-flex justify-content-center align-items-center ms-3"
                style={{
                  border: "1px solid white",
                  borderRadius: "5px",
                  width: "25px",
                  height: "25px",
                }}
              >
                <Image
                  //  className="w-20"
                  src={left}
                  alt="Next.js Logo"
                  width={14}
                  height={16}
                  priority
                />
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center me-5 ">
                <h3
                  style={{ color: "white", margin: "0px", fontWeight: "500" }}
                >
                  products
                </h3>
              </div>

              <div className="d-flex justify-content-center align-items-center ">
                <Link href="/Notifications" className="w-100">
                  <Image
                    //  className="w-20"
                    src={alert}
                    style={{ position: "absolute", right: "80px", top: "24px" }}
                    alt="Next.js Logo"
                    width={19}
                    height={24}
                    priority
                  />
                </Link>
                <div
                  className=" d-flex justify-content-center align-items-center "
                  style={{
                    height: "24px",
                    width: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#C5CAD4",
                    position: "absolute",
                    right: "20px",
                  }}
                >
                  <Image
                    //  className="w-20"
                    src={icon}
                    alt="Next.js Logo"
                    width={14}
                    height={16}
                    priority
                  />
                </div>
              </div>
            </div>
            <div
              style={{ width: "95%" }}
              className=" d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-5 "
            >
              <div onClick={() => setOpen(true)} className={styles.boxfilter}>
                <Image
                  //  className="w-20"
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

          <div
            className="d-flex justify-content-start align-items-center  mt-3 flex-wrap"
            style={{ width: "95%" }}
          >
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                backgroundColor: "#DD1717",
                borderRadius: "4px",
                width: "32px",
                height: "28px",
                margin: 5,
              }}
            >
              <p className={styles.label}>all</p>
            </div>

            <div
              className="d-flex justify-content-center align-items-center mx-2"
              style={{
                backgroundColor: "rgba(221, 23, 23, 0.2)",
                borderRadius: "4px",
                // width: "119px",
                height: "28px",
                padding: 5,
              }}
            >
              <p className={styles.label}>Top 50 medicines</p>
            </div>

            <div
              className="d-flex justify-content-center align-items-center mx-2"
              style={{
                backgroundColor: "rgba(221, 23, 23, 0.2)",
                borderRadius: "4px",
                padding: 5,
                height: "28px",
              }}
            >
              <p className={styles.label}>Natural oils and herbs </p>
            </div>

            <div
              className="d-flex justify-content-center align-items-center mx-2"
              style={{
                backgroundColor: "rgba(221, 23, 23, 0.2)",
                borderRadius: "4px",
                padding: 5,
                height: "28px",
              }}
            >
              <p className={styles.label}>Cosmtics </p>
            </div>
          </div>
        </div>

        <Row className="mt-3 m-2 mb-5 pb-5" style={{ marginBottom: "80px" }}>
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
          <Col md={9} sm={12}>
            <div
              className="d-flex justify-content-start align-items-center flex-wrap  mb-3 "
              style={{ width: "95%" }}
            >
              <div className={styles.greybox}>
                <p className={styles.txtofboxgrey}>Diclofenac Sodium</p>
                <Image
                  //  className="w-20"
                  src={exit}
                  className="mx-1"
                  alt="Next.js Logo"
                  width={10}
                  height={10}
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
                  width={10}
                  height={10}
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
                  width={10}
                  height={10}
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
                  width={10}
                  height={10}
                  priority
                />
              </div>
            </div>
            <div className={styles.boxwhite}>
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
            <Row>
              {products?.map((item) => (
                <Col className="col-md-6 col-lg-4 col-sm-6 col-6 mb-3">
                  <CardProduct item={item} id={id} />
                </Col>
              ))}
            </Row>
            {/* <div
              className="d-flex justify-content-center mt-3 align-items-center flex-wrap "
              style={{ width: "95%" }}
            ></div> */}
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
                className=" d-flex    "
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
