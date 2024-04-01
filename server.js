const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Our App." });
});

require("./app/route/empresa.route.js")(app);
require("./app/route/user.route.js")(app);
require("./app/route/categoria.route.js")(app);
require("./app/route/salida.route.js")(app);
require("./app/route/reporte.route.js")(app);
require("./app/route/modelo.route.js")(app);
require("./app/route/vehiculo.route.js")(app);
require("./app/route/chofer.route.js")(app);
require("./app/route/verificador.route.js")(app);
require("./app/route/ayudante.route.js")(app);
require("./app/route/supervisor.route.js")(app);
require("./app/route/ruta.route.js")(app);
require("./app/route/averia.route.js")(app);
require("./app/route/sector.route.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
