import { parseISO, formatDistanceToNow } from 'date-fns'
import React, { FC } from 'react'

import { Props } from './types'

export const TmeAgo: FC<Props> = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
