import Aluno from '../models/Aluno';
import Fotos from '../models/Fotos';

class AlunoController {
  async index(req, res) {
    const allAlunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'desc'], [Fotos, 'id', 'DESC']],
      include: {
        model: Fotos,
        attributes: ['originalname', 'filename'],
      },
    });

    res.json(allAlunos);
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      return res.json({ novoAluno });
    } catch (e) {
      return res.status(400).json({
        Errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).json({ Errors: ['Missing ID!'] }); }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) { return res.status(400).json({ Errors: ['Missing Aluno!'] }); }

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        Errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).json({ Errors: ['Missing ID!'] }); }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'desc'], [Fotos, 'id', 'DESC']],
        include: {
          model: Fotos,
          attributes: ['url', 'originalname', 'filename'],
        },
      });

      if (!aluno) { return res.status(400).json({ Errors: ['Missing Aluno!'] }); }

      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        Errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).json({ Errors: ['Missing ID!'] }); }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) { return res.status(400).json({ Errors: ['Missing Aluno!'] }); }

      await aluno.destroy();

      return res.json({
        delet: true,
      });
    } catch (e) {
      return res.status(400).json({
        Errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
