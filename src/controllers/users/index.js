const userModal = require("../../modals/users");

const create = async (req, res) => {
  let response;
  try {
    const body = req.body;
    const data = new userModal(body);
    const dataAdded = await data.save();
    response = {
      message: "operation Successfull",
      dataAdded,
    };
    res.status(201).send(response);
  } catch (error) {
    response = {
      message: "operation Failed",
      error,
    };
    res.status(400).send(response);
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
  let response;
  try {
    const _id = req.params.id;
    const data = await userModal.findById({ _id });
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
const update = async (req, res) => {
  let response;
  try {
    const data = await userModal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
const deleteById = async (req, res) => {
  let response;
  try {
    const data = await userModal.findByIdAndDelete(req.params.id);
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
    res.status(500).send(response);
  }
};

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  deleteById,
};
