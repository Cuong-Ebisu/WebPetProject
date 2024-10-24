import { createTrainer, updateTrainer, deleteTrainer, getTrainer } from "../services/trainerService.js";

// Create Trainer
const ccreateTrainer = async (req, res) => {
    try {
        let data = req.body;
        if (!data || !data.name || !data.image || !data.location || !data.services || !data.contactInfo) {
            return res.status(200).json({
                EC: 400,
                EM: "Input is empty",
                DT: ""
            });
        }
        let response = await createTrainer(data);
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        });
    }
};

// Update Trainer
const cupdateTrainer = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        if (!id || !data) {
            return res.status(200).json({
                EC: 400,
                EM: "Invalid input",
                DT: ""
            });
        }
        let response = await updateTrainer(id, data);
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        });
    }
};

// Delete Trainer
const cdeleteTrainer = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(200).json({
                EC: 400,
                EM: "Trainer ID is required",
                DT: ""
            });
        }
        let response = await deleteTrainer(id);
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        });
    }
};

// Get Trainer (by id or all trainers)
const cgetTrainer = async (req, res) => {
    try {
        let id = req.params.id; // Lấy ID từ route nếu có
        let response = await getTrainer(id);
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        });
    }
};

export { ccreateTrainer as createTrainer, cupdateTrainer as updateTrainer, cdeleteTrainer as deleteTrainer, cgetTrainer as getTrainer };
