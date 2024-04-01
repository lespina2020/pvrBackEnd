const db = require("../config/db.config.js");
const { Op } = require("sequelize");
const { fecha } = require("../config/helper.js");
const { getPagination, getPagingData } = require("../config/helper.js");

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
  } else if (
    status === undefined &&
    fechaInicio === undefined &&
    fechaFinal === undefined
  ) {
    where = {
      unidad,
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
      attributes: [
        "unidad",
        "id",
        "placa",
        "chofer",
        "tipoUnidad",
        "idUsuario",
        "fecha",
        "status",
        "createdAt",
      ],
      where,
    })
    .then((resp) => {
      res.status(200).send(resp);

      //console.log(prueba);

      //date.toLocaleDateString();
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};
exports.findAllCant = async (req, res) => {
  /*SELECT *, JSON_EXTRACT(pvr, "$.isChofer") AS choferes FROM salidas*/

  console.log("goss");

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

  /*const where = {
    from: {
      $between: ["2023-09-10", "2023-09-10"],
    },
  };*/

  await salida
    .findAll({
      attributes: [
        "unidad",
        "id",
        "placa",
        "chofer",
        "tipoUnidad",
        "idUsuario",
        "fecha",
        "status",
        "createdAt",
        "pvr",
      ],
      where,
    })
    .then((resp) => {
      //res.status(200).send(resp);

      let pvr = resp.map(function (ele) {
        if (ele.status === false) {
          status = "Cerrado";
        } else {
          status = "Abierto";
        }
        return {
          id: `0${ele.id}`,
          correlativo: `0${ele.id}`,
          unidad: ele.unidad,
          chofer: ele.chofer,
          placa: ele.placa,
          fecha: fecha(ele.fecha),
          status,
          horaEntrada: ele.pvr.isVariableEntrada.horaEntrada,
          horaSalida: ele.pvr.isVariableSalida.horaSalida,
          GasoilSalida: ele.pvr.isVariableSalida.GsSalida,
          GasoilEntrada: ele.pvr.isVariableEntrada.GsEntrada,
        };
      });
      res.status(200).send(pvr);

      console.log(pvr);

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
exports.findAllGet = async (req, res) => {
  let include = [];

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
  });*/

  const { page, size, title, base, varPagina } = req.query;
  var condition = title ? { [varPagina]: { [Op.like]: `%${title}%` } } : null;

  if (base === "vehiculos") {
    include = [
      { model: db.modelos },
      { model: db.categorias },
      //   { model: db.users },
      // { model: db.falla },
    ];
  }

  console.log(page, size, title);

  const { limit, offset } = getPagination(page, size);

  await db[base]
    .findAndCountAll({ where: condition, include, limit, offset })
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
};
