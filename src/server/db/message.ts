import { Sequelize, DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

export const messageModel: ModelAttributes<Model> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  threadId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  authorId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  created: {
    type: DataType.DATE,
    field: 'createdAt',
  },
  text: {
    type: DataType.STRING,
  },
  replyMessageId: {
    type: DataType.INTEGER,
    allowNull: true,
  },
}

export const messageIndex = [
  {
    unique: true,
    fields: ['threadId'],
  },
]

export const messageReactionModel: ModelAttributes<Model> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  created: {
    type: DataType.DATE,
    field: 'createdAt',
  },
  messageId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
}

export const messageReactionIndex = [
  {
    unique: true,
    fields: ['messageId', 'userId'],
  },
]
