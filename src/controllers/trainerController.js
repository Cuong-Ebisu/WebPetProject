import { createTrainer, updateTrainer, deleteTrainer, getTrainer, getUniqueServices, searchTrainerByName } from "../services/trainerService.js";

// Create Trainer
const createTrainerController = async (req, res) => {
  try {
    let data = req.body;
    if (!data || !data.name || !data.image || !data.location || !data.services || !data.contactInfo||!data.description) {
      return res.status(400).json({
        EC: 400,
        EM: "Input is missing or incomplete",
        DT: ""
      });
    }

    let response = await createTrainer(data);
    return res.status(response.EC === 0 ? 200 : 400).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT
    });
  } catch (error) {
    console.error("Error creating Trainer:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: ""
    });
  }
};

// Update Trainer
const updateTrainerController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    if (!id || !data) {
      return res.status(400).json({
        EC: 400,
        EM: "Invalid input",
        DT: ""
      });
    }

    let response = await updateTrainer(id, data);
    return res.status(response.EC === 0 ? 200 : 400).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT
    });
  } catch (error) {
    console.error("Error updating Trainer:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: ""
    });
  }
};

// Delete Trainer
const deleteTrainerController = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({
        EC: 400,
        EM: "Trainer ID is required",
        DT: ""
      });
    }

    let response = await deleteTrainer(id);
    return res.status(response.EC === 0 ? 200 : 400).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT
    });
  } catch (error) {
    console.error("Error deleting Trainer:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: ""
    });
  }
};

const getTrainerController = async (req, res) => {
  try {
    const id = req.params.id;
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    const filters = {
      location: req.query.location,
      services: req.query.services ? req.query.services.split(",") : [],
    };

    const response = await getTrainer(id, page, limit, filters);
    return res.status(response.EC === 0 ? 200 : 404).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT,
      totalTrainers: response.totalTrainers || 0,
    });
  } catch (error) {
    console.error("Error getting Trainer:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: "",
    });
  }
};


const getServicesController = async (req, res) => {
  try {
    const response = await getUniqueServices();
    return res.status(response.EC === 0 ? 200 : 500).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT,
    });
  } catch (error) {
    console.error("Error getting services:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: "",
    });
  }
};
const searchTrainerByNameController = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const response = await searchTrainerByName(keyword, page, limit);
    return res.status(response.EC === 0 ? 200 : 400).json({
      EC: response.EC,
      EM: response.EM,
      DT: response.DT,
      totalTrainers: response.totalTrainers || 0,
    });
  } catch (error) {
    console.error("Error searching Trainer by name:", error.message);
    return res.status(500).json({
      EC: 500,
      EM: "Internal Server Error: " + error.message,
      DT: "",
    });
  }
};


export {
  createTrainerController as createTrainer,
  updateTrainerController as updateTrainer,
  deleteTrainerController as deleteTrainer,
  getTrainerController as getTrainer,
  getServicesController as getCServices,
  searchTrainerByNameController as searchTrainerByName,
};
