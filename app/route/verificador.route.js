const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const verificador = require("../controller/veificador.controller.js");

  // Create Empresa
  app.post("/api/verificadores/All", auth, verificador.findAll);
  app.post("/api/verificadores/", auth, verificador.post);
  app.get("/api/verificadores/:id", auth, verificador.findById);
  app.get(
    "/api/verificadoresCedula/:id",
    auth,
    verificador.findByIdVerificador
  );
  app.put("/api/verificadores/:id", auth, verificador.update);
  app.delete("/api/verificadores/:id", auth, verificador.delete);

  /////const auth = require("../middleware/auth.js");
};
