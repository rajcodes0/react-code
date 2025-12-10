import React from 'react'
import UserContextProvider from './Context/UsercontextProvider'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import "./index.css";
function App() {
  return (
    <UserContextProvider>
    <h1>React with Chai and Share is important</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  
  )
}

export default App