import { Router } from 'express';

import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

class Routes {
  constructor() {
    this.router = new Router();

    this.homeRoutes();
    this.userRoutes();
  }

  homeRoutes() {
    this.router.get('/', homeController.index);
  }

  userRoutes() {
    this.router.get('/user/index', userController.index);
    this.router.post('/user/store', userController.store);
    this.router.get('/user/:id', userController.show);
    this.router.put('/user/:id/update', userController.update);
    this.router.delete('/user/:id/delete', userController.delete);
  }
}
export default new Routes().router;
