import React, { useState } from "react";
import "./profile.scss";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import {
  BsFillPersonVcardFill,
  BsPersonSquare,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask-next";
import { MdLocationPin } from "react-icons/md";
import { TbZip } from "react-icons/tb";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import PasswordInput from "../../common/passwordInput/PasswordInput";
import UpdatePassword from "./UpdatePassword";
import { useAppSelector } from "../../../store/Hooks";
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const { firstName, lastName, email, phoneNumber, address, zipCode } = user;
  const initialValues = {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    zipCode,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Plese enter a valid email address")
      .required("Please enter an email address"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .required("Please re-enter your password")
      .oneOf([Yup.ref("password")], "Password fields dosen't match"),
    phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    address: Yup.string().required("Please enter your address"),
    zipCode: Yup.string().required("Please enter your zip code"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  return (
    <Container className="profile">
      <div className="head">
        <h1>Edit Profile</h1> <BsPersonSquare />
      </div>
      <div className="update-profile">
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <BsFillPersonVcardFill className="input-icons" />
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("firstName")}
                    isValid={
                      formik.touched.firstName && !formik.errors.firstName
                    }
                    isInvalid={
                      formik.touched.firstName && !!formik.errors.firstName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <BsFillPersonVcardFill className="input-icons" />
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("lastName")}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                    isInvalid={
                      formik.touched.lastName && !!formik.errors.lastName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <BsPhoneVibrateFill className="input-icons" />
                  <Form.Control
                    type="text"
                    as={ReactInputMask}
                    mask="(999) 999-9999"
                    {...formik.getFieldProps("phoneNumber")}
                    isValid={
                      formik.touched.phoneNumber && !formik.errors.phoneNumber
                    }
                    isInvalid={
                      formik.touched.phoneNumber && !!formik.errors.phoneNumber
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <MdLocationPin className="input-icons" />
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("address")}
                    isValid={formik.touched.address && !formik.errors.address}
                    isInvalid={
                      formik.touched.address && !!formik.errors.address
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <TbZip className="input-icons" />
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("zipCode")}
                    isValid={formik.touched.zipCode && !formik.errors.zipCode}
                    isInvalid={
                      formik.touched.zipCode && !!formik.errors.zipCode
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.zipCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <AiTwotoneMail className="input-icons" />
                  <Form.Control
                    type="email"
                    {...formik.getFieldProps("email")}
                    isValid={formik.touched.email && !formik.errors.email}
                    isInvalid={formik.touched.email && !!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              {loading && <Spinner animation="border" size="sm" />} Update
            </Button>
          </Row>
        </Form>
        <UpdatePassword />
      </div>
    </Container>
  );
};

export default Profile;
