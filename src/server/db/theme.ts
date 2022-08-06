import { DataType, Model, Table, Column } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { UserTheme } from '../models/theme'

export const userThemeModel: ModelAttributes<Model, UserTheme> = {
  userId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  themeName: {
    type: DataType.STRING,
    allowNull: false,
  },
}

export const userThemeIndex = [
  {
    unique: true,
    fields: ['userId'],
  },
]
