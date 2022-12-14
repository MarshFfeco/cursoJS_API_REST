import multer from 'multer';

import multerConfig from '../config/multer';

import Fotos from '../models/Fotos';

const upload = multer(multerConfig).single('foto');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          Errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Fotos.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (error) {
        return res.status(400).json({
          Errors: ['Aluno não existe!'],
        });
      }
    });
  }
}

export default new PhotoController();
