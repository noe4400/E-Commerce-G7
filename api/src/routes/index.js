const { Router } = require("express");
const router = Router();

// Traemos Routes
const clotheDetail = require("./clothe/clotheDetail.js");
const allClothes = require("./clothe/allClothes.js");
const clothesByName = require("./clothe/clothesByName.js");
const filterByCategory = require("./clothe/filterByCategory.js");
const userControls = require("./admin/userControls.js");
const setAdmins = require("./admin/setAdmins.js");
const createClothe = require("./clothe/createClothe.js");
const getUserOrders = require("./clothe/order/getUserOrders.js");
const orderAdd = require("./clothe/order/orderAdd.js");
const orderUpdate = require("./admin/orderUpdate.js");
const getOrderById = require("./clothe/order/getOrderById.js");
const chargeDatabase = require("./admin/chargeDb.js");
const deleteFromOrder = require("./clothe/order/deleteFromOrder.js");

// Usamos Routes
// Routes Users
router.use("/clothe", allClothes);
router.use("/clothe", clotheDetail);
router.use("/clothe", clothesByName);
router.use("/clothe", filterByCategory);
router.use("/clothe", orderAdd);
router.use("/clothe", getOrderById);
router.use("/clothe", getUserOrders);
router.use("/clothe", deleteFromOrder);

// Admin
router.use("/admin", createClothe);
router.use("/admin", userControls);
router.use("/admin", setAdmins);
router.use("/admin", orderUpdate);
router.use("/admin", chargeDatabase);

module.exports = router;
