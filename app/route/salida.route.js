const auth = require("../middleware/auth.js");

module.exports = function (app) {
  const val = "salidas";
  const controll = "salida";

  const controller = require(`../controller/${controll}.controller.js`);

  // Create Empresa
  app.post(`/api/${val}/All`, auth, controller.findAll);
  app.get(`/api/${val}/findOnePvr/:id`, auth, controller.findOnePvr);
  app.get(`/api/${val}/box/:id`, controller.findByUnidad);
  app.post(`/api/${val}/`, auth, controller.post);
  app.get(`/api/${val}/:id`, auth, controller.findByUnidad);
  app.get(`/api/${val}/pvrStatus/:id`, auth, controller.findByStatus);
  //app.get(`/api/rutasId/:id`, controller.findByIdRuta);
  app.put(`/api/${val}/:id`, auth, controller.update);
  app.delete(`/api/${val}/:id`, auth, controller.delete);

  /////const auth = require("../middleware/auth.js");
};
