import React, { useState, createContext, useEffect } from "react";

export const ContactContext = createContext();

export const ContactContextProvider = (props) => {
  
  const contactStored = JSON.parse(localStorage.getItem('chat-app-contacts'));
  const userContacts = contactStored || [];
  const [contacts, setContacts] = useState(userContacts);
  
  const updateContact = (newContact) => {
    const storedContacts = [...contacts, newContact];
    setContacts(storedContacts);
  }

  useEffect(()=> {
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
