import React, { useState, createContext, useEffect } from "react";

export const ContactContext = createContext();

export const ContactProvider = (props) => {
  const contactStored = JSON.parse(localStorage.getItem('chat-app-contacts'));
  const [contacts, setContacts] = useState(contactStored);
  
  const updateContact = (newContact) => {
    const storedContacts = [...contacts, newContact];
    setContacts(storedContacts);
  }

  useEffect(()=> {
    console.log('updating stored contacts');
    localStorage.setItem('chat-app-contacts', JSON.stringify(contacts));
  }, [contacts]);

  // { name: "kittu", userId:"kittu" },
  // { name: "mowgli", userId: "mowgli" }
  return (
    <ContactContext.Provider value={[contacts, updateContact]}>
      {props.children}
    </ContactContext.Provider>
  );
};
