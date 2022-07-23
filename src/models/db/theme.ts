import { DataType, Model, Table, Column } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

import { UserTheme } from '../theme'
//import { sequelize } from '../init';

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

/* export const UserThemeModel = sequelize.define('UserThemeModel', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  }); */
