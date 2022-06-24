import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./create-delivery.use-case";

export class CreateDeliveryController {

    async handle(req: Request, res: Response) {
        const { product } = req.body;

        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const result = await createDeliveryUseCase.execute({
            product
        });

        return res.json(result);
    }

}