const db = require("../config/db.config.js");

const modelos = db.modelos;

// FETCH all Users

exports.post = async (req, res) => {
  modelos
    .create({
      modelo: req.body.modelos,
    })
    .then((user) => {
      res.status(200).send({ message: "Modelo Registrada" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = async (req, res) => {
  await modelos
    .findAll()
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
  await modelos
    .findByPk(req.params.id)
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
  const id = req.params.id;
  Categoria.update(
    {
      modelo: req.body.modelos,
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).send({
      message: "Se actualizo :" + req.body.modelos,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  modelos
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
