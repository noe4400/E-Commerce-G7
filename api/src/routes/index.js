const { Router } = require("express");
const router = Router();
// Traemos Routes
const clotheDetail = require("./clothe/clotheDetail.js");
const allClothe = require("./clothe/allClothe.js");
const userControls = require("./admin/userControls") 
const setAdmins = require("./admin/setAdmins.js");
const createClothe = require("./admin/createClothe.js");
// Usamos Routes

// Routes Users
router.use("/clothe", allClothe);
router.use("/clothe", clotheDetail);

// Admin
router.use("/admin", createClothe);
router.use("/admin", userControls);
router.use("/admin", setAdmins);

module.exports = router;
