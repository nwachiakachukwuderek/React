import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Componets/Login'
import Profile from './Componets/Profile'
import UserContext from './context/UserContent'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React video for context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
