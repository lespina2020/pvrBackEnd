module.exports = (sequelize, Sequelize) => {
  const TipoUsuario = sequelize.define("categorias", {
    categorias: {
      type: Sequelize.STRING,
    },
  });

  return TipoUsuario;
};
