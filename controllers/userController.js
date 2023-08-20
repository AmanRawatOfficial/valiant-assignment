const User = require("../models/userModel");
const multer = require("multer");
const APIFeatures = require("../utils/apiFeatures");
const fs = require("fs");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        // user-279832-2723.pdf
        const ext = file.mimetype.split("/")[1];
        console.log(req.body);
        cb(null, `student-${Date.now()}.${ext}`);
    },
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("application")) {
        cb(null, true);
    } else {
        cb(x, false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

exports.uploadUserResume = upload.single("resume");

exports.upload = async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body,
            resume: req.file.filename,
            createdDate: new Date().toISOString(),
        });
        res.status(201).json({
            status: "success",
            data: {
                data: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        let filter = {};
        if (req.params.tourId) filter = { tour: req.params.tourId };

        // EXECUTE QUERY
        const features = new APIFeatures(User.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const userData = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: "success",
            results: userData.length,
            data: {
                data: userData,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.downloadFile = (req, res) => {
    const { filename } = req.params;
    const filePath = `${__dirname}/../public/${filename}`;

    // Check if the file exists
    res.download(filePath); // Initiates the download
};
