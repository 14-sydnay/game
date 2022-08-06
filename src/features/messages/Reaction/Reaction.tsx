import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'

import { Props } from './types'

export const Reaction: React.FC<Props> = ({ messageId }) => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className={'invisible'} />

      <HeartIcon className="swap-off h-8 w-8" />

      <HeartIcon className="swap-on h-8 w-8 fill-current text-red-600" />
    </label>
  )
}
