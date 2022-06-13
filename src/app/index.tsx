import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProvideAuth } from 'hooks/auth'
import { ForumPage } from 'pages/Forum'
import { GamePage } from 'pages/Game'
import { HomePage } from 'pages/Home'
import { LoginPage } from 'pages/Login'
import { RegisterPage as RegistrationPage } from 'pages/Register'
import { ChangePasswordPage } from 'pages/User/ChangePassword'
import { ProfilePage } from 'pages/User/Profile'

export const App: React.FC<{}> = () => {
  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="changepassword" element={<ChangePasswordPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
          {/* <Route path="/user">
            <Route path="profile" element={<ProfilePage />} />
            <Route path="changepassword" element={<ChangePasswordPage />} />
          </Route> */}
        </Routes>
      </Router>
    </ProvideAuth>
  )
}
