import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { ProvideAuth } from 'hooks/auth'
import { ForumPage } from 'pages/Forum'
import { ThreadPage } from 'pages/Forum/Thread'
import { GamePage } from 'pages/Game'
import { HomePage } from 'pages/Home'
import { LeaderboardPage } from 'pages/Leaderboard'
import { LoginPage } from 'pages/Login'
import { RegisterPage as RegistrationPage } from 'pages/Register'
import { ChangePasswordPage } from 'pages/User/ChangePassword'
import { ProfilePage } from 'pages/User/Profile'
import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary'

export const App: React.FC<{}> = withErrorBoundary(() => {
  const [error, resetError] = useErrorBoundary((error, errorInfo) => {
    console.error(errorInfo)
  })

  if (error) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div>Возникла ошибка: {error.message}</div>
        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            resetError()
          }}
        >
          Сбросить ошибку
        </button>
      </div>
    )
  }

  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="forum">
              <Route index element={<ForumPage />} />
              <Route path=":id" element={<ThreadPage />} />
            </Route>
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
})
