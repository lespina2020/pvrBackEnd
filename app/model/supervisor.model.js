module.exports = (sequelize, Sequelize) => {
  const supervisores = sequelize.define("supervisores", {
    nombreApellido: {
      type: Sequelize.STRING,
    },
    cedula: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    idUsuario: {
      type: Sequelize.STRING,
    },
  });

  return supervisores;
};
