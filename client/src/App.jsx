import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ChatPage from './pages/ChatPage.jsx'


const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/auth" element={< AuthPage/>} />
        <Route path="/profile" element={< ProfilePage/>} />
        <Route path="/chat/:id" element={< ChatPage/>} />
      </Routes>
      </div>


  
  );
}

export default App;
