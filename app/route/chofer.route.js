const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const chofer = require("../controller/chofer.controller.js");

  // Create Empresa
  app.post("/api/choferes/All", auth, chofer.findAll);
  app.post("/api/choferes/", auth, chofer.post);
  app.get("/api/choferes/:id", auth, chofer.findById);
  app.get("/api/choferesCedula/:id", auth, chofer.findByIdChofer);
  app.put("/api/choferes/:id", auth, chofer.update);
  app.delete("/api/choferes/:id", auth, chofer.delete);

  /////const auth = require("../middleware/auth.js");
};
