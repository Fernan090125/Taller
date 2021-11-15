require("./dbmongo");
const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// midlewares
app.use(
  fileUpload({
    tempFileDir: "/temp",
  })
);
app.use(cors());
app.use(express.json());

// routes

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/sales", require("./routes/sales"));
//app.use(express.static(path.join(__dirname, "build")));

async function main() {
  await app.listen(app.get("port"));
  console.log("server on port ", app.get("port"));
}
main();
