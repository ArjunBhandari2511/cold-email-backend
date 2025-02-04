const express = require("express");
const {generateEmail} = require("../controllers/emailController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/generate" , authMiddleware , generateEmail);

module.exports = router;