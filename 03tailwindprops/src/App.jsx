import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'  
import Footer from './components/Footer.jsx'  

let myObj = {
  name: "Hitesh",
  age: 30,
  address: {
    city: "Lagos",
    country: "Nigeria"    
  }
}

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

  return (
    <>
    <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with tailwind</h1>
    <Card username="hitesh" post='Staff Engineer ' myArr={newArr}/>
    <Card username="Akachukwu"/>
    <Footer />
    </>
  )
}

export default App
 