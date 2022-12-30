import Sequelize, { Model } from 'sequelize';

export default class Fotos extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Not empty!',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Not empty!',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
