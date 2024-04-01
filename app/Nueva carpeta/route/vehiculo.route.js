module.exports = function (app) {
  const vehiculo = require("../controller/vehiculo.controller.js");

  // Create Empresa
  app.post("/api/vehiculo/All", vehiculo.findAll);
  app.post("/api/vehiculo/", vehiculo.post);
  app.get("/api/vehiculo/:id", vehiculo.findById);
  app.get("/api/vehiculoPlaca/:id", vehiculo.findByIdPlaca);
  app.put("/api/vehiculo/:id", vehiculo.update);
  app.delete("/api/vehiculo/:id", vehiculo.delete);

  /////const auth = require("../middleware/auth.js");
};
