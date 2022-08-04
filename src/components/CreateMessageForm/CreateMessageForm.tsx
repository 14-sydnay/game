import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

import { FormValues, Props } from './type'
import { addThreadMessage } from 'features/messages/messagesSlice'
import { useAuth } from 'hooks/auth'

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

export const CreateMessageForm: React.FC<Props> = ({
  threadId,
  replyMessageId,
}) => {
  const dispatch = useDispatch()
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (user) {
      dispatch(
        addThreadMessage({
          text: data.comment,
          threadId,
          replyMessageId,
          userId: user.id,
          avatarUrl: user.avatar,
          authorName: user.displayName,
        })
      )
    }
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
