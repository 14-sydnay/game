import React from 'react'

import { ProfileForm } from 'Components/ProfileForm'
import { useAuth } from 'Hooks/auth'

export const ProfilePage: React.FC = () => {
  const auth = useAuth()

  if (!auth.user) {
    return 'Вы не авторизованы'
  }
  return (
    <main className="mx-auto mt-10">
      {auth.user && (
        <>
          <h1 className="text-color-primary mb-6 text-center text-4xl text-primary">Профиль</h1>
          <ProfileForm user={auth.user} />
        </>
      )}
    </main>
  )
}
