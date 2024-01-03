const env = require("./env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  //operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

sequelize
  .authenticate()
  .then((res) => {
    console.log("Conectado a la Base de Datos");
  })
  .catch((err) => res.status(400).send(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/Tables
db.categorias = require("../model/categoria.model.js")(sequelize, Sequelize);
db.salidas = require("../model/salida.model.js")(sequelize, Sequelize);
db.modelos = require("../model/modelo.model.js")(sequelize, Sequelize);
db.vehiculos = require("../model/vehiculo.model.js")(sequelize, Sequelize);
db.choferes = require("../model/chofer.model.js")(sequelize, Sequelize);
db.verificadores = require("../model/verificador.model.js")(
  sequelize,
  Sequelize
);
db.ayudantes = require("../model/ayudante.model.js")(sequelize, Sequelize);
db.supervisores = require("../model/supervisor.model.js")(sequelize, Sequelize);
db.rutas = require("../model/ruta.model.js")(sequelize, Sequelize);
db.averias = require("../model/averia.model.js")(sequelize, Sequelize);
db.sectores = require("../model/sector.model.js")(sequelize, Sequelize);
db.empresas = require("../model/empresa.model.js")(sequelize, Sequelize);
db.users = require("../model/user.model.js")(sequelize, Sequelize);
db.falla = require("../model/falla.model.js")(sequelize, Sequelize);
db.TipoUsuarios = require("../model/tipousuario.model.js")(
  sequelize,
  Sequelize
);
//db.TipoUsuarios.hasOne(db.users, { foreignKey: "idUser" });
//db.users.belongsTo(db.TipoUsuarios, { foreignKey: "idUser" });

//db.modelo.hasOne(db.vehiculos, { foreignKey: "idModelo" });
db.vehiculos.belongsTo(db.modelos, { foreignKey: "idModelo" });
//db.rutas.belongsTo(db.supervisores, { foreignKey: "idSupervisor" });
//db.rutas.belongsTo(db.sectores, { foreignKey: "idSector" });
db.vehiculos.belongsTo(db.categorias, { foreignKey: "idCategoria" });
//db.vehiculos.belongsTo(db.users, { foreignKey: "idUser" });
db.vehiculos.belongsTo(db.falla, { foreignKey: "idEstado" });
module.exports = db;
