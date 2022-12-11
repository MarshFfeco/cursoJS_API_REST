import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        Errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        Errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).json({ Errors: ['Missing ID!'] }); }

      const user = await User.findByPk(id);

      if (!user) { return res.status(400).json({ Errors: ['Missing User!'] }); }

      const newDateUser = await user.update(req.body);

      return res.json(newDateUser);
    } catch (error) {
      return res.status(400).json({
        Errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).json({ Errors: ['Missing ID!'] }); }

      const user = await User.findByPk(id);

      if (!user) { return res.status(400).json({ Errors: ['Missing User!'] }); }

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        Errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
