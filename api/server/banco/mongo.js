const mongoose = require("mongoose");
//const uri = "mongodb://localhost:27018/";
const uri =
  "mongodb://admin:admin@localhost:27018/ArcLight?authSource=ArcLight";

mongoose
  .connect(uri)
  .then(() => {
    console.log(`API conectada com sucesso em ArcLight...`);
  })
  .catch((err) => {
    console.log(`API não conseguiu conectar ao banco...`);
  });
