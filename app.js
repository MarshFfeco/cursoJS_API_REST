import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';

import homeRoute from './src/routes/HomeRoute';
import useRoute from './src/routes/UserRoute';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/user', useRoute);
  }
}

export default new App().app;
