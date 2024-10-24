import {Trainer} from "../models/trainer.js";

// Create Trainer
const createTrainer = async (data) => {
    try {
        console.log(data);
        let trainer = await Trainer.create(data);
        return {
            EC: 200,
            EM: "Success",
            DT: trainer
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};

// Delete Trainer
const deleteTrainer = async (id) => {
    try {
        let trainer = await Trainer.findByIdAndDelete(id);
        if (!trainer) {
            return {
                EC: 404,
                EM: "Trainer not found",
                DT: ""
            };
        }
        return {
            EC: 200,
            EM: "Trainer deleted successfully",
            DT: trainer
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};

// Update Trainer
const updateTrainer = async (id, data) => {
    try {
        let trainer = await Trainer.findByIdAndUpdate(id, data, { new: true }); // `new: true` returns the updated document
        if (!trainer) {
            return {
                EC: 404,
                EM: "Trainer not found",
                DT: ""
            };
        }
        return {
            EC: 200,
            EM: "Trainer updated successfully",
            DT: trainer
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};

// Get Trainer (by id or all trainers)
const getTrainer = async (id) => {
    try {
        if (id) {
            let trainer = await Trainer.findById(id);
            if (!trainer) {
                return {
                    EC: 404,
                    EM: "Trainer not found",
                    DT: ""
                };
            }
            return {
                EC: 200,
                EM: "Success",
                DT: trainer
            };
        } else {
            let trainers = await Trainer.find();
            return {
                EC: 200,
                EM: "Success",
                DT: trainers
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        };
    }
};

export { createTrainer, deleteTrainer, updateTrainer, getTrainer };
