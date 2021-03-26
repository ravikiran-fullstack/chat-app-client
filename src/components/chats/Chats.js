import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { ChatsContext } from "../../context/ChatsContext";
import { ContactContext } from "../../context/ContactContext";

import './Chats.css';

const Chats = () => {
  const chatContext = useContext(ChatsContext);

  const [contacts, setContacts] = useContext(ContactContext);
  let recepientsName = null;

  // if (chatContext.chats !== null) {
  //   recepientsName = chatContext.chats.map((chat) => {
  //     const recepients = chat.recepients.map((recepient) => {
  //       const contact = contacts.find(
  //         (contact) => contact.userId === recepient
  //       );
  //       return contact;
  //     });
  //     console.log("recepients in chats", recepients);
  //     return recepients;
  //   });
  //   console.log("all chats recepientsName", recepientsName);
  // }

  return (
    <ListGroup variant="flush" className="individualChat">
      {chatContext.chats &&
        chatContext.chats.map((chat, index) => {
          return (
            <ListGroup.Item key={index} onClick={()=> chatContext.selectChatIndex(index)} className={`${chat.selectedChatsIndex === index ? 'selectedChat': ''}`}>
              {chat.recepients.map((contact) => (
                <a key={contact.id} href="#">{`${contact.name} `}</a>
              ))}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default Chats;
