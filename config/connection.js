const mongoose = require("mongoose");

const dbConnect = () => {

  const user = "nuricodesal";
  const pass = "Un$XuJ8-a4pUq6x";
  const dbName = "TaskMaster";
  const uri= `mongodb+srv://nuricodesal:${pass}@cluster0.xq7syea.mongodb.net/${dbName}?retryWrites=true&w=majority`;



  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};
module.exports = dbConnect;
