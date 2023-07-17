const express = require("express");
const app = express();
const path = require("node:path");
console.log(path);
//settings
app.set("port", process.env.PORT || 3000);
// static files
app.use(express.static(""));
// start the server
app.listen(app.get("port"), () => {
  console.log(`server on http://localhost:${app.get("port")}`);
});
