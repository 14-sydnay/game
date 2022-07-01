import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary'

import { AuthProvider, RequireAuth } from 'hooks/auth'
import { NotFound } from 'pages/404'
import { ForumPage } from 'pages/Forum'
import { ThreadPage } from 'pages/Forum/Thread'
import { GamePage } from 'pages/Game'
import { HomePage } from 'pages/Home'
import { LeaderboardPage } from 'pages/Leaderboard'
import { LoginPage } from 'pages/Login'
import { RegisterPage as RegistrationPage } from 'pages/Register'
import { ChangePasswordPage } from 'pages/User/ChangePassword'
import { ProfilePage } from 'pages/User/Profile'

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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/game"
            element={
              <RequireAuth>
                <GamePage />
              </RequireAuth>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <RequireAuth>
                <LeaderboardPage />
              </RequireAuth>
            }
          />
          <Route path="/forum">
            <Route
              index
              element={
                <RequireAuth>
                  <ForumPage />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <ThreadPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="/changepassword"
            element={
              <RequireAuth>
                <ChangePasswordPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
})
