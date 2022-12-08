import { Router } from 'express';
import homeController from '../controllers/homeController';

class HomeRoute {
  constructor() {
    this.router = new Router();

    this.routes();
  }

  routes() {
    this.router.get('/', homeController.index);
  }
}

export default new HomeRoute().router;
