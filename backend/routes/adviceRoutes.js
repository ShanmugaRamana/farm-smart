const express = require("express");
const { getAdvice, addAdvice } = require("../controllers/adviceController");

const router = express.Router();

router.get("/", getAdvice);
router.post("/", addAdvice);

module.exports = router;
