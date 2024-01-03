const env = {
  database: "factura_api",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  JWT_ENCRYPTION: "node_js_express_mongodb_auth",
};
module.exports = env;
