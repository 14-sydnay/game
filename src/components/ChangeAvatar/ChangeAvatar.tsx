import React, { FC } from 'react'

import { Props } from './type'
import { Avatar } from 'components/Avatar'
import { userService } from 'services/user'

export const ChangeAvatar: FC<Props> = ({ url }) => {
  const handleFileChange = async (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement
    if (target && target.files?.length) {
      await userService.changeAvatar(target.files[0])
    }
  }

  return (
    <div className="w-26 mt-10 flex flex-col">
      <Avatar url={url}></Avatar>
      <div className="mt-5 flex items-center justify-center">
        <input
          name="avatar"
          type="file"
          accept=".png"
          className="btn btn-link"
          onChange={handleFileChange}
        ></input>
      </div>
    </div>
  )
}
