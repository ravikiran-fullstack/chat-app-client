import React, { useState, useContext } from "react";
import {ContactContext} from '../../context/ContactContext';

import { Modal, Form, Button} from "react-bootstrap";

const ContactModal = ({ closeModal }) => {
  const [contacts, updateContact] = useContext(ContactContext);

  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  
  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateUserId = (e) => {
    setUserId(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //updateContact(prevContacts => [...prevContacts, {name, userId}])
    updateContact({name, userId});
    closeModal();
  }

  return (
    <Modal.Header closeButton>
      Create new Contact
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" value={name} onChange={updateName} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" value={userId} onChange={updateUserId} required/>
          </Form.Group>
          <Button type="submit">Add Contact</Button>
        </Form>
      </Modal.Body>
    </Modal.Header>
  );
};

export default ContactModal;
