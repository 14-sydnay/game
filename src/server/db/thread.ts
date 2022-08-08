import { Sequelize, DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { Thread } from '../models/thread'

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
}
