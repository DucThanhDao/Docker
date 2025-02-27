import express, { NextFunction, Request, Response } from "express";
import * as CartService from "../service/cart.service";
const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await CartService.CreateCart();
    res.status(200).json(response);
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await CartService.GetCart();
    res.status(200).json(response);
})

router.patch("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await CartService.UpdateCart();
    res.status(200).json(response);
})

router.delete("/", async (req: Request, res: Response, next: NextFunction) => {
    const response = await CartService.DeleteCart();
    res.status(200).json(response);
})

export default router;