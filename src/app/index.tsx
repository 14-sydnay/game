import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProvideAuth } from 'Hooks/auth'
import { GamePage } from 'Pages/Game'
import { HomePage } from 'Pages/Home'
import { LoginPage } from 'Pages/Login'
import { RegisterPage as RegistrationPage } from 'Pages/Register'
import { ChangePasswordPage } from 'Pages/User/ChangePassword'
import { ProfilePage } from 'Pages/User/Profile'

export const App: React.FC<{}> = () => {
  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/changepassword" element={<ChangePasswordPage />} />

          {/* <Route path="/user">
            <Route path="profile" element={<ProfilePage />} />
            <Route path="changepassword" element={<ChangePasswordPage />} />
          </Route> */}
        </Routes>
      </Router>
    </ProvideAuth>
  )
}
