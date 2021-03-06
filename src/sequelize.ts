import { Sequelize } from 'sequelize-typescript'

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../db/config.json')[env]

export const sequelize = new Sequelize({
  repositoryMode: true,
  database: config.database,
  username: config.username,
  password: config.password,
  dialect: config.dialect,
  models: [__dirname + '/models'],
})
