import React from 'react'

import { LogoutButton } from 'components/LogoutButton'
import { ProfileForm } from 'components/ProfileForm'
import { useAuth } from 'hooks/auth'

export const ProfilePage: React.FC = () => {
  const auth = useAuth()

  return (
    <main className="mx-auto mt-10">
      {
        <>
          <h1 className="text-color-primary mb-6 text-center text-4xl text-primary">
            Профиль
          </h1>
          <ProfileForm user={auth.user!}>
            <LogoutButton />
          </ProfileForm>
        </>
      }
    </main>
  )
}
