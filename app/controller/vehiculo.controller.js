const db = require("../config/db.config.js");

const vehiculo = db.vehiculos;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  vehiculo.create(data);*/

  console.log(req.body);

  await vehiculo

    .create(req.body)
    .then(() => {
      res.status(200).send({ message: "Vehiculo Registrada" });
    })
    .catch((err) => {
      console.log(err);

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
  await vehiculo
    .findAll({
      include: [
        { model: db.modelos },
        { model: db.categorias },
        //   { model: db.users },
        // { model: db.falla },
      ],
    })
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
exports.findLista = async (req, res) => {
  await vehiculo
    .findAll({ attributes: ["id", "unidad"] })
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.send(err).status();
    });
  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  });*/
};
exports.findAllId = async (req, res) => {
  await vehiculo

    .findAll({
      where: {
        id: req.params.id,
      },
      include: [
        { model: db.modelos },
        { model: db.categorias },
        // { model: db.users },
        // { model: db.falla },
      ],
    })
    .then((resp) => {
      // Send all users to Client
      //res.status(200).send({hola:"go"});

      console.log(res);

      resp = resp.map(function (ele) {
        console.log(ele.modelo.modelo);

        return {
          placa: ele.placa,
          marca: ele.modelo.modelo,
          tipoUnidad: ele.categoria.categorias,
          unidad: ele.unidad,
          idEstado: ele.idEstado,
        };
      });

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
  console.log(req.params.id);

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
     catch((err) => {
      res.send(err).status(404);
    });*/
    });
};
exports.findByIdUnidad = async (req, res) => {
  await vehiculo
    .findAll({
      where: {
        unidad: req.params.id,
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
  const id = req.params.id;
  console.log(req.body.idEstado);
  vehiculo.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo :" + req.body.placa,
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
