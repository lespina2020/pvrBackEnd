module.exports = (sequelize, Sequelize) => {
  const salidas = sequelize.define("salidas", {
    unidad: {
      type: Sequelize.TEXT,
    },
    pvr: {
      type: Sequelize.JSON,
    },
    idUsuario: {
      type: Sequelize.TEXT,
    },
    placa: {
      type: Sequelize.TEXT,
    },
    chofer: {
      type: Sequelize.TEXT,
    },
    correlativo: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    tipoUnidad: {
      type: Sequelize.TEXT,
    },
    fecha: {
      type: Sequelize.DATEONLY,
    },
  });

  return salidas;
};
