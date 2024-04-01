const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const vehiculo = require("../controller/vehiculo.controller.js");

  // Create Empresa
  app.post("/api/vehiculo/AllId/:id", auth, vehiculo.findAllId);
  app.post("/api/vehiculo/All", auth, vehiculo.findAll);
  app.post("/api/vehiculo/lista", auth, vehiculo.findLista);
  app.post("/api/vehiculo/", auth, vehiculo.post);
  app.get("/api/vehiculo/:id", auth, vehiculo.findById);
  app.get("/api/vehiculoPlaca/:id", auth, vehiculo.findByIdPlaca);
  app.get("/api/vehiculoUnidad/:id", auth, vehiculo.findByIdUnidad);
  app.put("/api/vehiculo/:id", auth, vehiculo.update);
  app.delete("/api/vehiculo/:id", auth, vehiculo.delete);

  /////const auth = require("../middleware/auth.js");
};
