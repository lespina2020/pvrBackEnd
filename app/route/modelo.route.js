module.exports = function (app) {
  const modelo = require("../controller/modelo.controller.js");

  // Create Empresa
  app.post("/api/modelo/All", modelo.findAll);
  app.post("/api/modelo/", modelo.post);
  app.get("/api/modelo/:id", modelo.findById);
  app.put("/api/modelo/:id", modelo.update);
  app.delete("/api/modelo/:id", modelo.delete);

  /////const auth = require("../middleware/auth.js");
};
