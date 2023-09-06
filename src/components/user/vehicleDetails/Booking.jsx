import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormCheck,
  Row,
  Spinner,
} from "react-bootstrap";
import InputMask from "react-input-mask-next";
import * as Yup from "yup";
import { useAppSelector } from "../../../store/Hooks";
const Booking = () => {
  const [loading, setloading] = useState(false);
  const { isUserLogin } = useAppSelector((state) => state.auth);

  const initialValues = {
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    cardNo: "",
    nameOnCard: "",
    expireDate: "",
    cvc: "",
    contract: false,
  };
  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter a pick-up location"),
    dropOffLocation: Yup.string().required("Enter a drop-off location"),
    pickUpDate: Yup.string().required("Select a pick-up date"),
    pickUpTime: Yup.string().required("Select a pick-up time"),
    dropOffDate: Yup.string().required("Select a drop-off date"),
    dropOffTime: Yup.string().required("Select a drop-off time"),
    cardNo: Yup.string().required("Please enter the card number"),
    nameOnCard: Yup.string().required("Please enter the name on the card"),
    expireDate: Yup.string()
      .required("Please enter the expire date")
      .test("month_check", "Enter a valid expire date (MM/YY)", (val) =>
        checkExpireDate(val)
      ),
    cvc: Yup.number()
      .typeError("Must be number")
      .required()
      .min(1)
      .max(999, "Please enter CVC"),
    contract: Yup.boolean().oneOf(
      [true],
      "Please read the contract and check the box"
    ),
  });

  const onSubmit = async (values) => {
    setloading(true);
    try {
    } catch (err) {
    } finally {
      setloading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  //? Formik isValid and isInValid
  const isInvalid = (field) => {
    return formik.touched[field] && formik.errors[field];
  };
  const isValid = (field) => {
    return formik.touched[field] && !formik.errors[field];
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <FloatingLabel label="Pick-up location" className="mb-3">
              <Form.Control type="text" placeholder="Pick-up location" />
              <Form.Control.Feedback type="invalid">
                is error
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Drop-off location" className="mb-3">
              <Form.Control type="text" placeholder="Pick-up location" />
              <Form.Control.Feedback type="invalid">
                is error
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label="Pick-up date">
              <Form.Control type="date" placeholder="Pick-up date" />
              <Form.Control.Feedback type="invalid">
                is error
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Pick-up Time">
              <Form.Control type="time" step={900} min="07:00" max="23:00" />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel label="Drop-off date">
              <Form.Control type="date" placeholder="Drop-off date" />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Drop-off Time">
              <Form.Control type="time" placeholder="Time" />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="available">
          <Col md={8} className="total-price">
            Total Price : $546
          </Col>
          <Col md={4} className="total-button">
            <Button
              variant="primary"
              type="button"
              disabled={loading}
              className="w-100"
            >
              {loading && <Spinner animation="border" size="sm" />} Check
              Availability
            </Button>
          </Col>
        </Row>

        <Row className="booking-card">
          <Col>
            <FloatingLabel label="Card number" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Card number"
                as={InputMask}
                mask="9999-9999-9999-9999"
              />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Name on card" className="mb-3">
              <Form.Control type="text" placeholder="Name on card" />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="CVC" className="mb-3">
              <Form.Control
                type="text"
                as={InputMask}
                mask="999"
                placeholder="CVC"
              />
              <Form.Control.Feedback type="invalid">err</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <FormCheck
          type="checkbox"
          id="contract"
          label="I have read and aggree the contract"
        />
        <ButtonGroup className="mt-3 w-100">
          <Button variant="secondary" type="button" disabled={loading}>
            Edit
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading && <Spinner animation="border" size="sm" />} Book Now
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Booking;
