import React from "react";
import FormImpl from "react-bootstrap/esm/Form";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

import useLocalStorage from "./hooks/useLocalStorage";

import { ContactContextProvider } from "./context/ContactContext";
import { ChatsContextProvider } from "./context/ChatsContext";

const App = () => {
  const [userId, setUserId] = useLocalStorage("userId");
  const dashBoard = (userId) => {
    return (
      <ContactContextProvider>
        <ChatsContextProvider>
          <Dashboard userId={userId} />
        </ChatsContextProvider>
      </ContactContextProvider>
    );
  };

  return (
    <>{userId ? dashBoard(userId) : <Login onUserIdSubmit={setUserId} />}</>
  );
};

export default App;
