import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReviewDesk from "../desk/ReviewDesk";
import { useRouter } from "next/router";

const WriteReview = () => {
  const router = useRouter();
  const [widthScreen, setWidthScreen] = useState(0);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    borderRadius: "10px",
    padding: "7px",
  };

  useEffect(() => {
    setWidthScreen(window.innerWidth);
    if (widthScreen < 700 && router.pathname !== "/") {
      setShow(false);
    }
  }, []);
  return (
    <>
      {show && (
        <div
          onClick={() => {
            if (widthScreen < 700) {
              router.push("/review");
            } else {
              setOpen(true);
            }
          }}
          style={{
            backgroundColor: "#DD1717",
            width: "140px",
            height: "40px",
            right: "-50px",
            top: "40%",
            transform: "rotate(-90deg)",
            textAlign: "center",
            cursor: "pointer",
            padding: "20px 0",
            zIndex: "111",
          }}
          className="write-review-btn position-absolute d-flex justify-content-center align-items-center"
        >
          <p style={{ color: "white", fontSize: "18px !important" }}>
            Write Review
          </p>
        </div>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center"
            style={{
              color: "#0F4392",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-center"
          >
            <ReviewDesk />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default WriteReview;
