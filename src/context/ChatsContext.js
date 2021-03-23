import React, {useState, useEffect, useContext, createContext} from 'react'

import {ContactContext} from './ContactContext';

export const ChatsContext = createContext();

export const ChatsContextProvider = (props) => {
    const [contacts, setContacts] = useContext(ContactContext);

    const chatsStored = JSON.parse(localStorage.getItem('chat-app-chats'));
    console.log('chatsStored', chatsStored);
    const [chats, setChats] = useState(chatsStored);

    const updateChats = (recepients) => {
        console.log('chats', chats);
        console.log('recipients...',recepients)
        const storedChats = [...chats, {recepients, messages: []}];
        console.log('storedChats', storedChats);
        setChats(storedChats);
    }

    useEffect(() => {
        console.log('updating stored contacts');
        localStorage.setItem('chat-app-chats', JSON.stringify(chats));
    }, [chats]);

    const formattedChats = chats.map(chat => {
        console.log('chat',chat, chat.recepients);
        const recepients = chat.recepients.map(recepient => {
            const contact = contacts.find(contact => contact.id === recepient);
            const name = (contact && contact.name) || recepient;   
            console.log('name, recepient',name, recepient);
            return {userId: recepient, name}
        })

        return {...chats, recepients}
    })

    return (
        <ChatsContext.Provider value={[chats, updateChats]}>
            {props.children}
        </ChatsContext.Provider>
    )
}
