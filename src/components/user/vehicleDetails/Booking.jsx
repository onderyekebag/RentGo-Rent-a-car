import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Alert,
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
import { combineDateAndTime } from "../../../helpers/functions/DateTime";
import { isVehicleAvailable } from "../../../api/ReservationService";
const Booking = () => {
  const [loading, setloading] = useState(false);
  const { isUserLogin } = useAppSelector((state) => state.auth);
  const { vehicle } = useAppSelector((state) => state.reservation);

  const [totalPrice, setTotalPrice] = useState(0);
  const [vehicleAvailable, setVehicleAvailable] = useState(false);

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

  const handleAvailability = async () => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formik.values;

    const dto = {
      carId: vehicle.id,
      pickUpDateTime: combineDateAndTime(pickUpDate, pickUpTime),
      dropOffDateTime: combineDateAndTime(dropOffDate, dropOffTime),
    };
    setloading(true);
    try {
      const resp = await isVehicleAvailable(dto);
      const { available, totalPrice } = resp.data;
      setTotalPrice(totalPrice);
      setVehicleAvailable(available);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <Container>
      {!isUserLogin && (
        <Alert variant="primary">
          Please login first to check the car is available.
        </Alert>
      )}
      <Form noValidate onSubmit={formik.handleSubmit}>
        <fieldset disabled={!isUserLogin || vehicleAvailable}>
          <Row>
            <Col>
              <FloatingLabel label="Pick-up location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pick-up location"
                  {...formik.getFieldProps("pickUpLocation")}
                  isInvalid={isInvalid("pickUpLocation")}
                  isValid={isValid("pickUpLocation")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpLocation}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Drop-off location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pick-up location"
                  {...formik.getFieldProps("dropOffLocation")}
                  isInvalid={isInvalid("dropOffLocation")}
                  isValid={isValid("dropOffLocation")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOffLocation}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Pick-up date">
                <Form.Control
                  type="date"
                  placeholder="Pick-up date"
                  {...formik.getFieldProps("pickUpDate")}
                  isInvalid={isInvalid("pickUpDate")}
                  isValid={isValid("pickUpDate")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpDate}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Pick-up Time">
                <Form.Control
                  type="time"
                  step={900}
                  min="07:00"
                  max="23:00"
                  {...formik.getFieldProps("pickUpTime")}
                  isInvalid={isInvalid("pickUpTime")}
                  isValid={isValid("pickUpTime")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpTime}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Drop-off date">
                <Form.Control
                  type="date"
                  placeholder="Drop-off date"
                  {...formik.getFieldProps("dropOffDate")}
                  isInvalid={isInvalid("dropOffDate")}
                  isValid={isValid("dropOffDate")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOffDate}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Drop-off Time">
                <Form.Control
                  type="time"
                  placeholder="Time"
                  {...formik.getFieldProps("dropOffTime")}
                  isInvalid={isInvalid("dropOffTime")}
                  isValid={isValid("dropOffTime")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOffTime}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="available">
            <Col md={8} className="total-price">
              Total Price : $ {totalPrice}
            </Col>
            <Col md={4} className="total-button">
              <Button
                variant="primary"
                type="button"
                disabled={loading}
                className="w-100"
                onClick={handleAvailability}
              >
                {loading && <Spinner animation="border" size="sm" />} Check
                Availability
              </Button>
            </Col>
          </Row>
        </fieldset>
        <fieldset className={`mt-2 ${vehicleAvailable ? "d-block" : "d-none"}`}>
          <Row className="booking-card">
            <Col>
              <FloatingLabel label="Card number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Card number"
                  as={InputMask}
                  mask="9999-9999-9999-9999"
                  {...formik.getFieldProps("cardNo")}
                  isInvalid={isInvalid("cardNo")}
                  isValid={isValid("cardNo")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cardNo}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Name on card" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name on card"
                  {...formik.getFieldProps("nameOnCard")}
                  isInvalid={isInvalid("nameOnCard")}
                  isValid={isValid("nameOnCard")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nameOnCard}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Expire date" className="mb-3">
                <Form.Control
                  type="text"
                  as={InputMask}
                  mask="99/99"
                  placeholder="Expire date"
                  {...formik.getFieldProps("expireDate")}
                  isInvalid={isInvalid("expireDate")}
                  isValid={isValid("expireDate")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.expireDate}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="CVC" className="mb-3">
                <Form.Control
                  type="text"
                  as={InputMask}
                  mask="999"
                  placeholder="CVC"
                  {...formik.getFieldProps("cvc")}
                  isInvalid={isInvalid("cvc")}
                  isValid={isValid("cvc")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cvc}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <FormCheck
            type="checkbox"
            id="contract"
            label="I have read and aggree the contract"
            {...formik.getFieldProps("contract")}
            isInvalid={isInvalid("contract")}
            isValid={isValid("contract")}
          />
          <ButtonGroup className="mt-3 w-100">
            <Button
              variant="secondary"
              type="button"
              disabled={loading}
              onClick={() => setVehicleAvailable(false)}
            >
              Edit
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading && <Spinner animation="border" size="sm" />} Book Now
            </Button>
          </ButtonGroup>
        </fieldset>
      </Form>
    </Container>
  );
};

export default Booking;
