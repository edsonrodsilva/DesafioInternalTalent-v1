import { Request, Response, Router } from "express";
import { CreateCustomerController } from "./modules/customer/use-cases/create-customer/create-customer.controller";

const routes = Router();

const createCustomerController = new CreateCustomerController;

routes.get("/", (req: Request, res: Response) => {
    res.send({ "ok": true });
})

//create new customer
routes.post("/customers", createCustomerController.handle);

export { routes };