import React, { useState, useContext } from "react";
import {ContactContext} from '../../context/ContactContext';

import { Tab, Nav, Button, Modal } from "react-bootstrap";

import Chats from "../chats/Chats";
import Contacts from "../contacts/Contacts";

import ChatModal from '../chatModal/ChatModal';
import ContactModal from '../contactModal/ContactModal';

const CHATS = "chats";
const CONTACTS = "contacts";

const Sidebar = ({ userId }) => {
  const [contacts, setConctacts] = useContext(ContactContext);

  const [activeTab, setActiveTab] = useState(CHATS);
  const [modalOpen, setModalOpen] = useState(false); 
  
  const closeModal = () => {
    setModalOpen(false);
  }
  const chatsActive = activeTab === CHATS;
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CHATS}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CHATS}>
            <Chats />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS}>
            <Contacts contacts={contacts}/>
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your useId: <span className="text-muted">{userId}</span>
        </div>

        <Button onClick={() => setModalOpen(true)} className="rounded-0">New {chatsActive ? "Chat" : "Contact"}</Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {chatsActive? <ChatModal closeModal={closeModal}/> : <ContactModal  closeModal={closeModal}/>}
      </Modal>
    </div>
  );
};

export default Sidebar;
