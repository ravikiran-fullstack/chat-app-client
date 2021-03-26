import React, { useState, useEffect, useContext, createContext } from "react";

import { ContactContext } from "./ContactContext";

export const ChatsContext = createContext();

export const ChatsContextProvider = (props) => {
  const chatsStored = JSON.parse(localStorage.getItem("chat-app-chats"));
  const [selectedChatsIndex, setSelectedChatsIndex] = useState(0);
  const userChats = chatsStored || [];
  const [contacts, setContacts] = useContext(ContactContext);
  const [chats, setChats] = useState(userChats);

  const updateChats = (recepients) => {
    const storedChats = [...chats, { recepients, messages: [] }];
    setChats(storedChats);
  };

  const updateChatsIndex = (index) => {
    setSelectedChatsIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("chat-app-chats", JSON.stringify(chats));
  }, [chats]);

 

  const formattedChats = chats.map((chat, index) => {
    const recepients = chat.recepients.map((recepient) => {
      const contact = contacts.find((contact) => contact.id === recepient);
      const name = (contact && contact.name) || recepient;
      return { userId: recepient, name };
    });
    const selected = index === selectedChatsIndex
    return { ...chat, recepients, selected };
  });

  console.log('formattedChats', formattedChats);
  const value = {
    chats: formattedChats,
    updateChats,
    selectChatIndex: updateChatsIndex,
  };

  return (
    <ChatsContext.Provider value={value}>
      {props.children}
    </ChatsContext.Provider>
  );
};
