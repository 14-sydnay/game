import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { FormValues } from './type'

yup.setLocale({
  mixed: {
    default: 'Введите корректные данные',
  },
  string: {
    min: 'Введите сообщение перед отправкой',
  },
})

const schema = yup.object().shape({
  comment: yup.string().min(1),
})

export const TextArea: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className="textarea textarea-bordered mt-8 w-full"
        placeholder="Введите сообщение"
        {...register('comment')}
      />
      <p className="h-4 text-error">{errors.comment?.message}</p>
      <button type="submit" className="btn btn-primary float-right">
        Отправить
      </button>
    </form>
  )
}
