import React, {useState, useContext, useEffect} from 'react'
import {ChatsContext} from '../../context/ChatsContext';

const OpenChat = () => {
    const chatsContext = useContext(ChatsContext)
    const [selectedChat, setSelectedChat] = useState('');
    console.log(chatsContext.chats);
    useEffect(()=> {
        const chat = chatsContext.chats.find(chat => chat.selected === true)
        setSelectedChat(chat);
    }, [])
    return (
        <div>
            {/* {selectedChat && <p>{selectedChat.selected}</p>} */}
            {selectedChat && <p>testing {selectedChat.recepients[0].userId}</p>}   
        </div>
    )
}

export default OpenChat
