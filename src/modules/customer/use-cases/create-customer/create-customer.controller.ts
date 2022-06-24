import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./create-customer.use-case";

export class CreateCustomerController {
    async handle(req: Request, res: Response) {
        const { name, email, password, age } = req.body;

        const createCustomerUseCase = new CreateCustomerUseCase();

        const result = await createCustomerUseCase.execute({
            name,
            email,
            password,
            age
        });

        return res.json(result);
    }
}