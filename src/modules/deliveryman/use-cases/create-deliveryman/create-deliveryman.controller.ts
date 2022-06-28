import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./create-deliveryman.use-case";

export class CreateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { name, email, password, vehicle } = req.body;

        const createDeliveryManUseCase = new CreateDeliveryManUseCase();

        const result = await createDeliveryManUseCase.execute({
            name,
            email,
            password,
            vehicle
        });

        return res.json(result);
    }
}