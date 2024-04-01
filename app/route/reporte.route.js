module.exports = function (app) {
  const val = "reportes";
  const controll = "reporte";

  const controller = require(`../controller/${controll}.controller.js`);

  // Create Empresa
  app.post(`/api/${val}/All`, controller.findAll);
  app.post(`/api/${val}/operatividad`, controller.findAllOperatividad);
  app.post(`/api/${val}/condicion`, controller.findAllCondicion);
  app.post(`/api/${val}/averia`, controller.findAllAveria);
  app.post(`/api/${val}/AllCantidad`, controller.findAllCant);
  app.get(`/api/${val}/All`, controller.findAllGet);

  /////const auth = require("../middleware/auth.js");
};
