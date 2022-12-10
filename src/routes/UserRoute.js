import { Router } from 'express';

import userController from '../controllers/userController';

class UserRoute {
  constructor() {
    this.router = new Router();

    this.useRoute();
  }

  useRoute() {
    this.router.get('/store', userController.store);
  }
}

export default new UserRoute().router;
