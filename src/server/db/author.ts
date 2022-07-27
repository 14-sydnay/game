import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { Author } from '../models/author'

export const authorModel: ModelAttributes<Model, Author> = {
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
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  avatarUrl: {
    type: DataType.STRING,
    allowNull: true,
  },
}
