const db = require("../config/db.config.js");
const Empresa = db.empresas;
exports.findAll = async (req, res) => {
  console.log(req.body);

  await Empresa.findAll()
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
exports.createOne = async (req, res) => {
  console.log(req.body);
  await Empresa.create({
    nombreEmpresa: req.body.nombreEmpresa,
    telefonoEmpresa: req.body.telefonoEmpresa,
    rifEmpresa: req.body.rifEmpresa,
    emailEmpresa: req.body.emailEmpresa,
    direccionEmpresa: req.body.direccionEmpresa,
  }).then(() => {
    res.status(200).send({
      message: "Empresa Registrada",
    });
  });
};
