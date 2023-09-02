import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import PasswordInput from "../passwordInput/PasswordInput";
import { useFormik } from "formik";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { login } from "../../../api/UserService";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const resp = login(values);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <AiTwotoneMail className="input-icons" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && !!formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <RiLockPasswordLine className="input-icons" />
          <PasswordInput
            placeholder="Enter password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && !!formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
            error={formik.errors.password}
          />
        </Form.Group>
        <Button variant="primary" className="p-2 w-100" type="submit">
          Login
        </Button>
        <Button
          as={Link}
          to="register"
          className="p-2 w-100 bg-light text-dark mt-4 mb-3"
        >
          New Register
        </Button>
      </Form>
      <div className="forgot-password">
        <a href="/">Forgot Password</a>
      </div>
      <div className="login-fa-go">
        <a href="https://tr-tr.facebook.com/" className="facebook-icon">
          <BsFacebook />
        </a>
        <a href="https://www.google.com" className="google-icon">
          <AiFillGoogleCircle />
        </a>
      </div>
    </div>
  );
};

export default Login;
