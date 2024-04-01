module.exports = (sequelize, Sequelize) => {
  const modelo = sequelize.define("modelos", {
    modelo: {
      type: Sequelize.STRING,
    },
  });

  return modelo;
};
