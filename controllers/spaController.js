import { createSpa, updateSpa, deleteSpa, getSpa } from "../services/spaService.js";

// Create Spa
const ccreateSpa = async (req, res) => {
    try {
        let data = req.body;
        if (!data || !data.name || !data.image || !data.location || !data.services || !data.contactInfo) {
            return res.status(200).json({
                EC: 400,
                EM: "Input is empty",
                DT: ""
            });
        }
        let response = await createSpa(data);
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

// Update Spa
const cupdateSpa = async (req, res) => {
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
        let response = await updateSpa(id, data);
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

// Delete Spa
const cdeleteSpa = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(200).json({
                EC: 400,
                EM: "Spa ID is required",
                DT: ""
            });
        }
        let response = await deleteSpa(id);
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

// Get Spa (by id or all spas)
const cgetSpa = async (req, res) => {
    try {
        let id = req.params.id; // Lấy ID từ route nếu có
        let response = await getSpa(id);
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

export { ccreateSpa as createSpa, cupdateSpa as updateSpa, cdeleteSpa as deleteSpa, cgetSpa as getSpa };
