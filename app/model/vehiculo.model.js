module.exports = (sequelize, Sequelize) => {
  const vehiculo = sequelize.define("vehiculos", {
    placa: {
      type: Sequelize.STRING,
    },
    unidad: {
      type: Sequelize.STRING,
    },
    idModelo: {
      type: Sequelize.INTEGER,
    },
    idCategoria: {
      type: Sequelize.INTEGER,
    },
    idUsuario: {
      type: Sequelize.STRING,
    },
    idEstado: {
      type: Sequelize.BOOLEAN,
    },
  });

  return vehiculo;
};
