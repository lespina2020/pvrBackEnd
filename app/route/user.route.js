const auth = require("../middleware/auth.js");
module.exports = function (app) {
  const users = require("../controller/user.controller.js");

  // Retrieve all User
  app.post("/api/users/All", auth, users.findAll);

  // Registre Course

  // app.post("/api/users", users.findAll);

  // Retrieve a single User by Id
  app.get("/api/users/:id", users.findById);

  app.get("/api/usersCedula/:id", users.findByIdCedula);

  app.get("/api/usersUser/:id", users.findByIdUser);

  // Update a User with Id
  app.put("/api/users/:id", auth, users.update);

  // Delete a User with Id
  app.delete("/api/users/:id", auth, users.delete);

  // User signup
  app.post("/api/users/", users.signup);

  // User signin
  app.post("/api/user/signin", users.signin);
};
