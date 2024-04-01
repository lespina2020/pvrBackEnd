const db = require("../config/db.config.js");
const base64 = require("base64-img");
//const { getPagination, getPagingData } = require("../config/helper.js");
const { Op } = require("sequelize");

const choferes = db.choferes;

// FETCH all Users

exports.post = async (req, res) => {
  /*let data = {};
  Object.keys(req.body).forEach(function (key, index) {
    data[key] = req.body[key];
  });

  vehiculo.create(data);*/

  //let newObj = {};

  let { firmaImg } = req.body;
  const cedula = req.body.cedula;

  base64.img(firmaImg, "./public", cedula, function (err, filepath) {
    req.body.firma = filepath.substring(7);
    /*const pathArr = filepath.split("/");

    let fileName = pathArr[pathArr.length - 1];*/
  });

  await choferes
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
  await choferes
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
/*exports.findAllGet = async (req, res) => {
  /*const { page, size } = req.query;

  await choferes
    .findAndCountAll({
      limit: size,
      offset: page * size,
    })
    .then((resp) => {
      // Send all users to Client
      //res.status(200).send({hola:"go"});

      console.log(resp);

      res.status(200).send(resp);

      /*   for (let i in res) {
        console.log(`${res[i].dataValues.tipousuario.ruta}`);
      } 

      //console.log(res[0]._previousDataValues.tipousuario.user);
      //   console.log(res[0]._previousDataValues.tipousuario.ruta);
    })
    .catch((err) => {
      res.send(err).status();
    });
  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  }); 

  const { page, size, title } = req.query;
  var condition = title
    ? { nombreApellido: { [Op.like]: `%${title}%` } }
    : null;

  console.log(page, size, title);

  const { limit, offset } = getPagination(page, size);

  await db["choferes"]
    .findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      //console.log(data);

      const response = getPagingData(data, page, limit);

      console.log(response);

      res.status(200).send(response);

      // console.log(res);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error en paginacion",
      });
    });
}; */
exports.findById = async (req, res) => {
  await choferes
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
  await choferes
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
          licencia: ele.licencia,
          certificadoMedico: ele.certificadoMedico,
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
exports.update = async (req, res) => {
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

  await choferes.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.status(200).send({
      message: "Se actualizo Chofer :" + req.body.nombreApellido,
    });
  });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  choferes
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
