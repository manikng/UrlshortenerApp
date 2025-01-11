import { useState , useEffect } from 'react'

// import './App.css'
import axios from 'axios'
import Header from '../components/Header'
import Home from '../components/Home'

function App() {
  useEffect(()=>{
    axios.get("http://localhost:8000/api/test")
    .then((response)=>{
      console.log(response.data.message);
    })  

    
  },[])

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-44 flex flex-col items-center justify-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to <span className="text-yellow-300">Shrinku</span></h1>
        <p className="text-lg mb-8 text-white">A URL shortener platform</p>
      </div>
      <Home />
    </>
  )
}

export default App
