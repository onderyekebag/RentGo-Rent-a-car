import React, { useState } from "react";
import { Button, Row, Col, Spinner, Form } from "react-bootstrap";
import PasswordInput from "../../common/passwordInput/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Please enter your current password"),
    newPassword: Yup.string()
      .required("Please enter your new password")
      .min(8, "Must be at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/\d+/, "One number"),
    confirmNewPassword: Yup.string()
      .required("Please re-enter your new password")
      .oneOf([Yup.ref("newPassword")], "Password fields doesn't match"),
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
  });

  return (
    <>
      <h4 className="mt-4">Update Password</h4>
      <Row className="mt-2">
        <Col>
          <Form.Label>Old password</Form.Label>
          <PasswordInput />
        </Col>
        <Col>
          <Form.Label>New Password</Form.Label>
          <PasswordInput />
        </Col>
        <Col>
          <Form.Label>Confirm Password</Form.Label>
          <PasswordInput />
        </Col>
        <Button
          variant="primary"
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || loading}
        >
          {loading && <Spinner animation="border" size="sm" />} Update
        </Button>
      </Row>
    </>
  );
};

export default UpdatePassword;
