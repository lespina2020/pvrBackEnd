const db = require("../config/db.config.js");

const ayudantes = db.ayudantes;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  vehiculo.create(data);*/
  await ayudantes
    .create(req.body)
    .then(() => {
      res.status(200).send({ message: "Ayudante Registrado" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  /*Categoria.create({
    categorias: req.body.categorias,
  })
    .then((user) => {
      res.status(200).send({ message: "Vehiculo Registrada" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });*/
};

exports.findAll = async (req, res) => {
  await ayudantes
    .findAll()
    .then((resp) => {
      // Send all users to Client
      //res.status(200).send({hola:"go"});

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
  await ayudantes
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
exports.findByIdChofer = async (req, res) => {
  await ayudantes
    .findAll({
      where: {
        cedula: req.params.id,
      },
    })
    .then((resp) => {
      console.log(resp);
      resp = resp.map(function (ele) {
        return {
          id: ele.id,
          nombreApellido: ele.nombreApellido,
          cedula: ele.cedula,
          telefono: ele.telefono,
        };
      });
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
  const id = req.params.id;
  ayudantes.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo Ayudante :" + req.body.nombreApellido,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  ayudantes
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
