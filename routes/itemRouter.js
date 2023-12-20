const express = require("express");

const itemController = require("../controllers/item.js");
const itemRouter = express.Router();

itemRouter.use("/postitem", itemController.postItem);
itemRouter.use("/add", itemController.addItem);
itemRouter.use("/", itemController.getItems);

module.exports = itemRouter;