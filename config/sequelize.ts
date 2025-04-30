import {Sequelize} from 'sequelize'
const sequelize: Sequelize = new Sequelize({
  database: process.env.SQL_DB_NAME ?? 'nomad',
  username: process.env.SQL_DB_USER ?? 'postgres',
  password: process.env.SQL_DB_PW ?? '',
  host: process.env.SQL_DB_HOST ?? 'localhost',
  port: parseInt(process.env.SQL_DB_PORT ?? '5432'),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      prefer: true
    }
  },
  logging: (): boolean => process.env.NODE_ENV === 'development'
})
export default sequelize