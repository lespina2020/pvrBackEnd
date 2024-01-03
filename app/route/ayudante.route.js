module.exports = function (app) {
  const ayudante = require("../controller/ayudante.controller.js");

  // Create Empresa
  app.post("/api/ayudantes/All", ayudante.findAll);
  app.post("/api/ayudantes/", ayudante.post);
  app.get("/api/ayudantes/:id", ayudante.findById);
  app.get("/api/ayudantesCedula/:id", ayudante.findByIdChofer);
  app.put("/api/ayudantes/:id", ayudante.update);
  app.delete("/api/ayudantes/:id", ayudante.delete);

  /////const auth = require("../middleware/auth.js");
};
