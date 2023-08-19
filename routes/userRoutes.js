// PUBLIC MODULES
const express = require("express");
const multer = require("multer");

// LOCAL MODULES
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const upload = multer({ dest: "public/pdf/students" });

const router = express.Router();

router.post("/login", authController.login);
router.post("/upload", upload.single("resume "), userController.upload);

module.exports = router;
