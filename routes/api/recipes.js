const router = require("express").Router();
const planRoutes = require("./plan");

// Book routes
router.use("/plan", planRoutes);

module.exports = router;