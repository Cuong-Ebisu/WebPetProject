import {createSpa,deleteSpa,updateSpa,getSpa} from "../controllers/spaController.js";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
let router = express.Router();
let initWebRount = (app) => {
    router.post("/spa", createSpa);
    router.get("/spa/:id", getSpa);
    router.put("/spa/:id", updateSpa);
    router.delete("/spa/:id", deleteSpa);
    return app.use("/api/", router)
}
export {initWebRount as spaRoute}


