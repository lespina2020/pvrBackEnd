module.exports = (sequelize, Sequelize) => {
  const rutas = sequelize.define("averias", {
    chofer: {
      type: Sequelize.STRING,
    },
    hora: {
      type: Sequelize.STRING,
    },
    unidad: {
      type: Sequelize.STRING,
    },
    averia: {
      type: Sequelize.STRING,
    },

    idUsuario: {
      type: Sequelize.STRING,
    },
    idEstado: {
      type: Sequelize.BOOLEAN,
    },
    fecha: {
      type: Sequelize.STRING,
    },
    observacion: {
      type: Sequelize.STRING,
    },
  });

  return rutas;
};
