let express = require("express");
let router = express.Router();
const multer = require("multer");
const { addImage } = require("../../controllers/images/index");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i)) {
      cb(new Error("Please upload image only"));
    }
    cb(undefined, true);
  },
});

router.post("/", upload.single("image"), addImage, (error, req, res, next) => {
  res.status(404).send({ error: error.message });
});

module.exports = router;
