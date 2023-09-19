import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Spinner } from "react-bootstrap";
import {
  IoPersonCircleOutline,
  IoReturnDownBackOutline,
} from "react-icons/io5";
import { AiFillDelete, AiFillMail } from "react-icons/ai";
import "./contactMessage.scss";
import { deleteMessage, getMessage } from "../../../api/ContactService";
import { useNavigate, useParams } from "react-router-dom";
import { question, toast } from "../../../helpers/functions/Swal";
const ContactMessageEdit = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { messageId } = useParams();
  const navigate = useNavigate();
  const loadData = async () => {
    try {
      const resp = await getMessage(messageId);
      setMessage(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const removeMessage = async () => {
    setDeleting(true);
    try {
      const resp = await deleteMessage(messageId);
      toast("Message deleted", "success", 2000);
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
          removeMessage();
        }
      }
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="contact-message-edit">
      {loading ? (
        <Spinner animation="border" size="sm" />
      ) : (
        <>
          <div className="message-sender">
            <div className="message-header">
              <IoPersonCircleOutline />
              <div className="title">
                <h4>{message.name}</h4>
                <p>{message.email}</p>
              </div>
            </div>

            <div className="message-button-group">
              <ButtonGroup aria-label="Cancel and Delete">
                <Button variant="secondary" onClick={() => navigate(-1)}>
                  <IoReturnDownBackOutline />
                </Button>
                <Button variant="success" disabled>
                  <AiFillMail />
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  {deleting && <Spinner animation="grow" size="sm" />}
                  {!deleting && <AiFillDelete />}
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="message-box">
            <h4>{message.subject}</h4>
            <p>{message.body}</p>
            <em>{message.email}</em>
          </div>
        </>
      )}
    </Container>
  );
};

export default ContactMessageEdit;
