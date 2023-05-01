import React, { useState } from "react";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtomReview from "@/Components/Requests/ButtomReview";
import ReviewDesk from "../Components/desk/ReviewDesk";
import PolicyText from "../Components/Ulits/PolicyText";
const allreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    padding: "7px",
  };
  return (
    <div className="d-flex justify-content-center w-100 align-items-center flex-column">
      <h3 style={{ color: "#0F4392" }}>All reviews</h3>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
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
      </div>
      <div
        onClick={() => {
          setOpen(true);
        }}
        style={{
          backgroundColor: "#DD1717",
          width: "130px",
          height: "25px",
          right: "-52px",
          top: "19%",
          transform: "rotate(-90deg)",
          textAlign: "center",
        }}
        className="position-absolute d-flex justify-content-center align-items-center"
      >
        <p style={{ color: "white", fontSize: "12px !important" }}>
          Write Review
        </p>
      </div>
      <div
        style={{
          background: "white",
          borderRadius: "5px",
          width: "70%",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <PolicyText
          title="1- Introduction"
          text='
This policy outlines the terms and conditions of use for our pharmacy website ("www.well-medic.com"). By accessing and using the Website, you agree to be bound by the terms and conditions described herein. We reserve the right to amend or update this policy at any time, and it is your responsibility to check for updates periodically. Your continued use of the Website signifies your acceptance of any changes to this policy.
...
'
        />

        <PolicyText
          title="2- Privacy and Security"
          text="
We take the privacy and security of our users very seriously. Our Privacy Policy describes the types of personal information we collect, how we use it, and how we protect it. By using the Website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy."
        />

        <PolicyText
          title="3- User Accounts and Access"
          text="
To access certain features of the Website, users may be required to create an account. Users are responsible for maintaining the confidentiality of their account credentials and are solely responsible for all activities occurring under their account. We reserve the right to suspend or terminate any account without notice if we suspect unauthorized use, fraud, or any other violation of this policy."
        />

        <PolicyText
          title="4- Prescription and Over-the-Counter Medications"
          text="
Prescription medications may only be ordered by users with a valid prescription from a licensed healthcare provider. Users are required to provide accurate and complete prescription information when placing an order. We reserve the right to verify any prescription before processing an order. Over-the-counter medications and other products may be purchased without a prescription, subject to any restrictions imposed by applicable laws and regulations."
        />

        <PolicyText
          title="5- Order Processing and Shipping"
          text="
All orders are subject to availability and confirmation of the order price. We reserve the right to cancel any order if there are any issues with the order or if the requested products are out of stock. Shipping and delivery times may vary depending on the destination and other factors. We will not be held responsible for any delays in delivery due to circumstances beyond our control, such as natural disasters, strikes, or customs clearance issues."
        />

        <PolicyText
          title="6-  Returns and Refunds"
          text="
Our returns and refunds policy outlines the conditions under which products may be returned or refunded. Please review this policy before placing an order."
        />

        <PolicyText
          title="7- Limitation of Liability"
          text="
To the maximum extent permitted by law, we disclaim all warranties, express or implied, regarding the accuracy, reliability, or completeness of the information and content on the Website. We shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the Website or its content."
        />

        <PolicyText
          title="8- Intellectual Property"
          text="
All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of the pharmacy or its content suppliers and is protected by international copyright laws. The reproduction, modification, distribution, or transmission of any content without our express written permission is strictly prohibited."
        />

        <PolicyText
          title="9- Governing Law"
          text="
This policy and any disputes relating to it or the use of the Website shall be governed by and construed in accordance with the laws of the jurisdiction in which the pharmacy is registered.
"
        />

        <PolicyText
          title="10- Contact Information"
          text="
If you have any questions or concerns regarding this policy or the Website, please contact our customer support team using the contact information provided on the Website."
        />
      </div>
    </div>
  );
};

export default allreview;
