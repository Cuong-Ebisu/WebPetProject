import {createTrainer,deleteTrainer,updateTrainer,getTrainer} from "../controllers/trainerController.js";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
let router = express.Router();
let initWebRount = (app) => {    
    router.post("/trainer", createTrainer);
    router.get("/trainer/:id", getTrainer);
    router.put("/trainer/:id", updateTrainer);
    router.delete("/trainer/:id", deleteTrainer);
    return app.use("/api/", router)
}
export {initWebRount as trainerRoute};
