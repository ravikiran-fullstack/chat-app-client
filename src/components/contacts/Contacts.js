import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Contacts.css";

const Contacts = ({ contacts }) => {
  return (
    <ListGroup variant="flush">
      {contacts.map((contact, index) => {
        return (
          <ListGroup.Item key={contact.userId}>
            {contact.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Contacts;
