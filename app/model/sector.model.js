module.exports = (sequelize, Sequelize) => {
  const sector = sequelize.define("sectores", {
    sector: {
      type: Sequelize.STRING,
    },
  });

  return sector;
};
