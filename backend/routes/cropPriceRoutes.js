const express = require("express");
const { getCropPrices, addCropPrice } = require("../controllers/cropPriceController");

const router = express.Router();

router.get("/", getCropPrices);
router.post("/", addCropPrice);

module.exports = router;
