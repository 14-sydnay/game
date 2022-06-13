import React from 'react'

import { RegisterForm } from 'components/RegisterForm'

export const RegisterPage: React.FC = () => {
  return (
    <main className="mx-auto mt-10">
      <h1 className="text-color-primary mb-6  text-center text-4xl text-primary">Регистрация</h1>
      <RegisterForm />
    </main>
  )
}
