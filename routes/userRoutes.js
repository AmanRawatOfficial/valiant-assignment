// PUBLIC MODULES
const express = require("express");
const multer = require("multer");

// LOCAL MODULES
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/upload", userController.uploadUserResume, userController.upload);
router.get('/download/:filename', userController.downloadFile)

router.route("/").get(userController.getAllUser);

module.exports = router;
