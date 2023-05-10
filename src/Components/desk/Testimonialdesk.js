import Image from "next/image";
import React,{useState} from "react";
import usertesty from "../../assets/img/usertesty.png";
import Rateing from "../../Components/Ulits/Rateing";

function Testimonialdesk({item}) {
  const [rate, setrate] = useState();
  const [img, setimg] = useState(item?.file.toString());
  console.log(img);
  return (
    <div
      className="  p-3 d-flex justify-content-start align-items-start "
      style={{ backgroundColor: "white" }}
    >
      <Image
        //  className="w-20"
        src={"https://wellmedic2.s3.amazonaws.com/wellmedic2/static/review_fiels/Ellipse_1.svg"}
        alt="Next.js Logo"
        width={30}
        style={{marginTop:"7px"}}
        height={30}
        priority
      />
      <div
        className=" m-2 mt-0 d-flex justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h3
          className="text-primary mb-1"
          style={{ fontSize: "14px !important" }}
        >
          User Name
        </h3>
        <div className="d-flex mb-2 justify-content-start align-items-start ">
        <Rateing setrate={setrate} Val={item?.rate} />

          {/* <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i>
          <i className="star icon" style={{ color: "gold" }}></i> */}
        </div>

        <p className="text-dark" style={{ fontSize: "10px !important" }}>
          {" "}
          “Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”
        </p>
      </div>
    </div>
  );
}

export default Testimonialdesk;
