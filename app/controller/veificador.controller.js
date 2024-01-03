const db = require("../config/db.config.js");
const base64 = require("base64-img");
const verificadores = db.verificadores;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  vehiculo.create(data);*/

  let { firmaImg } = req.body;
  const cedula = req.body.cedula;

  base64.img(firmaImg, "./public", cedula, function (err, filepath) {
    req.body.firma = filepath.substring(7);
  });

  await verificadores
    .create(req.body)
    .then(() => {
      res.status(200).send({ message: "Chofer Registrado" });
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
  await verificadores
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
  await verificadores
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
exports.findByIdVerificador = async (req, res) => {
  await verificadores
    .findAll({
      where: {
        cedula: req.params.id,
      },
    })
    .then((resp) => {
      resp = resp.map(function (ele) {
        return {
          nombreApellido: ele.nombreApellido,
          cedula: ele.cedula,
          telefono: ele.telefono,
          firma: ele.firma,
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
  let { firmaImg } = req.body;
  const cedula = req.body.cedula;

  if (firmaImg != false) {
    base64.img(firmaImg, "./public", cedula, function (err, filepath) {
      req.body.firma = filepath.substring(7);
      /*const pathArr = filepath.split("/");

    let fileName = pathArr[pathArr.length - 1];*/
    });
  }
  verificadores.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo el Verificador :" + req.body.nombreApellido,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  verificadores
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
