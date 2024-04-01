module.exports = (sequelize, Sequelize) => {
  const TipoUsuario = sequelize.define("tipousuarios", {
    nameuser: {
      type: Sequelize.STRING,
    },
    ruta: {
      type: Sequelize.STRING,
    },
    menu: {
      type: Sequelize.STRING,
    },
  });

  return TipoUsuario;
};
