const mongoose = require("mongoose");
//const uri = "mongodb://localhost:27018/";
const uri = "mongodb://admin:admin@localhost:27018/ArcLight?authSource=ArcLight";

mongoose.connect(uri, { } );