const express = require("express");
const homeController = require("../controllers/home.js");
const homeRouter = express.Router();

homeRouter.use("/about", homeController.about);
homeRouter.use("/", homeController.index)

module.exports = homeRouter;