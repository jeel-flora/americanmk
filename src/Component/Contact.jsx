import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Toast,
} from "react-bootstrap";
import Header from "./Header";
import contact from "../Assets/images/contact.png";
import Footer from "./Footer";
import { useState } from "react";
import nameicon from "../Assets/images/name.svg";
import number from "../Assets/images/number.svg";
import email from "../Assets/images/email.svg";
import { Helmet } from "react-helmet-async";

function Contact({ heading = "Contact Us", imgSrc }) {
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const imageToShow = imgSrc || contact;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.fullName.trim()) {
  //     newErrors.fullName = "Full name is required";
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Email is invalid";
  //   }

  //   if (!formData.message.trim()) {
  //     newErrors.message = "Message is required";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    //    if (name === "phoneNumber") {
    //   // Allow only numbers
    //   const onlyNums = value.replace(/[^0-9]/g, "");
    //   setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    // } else {
    //   setFormData((prev) => ({ ...prev, [name]: value }));
    // }
    const { name, value } = e.target;

    // Prevent non-numeric input in phoneNumber
    if (name === "phoneNumber" && /[^0-9]/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when valid input is provided
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Here you would typically send the data to your backend
    //   console.log("Form submitted:", formData);
    // if (validateForm()) {
    //   // Submit logic here
    //   console.log("Form submitted successfully");
    // } else {
    //   console.log("Validation failed");
    // }
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     phoneNumber: "",
    //     message: "",
    //   });
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form or API call here
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setShow(true);
    }
  };
  return (
    <>
     <Helmet>
      <title>Contact Us - americanmk</title>
    </Helmet>
      <div className="contact">
        <Header />
        <Row className="space d-flex justify-content-center align-items-center mt-5 ">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex justify-content-center card-div"
          >
            <Card className="contact-card" style={{ width: "621px" }}>
              <p className="contact-heading1">{heading}</p>
              <p style={{ color: "#9F9F9F" }}>
                Get in touch with our support team.
              </p>
              <Form.Label className="lable mt-3" htmlFor="basic-url">
                Full Name <span style={{ color: "red" }}>*</span>
              </Form.Label>
              {/* <InputGroup className="mb-3" style={{ position: "relative" }}>
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="fullName"
                   value={formData.fullName}
                  placeholder="Your Name"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                />
                <img src={nameicon} className="textfiled-img" alt="" />
              </InputGroup> */}
              <InputGroup className="mb-3">
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="fullName"
                  value={formData.fullName}
                  placeholder="Your Name"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                  autoComplete="off"
                />
                <InputGroup.Text className="text-img">
                  <img src={nameicon} className="" alt="" />
                </InputGroup.Text>
              </InputGroup>
              {errors.fullName && (
                <div className="text-danger mb-2" style={{fontSize:"13px"}}>{errors.fullName}</div>
              )}
              <Form.Label className="lable" htmlFor="basic-url">
                Email <span style={{ color: "red" }}>*</span>
              </Form.Label>
              {/* <InputGroup className="mb-3">
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                />
              </InputGroup> */}
              <InputGroup className="mb-3">
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                  autoComplete="off"
                />
                <InputGroup.Text className="text-img">
                  <img src={email} className="" alt="" />
                </InputGroup.Text>
              </InputGroup>
              {errors.email && (
                <div className="text-danger mb-2" style={{fontSize:"13px"}}>{errors.email}</div>
              )}
              <Form.Label className="lable" htmlFor="basic-url">
                Phone Number
              </Form.Label>
              {/* <InputGroup className="mb-3">
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                />
              </InputGroup> */}
              <InputGroup className="mb-3">
                <Form.Control
                  className="custom-placeholder"
                  id="basic-url"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  aria-describedby="basic-addon3"
                  onChange={handleChange}
                  autoComplete="off"
                />
                <InputGroup.Text className="text-img">
                  <img src={number} className="" alt="" />
                </InputGroup.Text>
              </InputGroup>
              <Form.Label className="lable" htmlFor="basic-url">
                Message <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className="custom-placeholder"
                  placeholder="Type Your Message"
                  name="message"
                  value={formData.message}
                  as="textarea"
                  aria-label="With textarea"
                  onChange={handleChange}
                  style={{ height: "90px" }}
                />
              </InputGroup>
              {errors.message && (
                <div className="text-danger mb-2" style={{fontSize:"13px"}}>{errors.message}</div>
              )}
              <Button onClick={handleSubmit} className="btn nav-btn mt-4 w-100">
                <span>Submit</span>
              </Button>
            </Card>
          </Col>
          <Col lg={5} md={12} sm={12} className="text-center">
            <img
              src={imageToShow}
              className="contact-img float-animation"
              alt="Contact Us"
            />
          </Col>
        </Row>
        <Row className="space" style={{ margin: "100px 0px" }}>
          <Col>
            <Card className="contact-card content" style={{ width: "100%" }}>
              <h2 className="contact-heading">Contact Us </h2>
              <div className="content-div">
                <ul className="mb-0 ">
                  <li className="title">Customer Support</li>
                </ul>
                <p className="contact-p">
                  For any assistance or inquiries, our dedicated customer
                  support team is here to help.
                </p>
              </div>
              <div className="content-div ">
                <ul className="mb-0">
                  <li className="title">Email:</li>
                </ul>
                <p className="contact-p">
                  <a
                    href="mailto:admin@americanmk.com"
                    style={{ color: "#07b25c" }}
                  >
                    admin@americanmk.com
                  </a>
                </p>
                <p className="contact-p">
                  Feel free to reach out to us via email for prompt assistance
                  with any questions or concerns you may have.
                </p>
              </div>
              <div className="content-div">
                <ul className="mb-0">
                  <li className="title">Our Mission</li>
                </ul>
                <p className="contact-p">
                  At americanmk, our mission is to provide an immersive
                  gaming experience that brings joy and entertainment to players
                  worldwide. We strive to create innovative games that captivate
                  and inspire, fostering a community built on creativity,
                  passion, and fun.
                </p>
                <p className="contact-p">
                  For partnership opportunities, media inquiries, or general
                  feedback, please use the email address provided above. We
                  value your input and look forward to hearing from you!
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <div className={`toast-container-custom ${show ? "show" : ""}`}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            bg="success"
          >
            <Toast.Header closeButton={true}>
              <strong className="me-auto">Success</strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              Form submitted successfully!
            </Toast.Body>
          </Toast>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
