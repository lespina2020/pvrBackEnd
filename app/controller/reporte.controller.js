const db = require("../config/db.config.js");
const { Op } = require("sequelize");

const salida = db.salidas;
const vehiculo = db.vehiculos;
const averias = db.averias;

// FETCH all Users

exports.findAll = async (req, res) => {
  /*SELECT *, JSON_EXTRACT(pvr, "$.isChofer") AS choferes FROM salidas*/

  let fechaInicio = req.body.fechaInicio,
    fechaFinal = req.body.fechaFinal,
    where = {},
    status = req.body.status,
    unidad = req.body.unidad;

  if (
    (status === true || status === false) &&
    fechaInicio &&
    fechaFinal &&
    unidad === undefined
  ) {
    where = {
      status,
      fecha: {
        [Op.between]: [fechaInicio, fechaFinal],
      },
    };
  } else {
    where = {
      unidad,
      status,
      fecha: {
        [Op.between]: [fechaInicio, fechaFinal],
      },
    };
  }
  console.log(where);
  /*const where = {
    from: {
      $between: ["2023-09-10", "2023-09-10"],
    },
  };*/

  await salida
    .findAll({
      where,
    })
    .then((resp) => {
      res.status(200).send(resp);

      console.log(resp);

      //date.toLocaleDateString();
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};
exports.findAllCondicion = async (req, res) => {
  let fechaInicio = req.body.fechaInicio,
    fechaFinal = req.body.fechaFinal,
    //entrada = [],
    //condicionEstado = [],
    // where = {},
    condicion = req.body.condicion,
    estado = req.body.estado;

  // console.log(fechaInicio, fechaFinal, condicion, estado);
  /*const where = {
    from: { 
      $between: ["2023-09-10", "2023-09-10"],
    },
  };*/

  /*
  const JSON_KEY = (field,key)=>`JSON_EXTRACT(${field},"$.${key}")`;
const res = model.findAll({
  attributes: [[JSON_KEY('data','name'),'name']]  
})

  */

  await salida
    .findAll({
      where: {
        /* fecha: {
          // [Op.between]: [fechaInicio, fechaFinal],
          "pvr.isRuta.codRuta": "09",
        },*/
        //"pvr.isRuta.codRuta": "09",

        fecha: {
          [Op.between]: [fechaInicio, fechaFinal],
        },

        pvr: {
          isVariableCondicionEntrada: {
            [condicion]: estado,
          },
        },
      },
      /* where: {
        "pvr.isVariableSalida.value": 75,
      },
      /* fecha: {
          [Op.between]: [fechaInicio, fechaFinal],
        },*/
      // "pvr.isUnidad.value": "Belgium",
      //},
    })
    .then((resp) => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};

exports.findAllAveria = async (req, res) => {
  let fechaInicio = req.body.fechaInicio,
    /*       "Sistema de Motor",
              "Sistema de Neumatico",
              "Sistema Hidraulico",
              "Carroceria",*/

    sistemaMotor = 0,
    sistemaNeumatico = 0,
    sistemaHidraulico = 0,
    Carroceria = 0,
    fechaFinal = req.body.fechaFinal;

  console.log(fechaInicio, fechaFinal);
  /*const where = {
    from: {
      $between: ["2023-09-10", "2023-09-10"],
    },
  };*/

  await averias
    .findAll({
      where: {
        fecha: {
          [Op.between]: [fechaInicio, fechaFinal],
        },
      },
    })
    .then((resp) => {
      console.log(resp);

      for (let i in resp) {
        // salidas.push(JSON.parse(res.data[i].pvr));
        //entrada.push(JSON.parse(resp[i].dataValues));

        if (resp[i].dataValues.averia === "Sistema de Motor") {
          sistemaMotor++;
        } else if (resp[i].dataValues.averia === "Sistema de Neumatico") {
          sistemaNeumatico++;
        } else if (resp[i].dataValues.averia === "Sistema Hidraulico") {
          sistemaHidraulico++;
        } else if (resp[i].dataValues.averia === "Carroceria") {
          Carroceria++;
        }
      }

      res.status(200).send({
        sistemaMotor,
        sistemaNeumatico,
        sistemaHidraulico,
        Carroceria,
      });
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};

exports.findAllOperatividad = async (req, res) => {
  console.log(req.body.idEstado);

  let operativas = 0,
    inoperativa = 0;

  await vehiculo.findAll().then((resp) => {
    console.log(resp.dataValues);

    for (let i in resp) {
      // salidas.push(JSON.parse(res.data[i].pvr));
      //entrada.push(JSON.parse(resp[i].dataValues));

      console.log(resp[i].dataValues.idEstado);

      if (resp[i].dataValues.idEstado === true) {
        operativas++;
      } else {
        inoperativa++;
      }

      //JSON.parse(res.data[i].pvr);
    }

    // console.log(operativas, inoperativa);
    res.status(200).send({ operativas, inoperativa });

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
    });



  /*await vehiculo
    .findAll({
      where: {
        idEstado: req.body.idEstado,
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
