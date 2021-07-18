const userModal = require("../../modals/users");

const create = async (req, res) => {
  try {
    const body = req.body;
    const data = new userModal(body);
    const dataAdded = await data.save();
    res.status(201).send(dataAdded);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAll = async (req, res) => {
  let response;
  try {
    const data = await userModal.find({});
    response = {
      message: "operation Successfull",
      data,
    };
    res.status(200).send(response);
  } catch (error) {
    response = {
      message: "operation Failed",
      error,
    };
    res.status(400).send(response);
  }
};
const getSingle = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await userModal.findById({ _id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
const update = async (req, res) => {
  try {
    const data = await userModal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteById = async (req, res) => {
  try {
    const data = await userModal.findByIdAndDelete(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  deleteById,
};
