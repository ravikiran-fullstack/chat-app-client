import React from 'react'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

import useLocalStorage from './hooks/useLocalStorage'; 

const App = () => {
  const [userId, setUserId] = useLocalStorage('userId');
  return (
    <>
      {userId ? <Dashboard userId={userId}/> : <Login onUserIdSubmit={setUserId}/>}
    </>
  )
}

export default App
