const db = require("../config/db.config.js");

const vehiculo = db.vehiculos;

// FETCH all Users

exports.post = async (req, res) => {
  console.log(req.body);
  vehiculo
    .create({
      placa: req.body.placa,
    })
    .then(() => {
      res.status(200).send({ message: "Vehiculo Registrada" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = async (req, res) => {
  await vehiculo
    .findAll({
      include: [
        { model: db.modelo },
        { model: db.categorias },
        { model: db.users },
        { model: db.falla },
      ],
    })
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
  await vehiculo
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
exports.findByIdPlaca = async (req, res) => {
  console.log(req.params.id);
  await vehiculo
    .findAll({
      where: {
        placa: req.params.id,
      },
    })
    .then((resp) => {
      console.log(resp);
      res.status(200).send(resp);
      /* if (!resp) {
        res
          .status(400)
          .send({ message: "No se Encuentra Registro Con ese ID" });
      } else {
        res.status(200).send(resp);
      }
    })
    .catch((err) => {
      res.send(err).status(404);
    });*/
    });
};
exports.update = (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  vehiculo
    .update(
      {
        categorias: req.body.categorias,
      },
      { where: { id: req.params.id } }
    )
    .then(() => {
      res.status(200).send({
        message: "Se actualizo :" + req.body.categorias,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  vehiculo
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
