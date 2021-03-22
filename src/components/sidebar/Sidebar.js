import React,{useState} from "react";
import { Tab, Nav } from "react-bootstrap";

import Chats from '../chats/Chats';
import Contacts from '../contacts/Contacts';

const CHATS = 'chats';
const CONTACTS = 'contacts';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(CHATS);
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item >
            <Nav.Link eventKey={CHATS}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
            <Tab.Pane eventKey={CHATS}>
                <Chats/>
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS}>
                <Contacts/>
            </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
