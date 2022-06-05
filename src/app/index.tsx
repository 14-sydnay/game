import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from 'Pages/Home'
import LoginPage from 'Pages/Login'
import GamePage from 'Pages/Game'
import ProfilePage from 'Pages/User/Profile'
import ChangePasswordPage from 'Pages/User/ChangePassword'

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  )
}
