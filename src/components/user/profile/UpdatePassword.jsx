import React, { useState } from "react";
import { Button, Row, Col, Spinner, Form } from "react-bootstrap";
import PasswordInput from "../../common/passwordInput/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppSelector } from "../../../store/Hooks";
import { updatePassword } from "../../../api/UserService";
import { toast } from "../../../helpers/functions/Swal";
const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

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
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmNewPassword: Yup.string()
      .required("Please re-enter your new password")
      .oneOf([Yup.ref("newPassword")], "Password fields doesn't match"),
  });
  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await updatePassword(values);
      toast("Your password was updated", "success");
      formik.resetForm();
    } catch (err) {
      toast(err.response.data.message, "error");
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
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mt-2">
          <Col>
            <Form.Label>Old password</Form.Label>
            <PasswordInput
              {...formik.getFieldProps("oldPassword")}
              isInvalid={
                formik.touched.oldPassword && formik.errors.oldPassword
              }
              isValid={formik.touched.oldPassword && !formik.errors.oldPassword}
              error={formik.errors.oldPassword}
            />
          </Col>
          <Col>
            <Form.Label>New Password</Form.Label>
            <PasswordInput
              {...formik.getFieldProps("newPassword")}
              isInvalid={
                formik.touched.newPassword && formik.errors.newPassword
              }
              isValid={formik.touched.newPassword && !formik.errors.newPassword}
              error={formik.errors.newPassword}
            />
          </Col>
          <Col>
            <Form.Label>Confirm Password</Form.Label>
            <PasswordInput
              {...formik.getFieldProps("confirmNewPassword")}
              isInvalid={
                formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword
              }
              isValid={
                formik.touched.confirmNewPassword &&
                !formik.errors.confirmNewPassword
              }
              error={formik.errors.confirmNewPassword}
            />
          </Col>
          <Button
            variant="primary"
            type="submit"
            disabled={!(formik.dirty && formik.isValid) || loading}
          >
            {loading && <Spinner animation="border" size="sm" />} Update
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default UpdatePassword;
