const db = require("../config/db.config.js");

const averias = db.averias;
const vehiculos = db.vehiculos;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  
  vehiculo.create(data);*/

  console.log(req.body);
  await averias
    .create(req.body)
    .then(() => {
      res.status(200).send({ message: " Registrado" });
      vehiculos
        .update({ idEstado: false }, { where: { unidad: req.body.unidad } })
        .then(() => {
          res.status(200).send();
        });
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
  await averias
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
  console.log(req.params.id);

  /*.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        { model: db.modelos },
        { model: db.categorias },
        { model: db.users },
        { model: db.falla },
      ],
    })*/

  await averias
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
exports.findBy = async (req, res) => {
  console.log("ghika", req.params.id);

  await averias
    .findAll({
      where: {
        id: req.params.id,
      },
      // include: [{ model: db.supervisores }, { model: db.sectores }],
      //include: [{ model: db.sectores }],
    })
    .then((resp) => {
      resp = resp.map(function (ele) {
        return {
          chofer: ele.chofer,
          observacion: ele.observacion,
          idUsuario: ele.idUsuario,
          fecha: ele.fecha,
          hora: ele.hora,
          averia: ele.averia,
          unidad: ele.unidad,
          idEstado: ele.idEstado,
        };
      });
      res.status(200).send(resp);
      console.log(resp);
    })
    .catch((err) => {
      res.send(err).status(404);
    });

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
};

exports.update = (req, res) => {
  const id = req.params.id;

  console.log(req.body.unidad);
  averias.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo averia :" + req.body.averia,
    });
  });

  vehiculos
    .update(
      { idEstado: req.body.idEstado },
      { where: { unidad: req.body.unidad } }
    )
    .then(() => {
      res.status(200).send();
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  averias
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
