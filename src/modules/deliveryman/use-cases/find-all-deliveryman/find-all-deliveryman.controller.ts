import { Request, Response } from "express";
import { FindAllDeliveryManUseCase } from "./find-all-deliveryman.use-case";

export class FindAllDeliveryManController {
    async handle(req: Request, res: Response) {
        const findAllDeliveryManUseCase = new FindAllDeliveryManUseCase();

        const customers = await findAllDeliveryManUseCase.execute();

        return res.json(customers);
    }
}