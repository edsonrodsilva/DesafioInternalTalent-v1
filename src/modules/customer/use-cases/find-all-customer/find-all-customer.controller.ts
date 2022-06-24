import { Request, Response } from "express";
import { FindAllCustomerUseCase } from "./find-all-customer.use-case";

export class FindAllCustomerController {
    async handle(req: Request, res: Response) {
        const findAllCustomerUseCase = new FindAllCustomerUseCase();

        const customers = await findAllCustomerUseCase.execute();

        return res.json(customers);
    }
}