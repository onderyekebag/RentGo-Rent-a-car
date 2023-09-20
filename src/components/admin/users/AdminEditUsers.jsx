import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask-next";
import { question, toast } from "../../../helpers/functions/Swal";
import { useFormik } from "formik";
import PasswordInput from "../../common/passwordInput/PasswordInput";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../../api/UserService";
import { useNavigate, useParams } from "react-router-dom";
import "./adminUser.scss";

const AdminEditUsers = () => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    roles: [],
    builtIn: false,
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Plese enter a valid email address")
      .required("Please enter an email address"),
    password: Yup.string()
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/\d+/, "One number"),
    phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    address: Yup.string().required("Please enter your address"),
    zipCode: Yup.string().required("Please enter your zip code"),
    roles: Yup.array().test(
      "role_check",
      "Please select a role",
      (val) => val.length > 0
    ),
  });

  const onSubmit = async (values) => {
    setUpdating(true);
    try {
      await updateUserById(userId, values);
      toast("User was updated.", "success");
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setUpdating(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const resp = await getUserById(userId);
      setInitialValues({ ...resp.data, password: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const removeUser = async () => {
    setDeleting(true);
    try {
      const resp = await deleteUserById(userId);
      toast("User was deleted", "success", 2000);
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = () => {
    question("Are you sure to delete?", "Deletion cannot be undone!").then(
      (result) => {
        if (result.isConfirmed) {
          removeUser();
        }
      }
    );
  };
  //! 1.30
  return (
    <Container className="admin-user-edit">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="grow" variant="danger" />
        </div>
      ) : (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <fieldset disabled={formik.values.builtIn}>
            <Row>
              <Row>
                <Col md={6} sm={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>

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

                    <Form.Control
                      type="text"
                      {...formik.getFieldProps("lastName")}
                      isValid={
                        formik.touched.lastName && !formik.errors.lastName
                      }
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

                    <Form.Control
                      type="text"
                      as={ReactInputMask}
                      mask="(999) 999-9999"
                      {...formik.getFieldProps("phoneNumber")}
                      isValid={
                        formik.touched.phoneNumber && !formik.errors.phoneNumber
                      }
                      isInvalid={
                        formik.touched.phoneNumber &&
                        !!formik.errors.phoneNumber
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

                    <Form.Control
                      type="email"
                      disabled
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
              <Row>
                <Col md={6} sm={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <PasswordInput
                      {...formik.getFieldProps("password")}
                      isValid={
                        formik.touched.password && !formik.errors.password
                      }
                      isInvalid={
                        formik.touched.password && !!formik.errors.password
                      }
                      error={formik.errors.password}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Label>Roles</Form.Label>
                  <Form.Check
                    label="Customer"
                    type="checkbox"
                    name="roles"
                    value="Customer"
                    checked={formik.values.roles.includes("Customer")}
                    onChange={formik.handleChange}
                    isValid={formik.touched.roles && !formik.errors.roles}
                    isInvalid={formik.touched.roles && !!formik.errors.roles}
                  />
                  <Form.Check
                    label="Administrator"
                    type="checkbox"
                    name="roles"
                    value="Administrator"
                    checked={formik.values.roles.includes("Administrator")}
                    onChange={formik.handleChange}
                    isValid={formik.touched.roles && !formik.errors.roles}
                    isInvalid={formik.touched.roles && !!formik.errors.roles}
                    feedback={formik.errors.roles}
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
            </Row>
          </fieldset>
          {formik.values.builtIn && (
            <Alert variant="warning">
              Built in accounts cannot be deleted or updated
            </Alert>
          )}
          <div className="text-end">
            <ButtonGroup className="gap-3 w-50 mt-5">
              <Button
                variant="secondary"
                className="text-white"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              {!formik.values.builtIn && (
                <>
                  <Button variant="success" disabled={updating} type="submit">
                    {updating && <Spinner animation="border" size="sm" />}
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting && <Spinner animation="border" size="sm" />}
                    Delete
                  </Button>
                </>
              )}
            </ButtonGroup>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default AdminEditUsers;
