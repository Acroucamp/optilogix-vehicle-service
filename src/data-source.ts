import { DataSource } from 'typeorm';
import Vehicle from './models/Vehicle';

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.POSTGRES_HOST,
//   port: 5432,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   synchronize: true,
//   logging: false,
//   entities: [Vehicle],
//   subscribers: [],
//   migrations: [],
// });

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Vehicle],
  subscribers: [],
  migrations: [],
});
