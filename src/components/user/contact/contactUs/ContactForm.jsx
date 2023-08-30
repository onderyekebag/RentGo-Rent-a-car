import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    body: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Enter your email"),
    subject: Yup.string()
      .max(50, "The subject should be most 50 chars")
      .min(5, "The subject should be at least 5 chars")
      .required("Enter a subject"),
    body: Yup.string()
      .max(100, "The message should be most 50 chars")
      .min(10, "The message should be at least 10 chars")
      .required("Enter a message"),
  });

  const onSubmit = (values) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("name")}
          isInvalid={formik.touched.name && !!formik.errors.name}
          isValid={formik.touched.name && !formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && !!formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("subject")}
          isInvalid={formik.touched.subject && !!formik.errors.subject}
          isValid={formik.touched.subject && !formik.errors.subject}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.subject}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows="5"
          {...formik.getFieldProps("body")}
          isInvalid={formik.touched.body && !!formik.errors.body}
          isValid={formik.touched.body && !formik.errors.body}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.body}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="secondary"
        className="text-white"
        type="submit"
        disabled={!(formik.dirty && formik.isValid) || loading}
      >
        {loading && <Spinner animation="border" size="sm" />} Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
