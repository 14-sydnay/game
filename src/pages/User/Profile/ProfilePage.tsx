import React from 'react'

import { ProfileForm } from 'Components/ProfileForm'

export const ProfilePage: React.FC = () => {
  const stubUser = {
    id: 1,
    firstName: 'string',
    secondName: 'string',
    displayName: 'string',
    login: 'string',
    email: 'string',
    phone: 'string',
    avatar: 'string',
  }
  return (
    <main>
      <ProfileForm user={stubUser} />
    </main>
  )
}
