import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import { userThemeModel } from '../../models/db/theme'
import { authorModel } from './author'
import { messageModel, threadModel } from './thread'

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'game',
  dialect: 'postgres',
}

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions)

// Инициализируем модели
export const UserThemeModel = sequelize.define('userTheme', userThemeModel, {})

export const ThreadModel = sequelize.define('thread', threadModel, {})
export const MessageModel = sequelize.define('message', messageModel, {})
export const AuthorModel = sequelize.define('author', authorModel, {})
ThreadModel.hasMany(MessageModel, { foreignKey: 'threadId' })
ThreadModel.belongsTo(AuthorModel, { foreignKey: 'authorId' })
MessageModel.belongsTo(AuthorModel, { foreignKey: 'authorId' })

export async function dbConnect(): Promise<void> {
  try {
    await sequelize.authenticate() // Проверка аутентификации в БД
    await sequelize.sync() // Синхронизация базы данных
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
