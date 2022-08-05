export type FormValues = {
  comment: string
}

export type OwnProps = {
  threadId: number
  replyMessageId?: number
  onCreated?: () => void
}
export type Props = OwnProps
