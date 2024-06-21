import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import router from './routes/routes';
import { AppDataSource } from './data-source';

export class VehicleApp {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeDatabase();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeRoutes() {
    this.app.use('/api/v1', router);
  }

  private initializeDatabase() {
    AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
      });
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.info(`Vehicle Service running on port ${process.env.PORT}`);
    });
  }
}
