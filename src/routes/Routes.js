import { Router } from 'express';

import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';
import alunoController from '../controllers/alunoController';
import photoController from '../controllers/photoController';

import loginRequire from '../middlewares/loginRequire';

class Routes {
  constructor() {
    this.router = new Router();

    this.homeRoutes();
    this.userRoutes();
    this.tokenRoutes();
    this.alunoRoutes();
    this.photoRoutes();
  }

  homeRoutes() {
    this.router.get('/', homeController.index);
  }

  userRoutes() {
    // Nâo deveria existir
    this.router.get('/user/index', userController.index);
    // this.router.get('/user/:id', userController.show);

    this.router.post('/user/', userController.store);
    this.router.put('/user/', loginRequire, userController.update);
    this.router.delete('/user/', loginRequire, userController.delete);
  }

  alunoRoutes() {
    this.router.get('/aluno/', alunoController.index);
    this.router.get('/aluno/:id', alunoController.show);
    this.router.post('/aluno/', loginRequire, alunoController.store);
    this.router.put('/aluno/:id', loginRequire, alunoController.update);
    this.router.delete('/aluno/:id', loginRequire, alunoController.delete);
  }

  photoRoutes() {
    this.router.post(/photo/, loginRequire, photoController.store);
  }

  tokenRoutes() {
    this.router.post('/tokens/', tokenController.store);
  }
}
export default new Routes().router;
