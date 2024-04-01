module.exports = function (app) {
  const categoria = require("../controller/categoria.controller.js");

  // Create Empresa
  app.post("/api/categoria/All", categoria.findAll);
  app.post("/api/categoria/", categoria.post);
  app.get("/api/categoria/:id", categoria.findById);
  app.put("/api/categoria/:id", categoria.update);
  app.delete("/api/categoria/:id", categoria.delete);

  /////const auth = require("../middleware/auth.js");
};
