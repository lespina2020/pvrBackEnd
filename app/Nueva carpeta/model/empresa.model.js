module.exports = (sequelize, Sequelize) => {
  const Empresa = sequelize.define("Empresas", {
    nombreEmpresa: {
      type: Sequelize.STRING,
    },
    rifEmpresa: {
      type: Sequelize.STRING,
    },
    telefonoEmpresa: {
      type: Sequelize.STRING,
    },
    emailEmpresa: {
      type: Sequelize.STRING,
    },
    direccionEmpresa: {
      type: Sequelize.STRING,
    },
  });

  return Empresa;
};
/* idEmpresa 
nombreEmpresa	 
rifEmpresa	 
telefonoEmpresa	 
emailEmpresa	 	
direccionEmpresa*/
