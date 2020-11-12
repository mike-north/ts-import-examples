import * as express1 from "express";
import express2 = require("express");

const app1 = express1();
app1.listen(3000, function () {
  console.log("listening on :3000");
});

const app2 = express2();
app2.listen(3001, function () {
  console.log("listening on :3001");
});
