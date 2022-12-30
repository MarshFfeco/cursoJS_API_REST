import Sequelize from 'sequelize';
import database from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Fotos from '../models/Fotos';

const models = [Aluno, User, Fotos];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
