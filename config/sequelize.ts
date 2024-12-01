import {Sequelize} from 'sequelize'
const sequelize: Sequelize = new Sequelize({
  database: process.env.PG_SQL_DB_NAME ?? 'nomad',
  username: process.env.PG_SQL_DB_USER ?? 'postgres',
  password: process.env.PG_SQL_DB_PW ?? '',
  host: process.env.PG_SQL_DB_HOST ?? 'localhost',
  port: parseInt(process.env.PG_SQL_DB_PORT ?? '5432'),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      prefer: true
    }
  },
  logging: (): boolean => process.env.NODE_ENV === 'development'
})
export default sequelize