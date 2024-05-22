import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Main from './Main.jsx'
/*import Home from "./components/Home.jsx"
import TestCard from './components/TestCard.jsx'*/
import { Home, SignUp, TestCard, Login, MakeSet, CardSet } from './components/export.js'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>       
        <Route path="/testCard" element={<TestCard />}/>
        <Route path="/signup" element={<Home/>}/>
        <Route path="/login" element={<Home/>}/>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/makeset" element={<MakeSet/>}/>
        <Route path="/cardset/:setId" element={<CardSet/>}/>
        
      </Routes>
    </BrowserRouter>
    
  )
}
const UnloggedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>       
        <Route path="/testCard" element={<TestCard />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home"  element={<Login/>}/>
        
        
      </Routes>
    </BrowserRouter>
  )
}
const renderApp = (isLoggedIn) => {
  if (isLoggedIn)
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
  else
  root.render(
<React.StrictMode>
    <UnloggedApp/>
</React.StrictMode>)
}
renderApp(localStorage.getItem('loggedUser') != null)
export default renderApp

