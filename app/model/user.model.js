module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    cedula: {
      type: Sequelize.STRING,
    },
    tipoUsuario: {
      type: Sequelize.STRING,
    },
    firma: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
