import { Sequelize, DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { Message, Thread } from '../models/thread'

export const threadModel: ModelAttributes<Model, Thread> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataType.STRING,
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
  messageCount: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  lastMessage: {
    type: DataType.STRING,
    allowNull: false,
  },
}

export const messageModel: ModelAttributes<Model, Message> = {
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
  createdAt: {
    type: DataType.DATE,
    field: 'createdAt',
  },
  text: {
    type: DataType.STRING,
  },
}
