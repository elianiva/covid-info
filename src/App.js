import React from "react"
import "./styles/App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { IndonesiaProvider } from "./context/IndonesiaContext"

function App() {
  return (
    <IndonesiaProvider>
      <div className="App">
        <Navbar />
        <Header />
        <div className="cards"></div>
      </div>
    </IndonesiaProvider>
  )
}

export default App
