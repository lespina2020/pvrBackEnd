const db = require("../config/db.config.js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const env = require("../config/env.js");

const User = db.users;
const TipoUsuario = db.TipoUsuarios;

// FETCH all Users
exports.findAll = async (req, res) => {
  await User.findAll()
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

// Find a User by Id
exports.findById = (req, res) => {
  User.findById(req.params.userId).then((user) => {
    res.send(user);
  });
};

// Update a User
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    },
    { where: { id: req.params.userId } }
  ).then(() => {
    res
      .status(200)
      .send({ message: "updated successfully a user with id = " + id });
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
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
        idUser: req.body.idUser,
        email: req.body.email,
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
  User.findAll({
    include: [{ model: db.TipoUsuarios }],
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      console.log(user[0]._previousDataValues.tipousuario);
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
            expiresIn: 60 * 60 * 24, // 24 hours
          }
        );

        res.status(200).send({
          id: user[0].dataValues.id,
          lastname: user[0].dataValues.lastname,
          firstname: user[0].dataValues.firstname,
          //._previousDataValues.tipousuario.user
          tipoUsuario: user[0]._previousDataValues.tipousuario.nameuser,
          email: user[0].dataValues.email,
          ruta: user[0]._previousDataValues.tipousuario.ruta,
          menu: user[0]._previousDataValues.tipousuario.menu,
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
