const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const val = "rutas";
  const controll = "ruta";

  const controller = require(`../controller/${controll}.controller.js`);

  // Create Empresa
  app.post(`/api/${val}/All`, auth, controller.findAll);
  app.post(`/api/${val}/`, auth, controller.post);
  app.get(`/api/${val}/:id`, auth, controller.findByRuta);
  app.get(`/api/Cod${val}/:id`, auth, controller.findByCodRuta);
  //app.get(`/api/rutasId/:id`, controller.findByIdRuta);
  app.put(`/api/${val}/:id`, auth, controller.update);
  app.delete(`/api/${val}/:id`, auth, controller.delete);

  /////const auth = require("../middleware/auth.js");
};
