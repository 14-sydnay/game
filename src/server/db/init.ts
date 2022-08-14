import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import { authorModel, authorIndex } from './author'
import {
  messageModel,
  messageIndex,
  messageReactionModel,
  messageReactionIndex,
} from './message'
import { userThemeModel, userThemeIndex } from './theme'
import { threadModel } from './thread'

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres', //process.env.POSTGRES_HOST,
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'game',
  dialect: 'postgres',
}

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions)

// Инициализируем модели
export const UserThemeModel = sequelize.define('userTheme', userThemeModel, {
  indexes: [...userThemeIndex],
})

export const ThreadModel = sequelize.define('thread', threadModel, {})
export const MessageModel = sequelize.define('message', messageModel, {
  indexes: [...messageIndex],
})
export const MessageReactionModel = sequelize.define(
  'messageReaction',
  messageReactionModel,
  {
    indexes: [...messageReactionIndex],
  }
)
export const AuthorModel = sequelize.define('author', authorModel, {
  indexes: [...authorIndex],
})
ThreadModel.hasMany(MessageModel, { foreignKey: 'threadId' })
ThreadModel.belongsTo(AuthorModel, { foreignKey: 'authorId' })
MessageModel.belongsTo(AuthorModel, { foreignKey: 'authorId' })
MessageModel.hasMany(MessageReactionModel, {
  as: 'reactions',
  foreignKey: 'messageId',
})
MessageReactionModel.belongsTo(MessageModel, { foreignKey: 'messageId' })

export async function dbConnect(): Promise<void> {
  try {
    await sequelize.authenticate() // Проверка аутентификации в БД
    await sequelize.sync() // Синхронизация базы данных
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log('OPTIONS', sequelizeOptions)

    console.error('Unable to connect to the database:', error)
  }
}
