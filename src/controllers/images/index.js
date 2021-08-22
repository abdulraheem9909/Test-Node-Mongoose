const imageModal = require("../../modals/images");

const addImage = async (req,res) => {
  const data = new imageModal({
    image: `http://localhost:5000/${req.file.path}`,
  });
  const dataAdded = await data.save();
  res.send(dataAdded.image);
};
module.exports = {
  addImage,
};
