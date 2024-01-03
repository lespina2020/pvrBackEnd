const db = require("../config/db.config.js");

const rutas = db.rutas;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  
  vehiculo.create(data);*/

  console.log(req.body);
  await rutas
    .create(req.body)
    .then(() => {
      res.status(200).send({ message: " Registrado" });
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
  await rutas
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

  await rutas
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
exports.findByRuta = async (req, res) => {
  console.log("ghika", req.params.id);

  await rutas
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
          ruta: ele.ruta,
          codRuta: ele.codRuta,
          idSupervisor: ele.idSupervisor,
          idSector: ele.idSector,
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
exports.findByCodRuta = async (req, res) => {
  await rutas
    .findAll({
      where: {
        codRuta: req.params.id,
      },
    })
    .then((resp) => {
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
  rutas.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo Chofer :" + req.body.ruta,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  rutas
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
