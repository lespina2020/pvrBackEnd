const jwt = require("jsonwebtoken");
const env = require("../config/env.js");
const db = require("../config/db.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log(token);

  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return res.status(403).send({
      message: "Sesion Vencida, Ingresar su Usuario de Nuevo.",
    });
  }

  jwt.verify(token, env.JWT_ENCRYPTION, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        message: "Invalid Token!",
      });
    } else {
      req.user = decoded.id;
      next();
      // res.status(200).send({ message: "successs" });
    }
  });
};

module.exports = verifyToken;
