import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// UI library
import Sheet from "react-modal-sheet";
import { ImageGroup } from "semantic-ui-react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

// CSS Module
import styles from "@/styles/products.module.css";

// Components
import NavBar from "../../Components/desk/NavBar";
import NavBarMobail from "../../Components/desk/NavBarMobail";
import exit from "../../assets/img/exit.png";
import FooterDesk from "../../Components/desk/FooterDesk";
import SearchInput from "../../Components/products/SearchInput";
import ButtonContact from "../../Components/products/ButtonContact";
import CardProduct from "../../Components/products/CardProduct";
import DropdownFilter from "../../Components/products/DropdownFilter";
import Filter from "../../Components/desk/Filter";
import SerachBar from "../../Components/SerachBar";
import WriteReview from "../../Components/Ulits/WriteReview";
import Support from "../../Components/Ulits/Support";

// Images and icon
import iconfilter from "../../assets/img/iconfilter.png";

// Logic Api
import getallProducts from "../../Apis/products";

import { getallProductsWithNoCategory } from "../../Apis/products";
import SliderFilterButton from "../../Components/products/SliderFilterButton";
import getAllCategories from "../../Apis/Category";
import SizesExample from "../../Components/Spinner";
const products = () => {
  const [isOpen, setOpen] = useState(false);
  const [products, setproducts] = useState([]);
  const router = useRouter();
  const [inLogin, setInLogin] = useState(false);
  const { id } = router.query;
  const [categories, setcateogies] = useState([]);
  const [activeCateFilter, setactiveCateFilter] = useState("all");
  const [isLoading, setisLoading] = useState(true);

  const snapPoints = [400, 600]; // Define the height values that the modal can snap to

  const getHomeData = async () => {
    if (activeCateFilter == "all") {
      const res = await getallProductsWithNoCategory();
      setproducts(res?.results);
      if (res?.results) {
        setisLoading(false);
      }
      return res;
    } else {
      const res = await getallProducts({ id: activeCateFilter });
      setproducts(res?.results);
      if (res?.results) {
        setisLoading(false);
      }
      return res;
    }
  };
  const getAllCategoriess = async () => {
    const res = await getAllCategories();
    console.log(res, "ressss");
    setcateogies(res?.results);
    return res;
  };

  useEffect(() => {
    getHomeData();
    getAllCategoriess();

    if (localStorage.getItem("user")) {
      setInLogin(true);
    }
  }, []);
  useEffect(() => {
    getHomeData();
  }, [activeCateFilter]);

  return (
    <div className="product-details">
      <NavBar />
      <div
        style={{
          backgroundColor: "#0F4392",
        }}
      >
        <NavBarMobail titlePage="Our products" />
        <div className="w-100 py-4 d-flex justify-content-center d-flex d-sm-none align-items-center flex-column">
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-2"
          >
            <button
              onClick={() => setOpen(true)}
              disabled={!inLogin}
              className={styles.boxfilter}
            >
              <Image
                src={iconfilter}
                className={styles.iconfilter}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />

              <p className={styles.txtfilter}>Filter</p>
            </button>
            <SearchInput setProducts={setproducts} />
          </div>
        </div>
      </div>
      {isLoading ? (
        <SizesExample />
      ) : (
        <Container className="px-0">
          <Breadcrumb
            style={{ fontSize: "18px" }}
            className="d-none d-lg-block mt-3"
          >
            <Breadcrumb.Item linkAs={Link} href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Our products</Breadcrumb.Item>
          </Breadcrumb>

          <h1
            className="text-center h3 my-4 d-none d-lg-block fw-bold"
            style={{ color: "#0F4392" }}
          >
            Our products
          </h1>

          <SerachBar
            showBigScreen={true}
            setProducts={setproducts}
            products={products}
          />
          <main className={styles.main}>
            <SliderFilterButton
              categories={categories}
              setactiveCateFilter={setactiveCateFilter}
              activeCateFilter={activeCateFilter}
            />
            <Row className="mt-0 mt-lg-5 w-100 mr-0" style={{ margin: 0 }}>
              <Col md={3} sm={12} className="d-none d-sm-block">
                <div
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
                  }}
                  className="d-flex justify-content-center align-items-center flex-column  "
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
                  className="d-none d-md-flex justify-content-start align-items-center gap-2 flex-wrap mb-3 order-2"
                  style={{ width: "100%" }}
                >
                  <div className={styles.greybox}>
                    <p className={styles.txtofboxgrey}>Diclofenac Sodium</p>
                    <Image
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
                    <ImageGroup
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
                  className="order-3 gap-50"
                  style={{
                    "--bs-gutter-x": "0.5rem",
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

            <div className="w-80 d-flex justify-content-start align-items-center">
              <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={snapPoints}
                className="w-100 d-flex justify-content-center align-items-center"
              >
                <Sheet.Container className={styles.bottomsheet}>
                  <Sheet.Header />
                  <div className="w-100 d-flex justify-content-center align-items-center mb-3">
                    <h4 style={{ color: "#0F4392" }}>Filter by</h4>
                  </div>

                  <Sheet.Content
                    className=" d-flex"
                    style={{ width: "90%", flexDirection: "column" }}
                  >
                    <DropdownFilter
                      title={"By Disease"}
                      options={[
                        { name: "A ", id: 1 },
                        { name: "B ", id: 2 },
                      ]}
                    />
                    <DropdownFilter
                      title={"By Users"}
                      options={[
                        { name: "B ", id: 1 },
                        { name: "A", id: 2 },
                      ]}
                    />
                    <DropdownFilter
                      title={"By ingredients"}
                      options={[
                        { name: "All ", id: 1 },
                        { name: "C", id: 2 },
                      ]}
                    />
                    <div className="d-flex justify-content-between mt-5">
                      <div
                        className="btn btn-primary pb-2 pt-2 pr-5 pl-5"
                        style={{ paddingInline: "25px", width: "45%" }}
                      >
                        apply
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
      )}

      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
      <WriteReview />
      <Support />
    </div>
  );
};

export default products;
