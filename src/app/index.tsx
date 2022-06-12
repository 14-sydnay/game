import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProvideAuth } from 'Hooks/auth'
import { ForumPage } from 'Pages/Forum'
import { GamePage } from 'Pages/Game'
import { HomePage } from 'Pages/Home'
import { LoginPage } from 'Pages/Login'
import { ChangePasswordPage } from 'Pages/User/ChangePassword'
import { ProfilePage } from 'Pages/User/Profile'

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
          </Route>
        </Routes>
      </Router>
    </ProvideAuth>
  )
}
