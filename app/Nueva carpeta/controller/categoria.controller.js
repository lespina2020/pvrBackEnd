const db = require("../config/db.config.js");

const Categoria = db.categorias;

// FETCH all Users

exports.post = async (req, res) => {
  console.log(req.body);
  Categoria.create({
    categorias: req.body.categorias,
  })
    .then((user) => {
      res.status(200).send({ message: "Categoria Registrada" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = async (req, res) => {
  await Categoria.findAll()
    .then((resp) => {
      // Send all users to Client
      //res.status(200).send({hola:"go"});
      console.log(resp);
      res.status(200).send(resp);

      /*   for (let i in res) {
        console.log(`${res[i].dataValues.tipousuario.ruta}`);
      }*/

      //console.log(res[0]._previousDataValues.tipousuario.user);
      //   console.log(res[0]._previousDataValues.tipousuario.ruta);
    })
    .catch((err) => {
      res.send(err).status();
    });
  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  });*/
};
exports.findById = async (req, res) => {
  await Categoria.findByPk(req.params.id)
    .then((resp) => {
      if (!resp) {
        res
          .status(400)
          .send({ message: "No se Encuentra Registro Con ese ID" });
      } else {
        res.status(200).send(resp);
      }
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};
exports.update = (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  Categoria.update(
    {
      categorias: req.body.categorias,
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).send({
      message: "Se actualizo :" + req.body.categorias,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Categoria.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send({ message: "Registro Eliminado" });
  });
};
