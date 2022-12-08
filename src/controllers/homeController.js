class HomeController {
  index(req, res) {
    res.json({
      'Tudo Certo': 'hello World',
    });
  }
}

export default new HomeController();
