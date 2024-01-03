const env = {
  database: "pvr",
  username: "postgres",
  password: "root",
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  JWT_ENCRYPTION: "node_js_express_mongodb_auth",
};
module.exports = env;
