module.exports = (sequelize, Sequelize) => {
  const ayudante = sequelize.define("ayudantes", {
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

  return ayudante;
};
