import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './Main.jsx'
import Home from "./components/Home.jsx"
import TestCard from './components/TestCard.jsx'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>
        <Route path="home" element={<Home/>}/>
        <Route path="testCard" element={<TestCard />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
