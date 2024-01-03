module.exports = (sequelize, Sequelize) => {
  const chofer = sequelize.define("choferes", {
    nombreApellido: {
      type: Sequelize.STRING,
    },
    cedula: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    firma: {
      type: Sequelize.STRING,
    },
    certificadoMedico: {
      type: Sequelize.DATEONLY,
    },
    licencia: {
      type: Sequelize.DATEONLY,
    },
    idUsuario: {
      type: Sequelize.STRING,
    },
  });

  return chofer;
};
