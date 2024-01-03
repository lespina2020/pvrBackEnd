module.exports = (sequelize, Sequelize) => {
  const verificador = sequelize.define("verificadores", {
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
    firma: {
      type: Sequelize.STRING,
    },
  });

  return verificador;
};
