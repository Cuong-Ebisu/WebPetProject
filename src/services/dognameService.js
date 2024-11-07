import  DogName  from "../models/dogname.js";

// Create Dog Name
const createDogName = async (data) => {
  try {
    let dogName = await DogName.create(data);
    return {
      EC: 0,
      EM: "Dog name created successfully",
      DT: dogName,
    };
  } catch (error) {
    console.error("Error creating dog name:", error);
    return {
      EC: 500,
      EM: "Error creating dog name",
      DT: error.message,
    };
  }
};

// Delete Dog Name
const deleteDogName = async (id) => {
  try {
    let dogName = await DogName.findByIdAndDelete(id);
    if (!dogName) {
      return {
        EC: 404,
        EM: "Dog name not found",
        DT: "",
      };
    }
    return {
      EC: 0,
      EM: "Dog name deleted successfully",
      DT: dogName,
    };
  } catch (error) {
    console.error("Error deleting dog name:", error);
    return {
      EC: 500,
      EM: "Error deleting dog name",
      DT: error.message,
    };
  }
};

// Update Dog Name
const updateDogName = async (id, data) => {
  try {
    let dogName = await DogName.findByIdAndUpdate(id, data, { new: true });
    if (!dogName) {
      return {
        EC: 404,
        EM: "Dog name not found",
        DT: "",
      };
    }
    return {
      EC: 0,
      EM: "Dog name updated successfully",
      DT: dogName,
    };
  } catch (error) {
    console.error("Error updating dog name:", error);
    return {
      EC: 500,
      EM: "Error updating dog name",
      DT: error.message,
    };
  }
};

// Get Dog Name (by id or all names)
const getDogName = async (id, page = 1, limit = 20) => {
  try {
    if (id) {
      let dogName = await DogName.findById(id);
      if (!dogName) {
        return {
          EC: 404,
          EM: "Dog name not found",
          DT: "",
        };
      }
      return {
        EC: 0,
        EM: "Dog name retrieved successfully",
        DT: dogName,
      };
    } else {
      limit = parseInt(limit) || 20;
      page = parseInt(page) || 1;
      let skip = (page - 1) * limit;

      let dogNames = await DogName.find().limit(limit).skip(skip);

      if (!dogNames || dogNames.length === 0) {
        return {
          EC: 404,
          EM: "No dog names found",
          DT: "",
        };
      }

      return {
        EC: 0,
        EM: "All dog names retrieved successfully",
        DT: dogNames,
      };
    }
  } catch (error) {
    console.error("Error retrieving dog name:", error);
    return {
      EC: 500,
      EM: "Error retrieving dog name",
      DT: error.message,
    };
  }
};

export { createDogName, deleteDogName, updateDogName, getDogName };