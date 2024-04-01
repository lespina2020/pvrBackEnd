const db = require("../config/db.config.js");

const salida = db.salidas;
//const checkList = db.checklist;

// FETCH all Users

exports.post = async (req, res) => {
  console.log(req.body);

  salida
    .create(req.body)
    .then(() => {
      res.status(200).send({ message: "SALIDA REGISTRADA" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOnePvr = async (req, res) => {
  await salida
    .findOne({
      where: {
        correlativo: req.params.id,
      },
    })
    .then((resp) => {
      let obj = JSON.parse(resp.pvr);
      let salida = {};
      let entrada = {};
      Object.assign(
        salida,
        { condicion: obj.salidaCondicion },
        { dato: obj.salida }
      );
      // Object.assign(salida, { salidaDato: obj.salida });
      Object.assign(
        entrada,
        { condicion: obj.entradaCondicion },
        { dato: obj.entrada }
      );

      obj = {
        unidad: obj.unidad,
        chofer: obj.chofer.nombreApellido,
        ayudante: obj.ayudante.nombreApellido,
        operador: obj.idUsuario,
        ruta: obj.ruta.codRuta,
        marca: obj.marca,
        placa: obj.placa,
        tipoUnidad: obj.tipoUnidad,
        salida,
        entrada,
      };

      console.log(obj);
      res.status(200).send(obj);
    });
};

/*exports.checkList = async (req, res) => {
  console.log(req.body);

  checkList
    .create({ checklist: req.body })
    .then(() => {
      res.status(200).send({ message: "Exito checklist" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  }); 
};*/
/*exports.checkListGet = async (req, res) => {
  console.log(req.params.id);

  await checkList.findByPk(req.params.id).then((resp) => {
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
    }); 
  }); 

  /* await User.findAll({
    include: [{ model: db.TipoUsuarios }],
  }); 
};*/

exports.findAll = async (req, res) => {
  await salida
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
exports.findByUnidad = async (req, res) => {
  /* UPDATE salidas
    SET pvr = JSON_INSERT(
      pvr ,
      '$.p2' ,
      JSON_OBJECT('utilities',
            JSON_OBJECT('water', TRUE, 'gas', TRUE, 'electric', TRUE)
          )
    )
  WHERE
    id = 2; */

  await salida.findByPk(req.params.id).then((resp) => {
    res.status(200).send(resp);

    /// console.log(resp._previousDataValues.pvr);

    console.table(resp);

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
exports.findByStatus = async (req, res) => {
  await salida

    .findAll({
      where: {
        unidad: req.params.id,
        status: true,
      },
    })
    .then((resp) => {
      let status = resp[0].dataValues.status;

      if (status === true) {
        res.status(200).send(true);
      }
    })
    .catch((err) => {
      res.send(err).status();
    });
};
exports.findByPvr = async (req, res) => {
  await salida.findByPk(req.params.correlativo).then((resp) => {
    //let obj = JSON.stringify(resp);

    console.log(req.params.correlativo);

    /*let pvr = {
      unidad: obj.unidad,
      placa: obj.placa,
      operador: obj.idUsuario,
      ayudante: obj.ayudante.nombreApellido,
    };*/

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

  console.log("aqui");

  let fechaInicio = req.body;

  salida
    .update(
      req.body,

      { where: { id, status: true } }
    )
    .then(() => {
      res.status(200).send({
        message: "Se actualizo :",
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  salida
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.status(200).send({ message: "Registro Eliminado" });
    });
};
