module.exports = (sequelize, Sequelize) => {
  const fallas = sequelize.define("tipofallas", {
    fallas: {
      type: Sequelize.STRING,
    },
  });

  return fallas;
};
