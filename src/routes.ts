import { Request, Response, Router } from "express";
import { CreateCustomerController } from "./modules/customer/use-cases/create-customer/create-customer.controller";
import { FindAllCustomerController } from "./modules/customer/use-cases/find-all-customer/find-all-customer.controller";
import { CreateDeliveryController } from "./modules/delivery/use-cases/create-delivery/create-delivery.controller";

const routes = Router();

const createCustomerController = new CreateCustomerController;
const findAllCustomerController = new FindAllCustomerController;
const createDeliveryController = new CreateDeliveryController;

routes.get("/", (req: Request, res: Response) => {
    res.send({ "description": "Api Delivery v1" });
});

//find all customer
routes.get("/customers", findAllCustomerController.handle);

//create new customer
routes.post("/customers", createCustomerController.handle);

//create new delivery
routes.post("/deliveries", createDeliveryController.handle);

export { routes };