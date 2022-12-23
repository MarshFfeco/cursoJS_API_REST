import { Router } from 'express';

import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';

import loginRequire from '../middlewares/loginRequire';

class Routes {
  constructor() {
    this.router = new Router();

    this.homeRoutes();
    this.userRoutes();
    this.tokenRoutes();
  }

  homeRoutes() {
    this.router.get('/', homeController.index);
  }

  userRoutes() {
    this.router.get('/user/index', userController.index);
    this.router.get('/user/:id', userController.show);

    this.router.post('/user/', userController.store);
    this.router.put('/user/', loginRequire, userController.update);
    this.router.delete('/user/', loginRequire, userController.delete);
  }

  tokenRoutes() {
    this.router.post('/tokens/', tokenController.store);
  }
}
export default new Routes().router;
