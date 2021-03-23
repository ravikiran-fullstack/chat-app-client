import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { ChatsContext } from "../../context/ChatsContext";
import { ContactContext } from "../../context/ContactContext";

const Chats = () => {
  const [chats, setChats] = useContext(ChatsContext);
  const [contacts, setContacts] = useContext(ContactContext);

  const recepientsName = chats.map((chat) => {
    const recepients = chat.recepients.map((recepient) => {
        const contact = contacts.find(contact => contact.userId === recepient)
        return contact;
    });
    console.log('recepients in chats', recepients);
    return recepients;
  });

  console.log('all chats recepientsName', recepientsName);

  return (
    <ListGroup variant="flush">
      {recepientsName.map((r, index) => {
        return <ListGroup.Item key={index}>{r.map(contact => <a href="#">{`${contact.name} `}</a>)}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default Chats;
