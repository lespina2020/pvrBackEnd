const db = require("../config/db.config.js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const env = require("../config/env.js");
const base64 = require("base64-img");

const User = db.users;

// FETCH all Users
exports.findAll = async (req, res) => {
  await User.findAll()
    .then((resp) => {
      if (!resp) {
        throw new Error("User profile not found"); //reject promise with error
      }
      return res.status(200).json(resp);
    })
    .catch(function (err) {
      console.log(err); //User profile not found
      return res.status(404).json({ err }); //return your error msg
    });

  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  });*/
};

exports.findByIdCedula = async (req, res) => {
  await User.findAll({
    where: {
      cedula: req.params.id,
    },
  })
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};
exports.findByIdUser = async (req, res) => {
  await User.findAll({
    where: {
      email: req.params.id,
    },
  })
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};

// Find a User by Id
exports.findById = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Update a User
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
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      firma: req.body.firma,
      cedula: req.body.cedula,
      password: bcrypt.hashSync(req.body.password, 8),
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res
      .status(200)
      .send({ message: "updated successfully a user with id = " + id });
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  }).then(() => {
    res
      .status(200)
      .send({ message: "deleted successfully a user with id = " + id });
  });
};

exports.signup = (req, res) => {
  //Check Email

  let { firmaImg } = req.body;
  const cedula = req.body.cedula;

  base64.img(firmaImg, "./public", cedula, function (err, filepath) {
    req.body.firma = filepath.substring(7);
  });

  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
    } else {
      //create User
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tipoUsuario: req.body.tipoUsuario,
        email: req.body.email,
        cedula: req.body.cedula,
        firma: req.body.firma,
        password: bcrypt.hashSync(req.body.password, 8),
      })
        .then((user) => {
          res
            .status(200)
            .send({ message: "User was registered successfully!" });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
  });
};

exports.signin = (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  User.findAll({
    where: {
      email: req.body.email.trim(),
    },
  })
    .then((user) => {
      console.log(user);

      if (!user) {
        return res.send({
          message: "Usuario no Encontrado.",
          accessToken: null,
        });
      } else {
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user[0].dataValues.password
          //(res[0].dataValues.password
        );

        if (!passwordIsValid) {
          return res.send({
            accessToken: null,
            message: "Password Invalido!",
          });
        }

        var token = jwt.sign(
          { id: user[0].dataValues.id },
          env.JWT_ENCRYPTION,

          {
            expiresIn: "24h", // 24 hours  60 * 60 * 24
          }
        );

        res.status(200).send({
          id: user[0].dataValues.id,
          lastname: user[0].dataValues.lastname,
          firstname: user[0].dataValues.firstname,
          //._previousDataValues.tipousuario.user
          //  tipoUsuario: user[0]._previousDataValues.tipousuario.nameuser,
          tipoUsuario: user[0].dataValues.tipoUsuario,
          email: user[0].dataValues.email,
          firma: user[0].dataValues.firma,
          //  ruta: user[0]._previousDataValues.tipousuario.ruta,
          // menu: user[0]._previousDataValues.tipousuario.menu,
          accessToken: token,
        });
      }
    })
    .catch(() => {
      return res.send({
        message: "Usuario no Encontrado.",
        accessToken: null,
      });
    });
};
