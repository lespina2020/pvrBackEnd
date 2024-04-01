module.exports = (sequelize, Sequelize) => {
  const vehiculo = sequelize.define("vehiculos", {
    placa: {
      type: Sequelize.STRING,
    },
    idModelo: {
      type: Sequelize.INTEGER,
    },
    idCategoria: {
      type: Sequelize.INTEGER,
    },
    idUser: {
      type: Sequelize.INTEGER,
    },
    idEstado: {
      type: Sequelize.BOOLEAN,
    },
  });

  return vehiculo;
};
