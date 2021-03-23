import React from "react";
import FormImpl from "react-bootstrap/esm/Form";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

import useLocalStorage from "./hooks/useLocalStorage";

import { ContactProvider } from "./context/ContactContext";
import { ChatsContextProvider } from "./context/ChatsContext";

const App = () => {
  const [userId, setUserId] = useLocalStorage("userId");
  const dashBoard = (userId) => {
    return (
      <ContactProvider>
        <ChatsContextProvider>
          <Dashboard userId={userId} />
        </ChatsContextProvider>
      </ContactProvider>
    );
  };

  return (
    <>{userId ? dashBoard(userId) : <Login onUserIdSubmit={setUserId} />}</>
  );
};

export default App;
