import { createOrder, deleteOrder, updateOrder, getOrder, getAllOrders, momoCallback } from "../controllers/orderController.js";
import express from 'express';
import dotenv from 'dotenv';

import { authenticateToken } from '../middlewares/authMiddleware.js';
dotenv.config();

let router = express.Router();

let initOrderRoute = (app) => {
    router.post("/", authenticateToken, createOrder);
    router.get("/all", authenticateToken, getAllOrders);
    router.get("/:id?", authenticateToken, getOrder);

    router.patch("/:id", updateOrder);
    router.delete("/:id", deleteOrder);
    router.post("/callback", momoCallback);
    return app.use("/api/orders/", router);
};

export { initOrderRoute as orderRoute };