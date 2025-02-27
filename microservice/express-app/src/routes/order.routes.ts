import express from "express";
import { NextFunction, Request, Response } from "express";
import * as OrderService from "../service/order.service";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await OrderService.CreateOrder();
    res.status(200).json(response);
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await OrderService.GetOrder();
    res.status(200).json(response);
})

router.patch("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await OrderService.UpdateOrder();
    res.status(200).json(response);
})

router.delete("/", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Delete order" });
})

export default router;