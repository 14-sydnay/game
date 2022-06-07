import React from 'react'

import { ProfileForm } from 'Components/ProfileForm'
import { useAuth } from 'Hooks/auth'

export const ProfilePage: React.FC = () => {
  const auth = useAuth()

  if (!auth.user) {
    return 'Вы не авторизованы'
  }
  return <main>{auth.user && <ProfileForm user={auth.user} />}</main>
}
