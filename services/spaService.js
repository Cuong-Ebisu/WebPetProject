import {Spa} from "../models/spa.js";

const createSpa = async (data)=>{
    try {
        console.log(data);
        let spa = await Spa.create(data);
        return {
            EC: 200,
            EM: "Success",
            DT: spa
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        }
    }
}

// Delete Spa
const deleteSpa = async (id) => {
    try {
        let spa = await Spa.findByIdAndDelete(id);
        if (!spa) {
            return {
                EC: 404,
                EM: "Spa not found",
                DT: ""
            };
        }
        return {
            EC: 200,
            EM: "Spa deleted successfully",
            DT: spa
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

// Update Spa
const updateSpa = async (id, data) => {
    try {
        let spa = await Spa.findByIdAndUpdate(id, data, { new: true }); // `new: true` returns the updated document
        if (!spa) {
            return {
                EC: 404,
                EM: "Spa not found",
                DT: ""
            };
        }
        return {
            EC: 200,
            EM: "Spa updated successfully",
            DT: spa
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

// Get Spa (by id or all spas)
const getSpa = async (id) => {
    try {
        if (id) {
            let spa = await Spa.findById(id);
            if (!spa) {
                return {
                    EC: 404,
                    EM: "Spa not found",
                    DT: ""
                };
            }
            return {
                EC: 200,
                EM: "Success",
                DT: spa
            };
        } else {
            let spas = await Spa.find();
            return {
                EC: 200,
                EM: "Success",
                DT: spas
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

export { createSpa, deleteSpa, updateSpa, getSpa };
