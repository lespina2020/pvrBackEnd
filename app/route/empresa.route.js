module.exports = function (app) {
  const empresa = require("../controller/empresa.controller.js");

  // Create Empresa
  app.post("/api/empresa/findAll", empresa.findAll);
  app.post("/api/empresa/createOne", empresa.createOne);

  /////const auth = require("../middleware/auth.js");
};
