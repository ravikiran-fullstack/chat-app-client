import React, { useState, useContext } from "react";
import { Modal, Button, Form, Checkbox } from "react-bootstrap";

import { ContactContext } from "../../context/ContactContext";
import {ChatsContext} from "../../context/ChatsContext";

const ChatModal = ({ closeModal }) => {
  const [contacts, setConctacts] = useContext(ContactContext);
  
  const [chats, setChats] = useContext(ChatsContext);

  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(id)) {
        return prevSelectedContactIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevSelectedContactIds, id];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChats(selectedContactIds);
    closeModal();
  }

  return (
    <Modal.Header closeButton className="d-flex flex-column">
      Select Contacts for Chat
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => {
            return (
              <Form.Group controlId={contact.userId} key={contact.userId}>
                <Form.Check
                  type="checkbox"
                  label={contact.name}
                  name={contact.name}
                  checked={selectedContactIds.includes(contact.userId)}
                  onChange={() => handleCheckboxChange(contact.userId)}
                />
              </Form.Group>
            );
          })}
          <Button type="submit">Start Chat</Button>
        </Form>
      </Modal.Body>
    </Modal.Header>
  );
};

export default ChatModal;
