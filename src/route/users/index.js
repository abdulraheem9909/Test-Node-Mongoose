let express = require("express");
let router = express.Router();
const {
  create,
  getAll,
  getSingle,
  update,
  deleteById,
} = require("../../controllers/users");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getSingle);
router.patch("/:id", update);
router.delete("/:id", deleteById);

module.exports = router;
