import { DataType, Model, Table, Column } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { UserTheme } from '../theme'

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
