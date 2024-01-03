const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const val = "supervisores";
  const controll = "supervisor";

  const controller = require(`../controller/${controll}.controller.js`);

  // Create Empresa
  app.post(`/api/${val}/All`, auth, controller.findAll);
  app.post(`/api/${val}/`, auth, controller.post);
  app.get(`/api/${val}/:id`, auth, controller.findById);
  app.get(`/api/supervisoresCedula/:id`, auth, controller.findByIdSupervisor);
  app.put(`/api/${val}/:id`, auth, controller.update);
  app.delete(`/api/${val}/:id`, auth, controller.delete);

  /////const auth = require("../middleware/auth.js");
};
