import { Request, Response, Router } from "express";
import { CreateCustomerController } from "./modules/customer/use-cases/create-customer/create-customer.controller";
import { FindAllCustomerController } from "./modules/customer/use-cases/find-all-customer/find-all-customer.controller";
import { CreateDeliveryManController } from "./modules/deliveryman/use-cases/create-deliveryman/create-deliveryman.controller";
import { CreateDeliveryController } from "./modules/delivery/use-cases/create-delivery/create-delivery.controller";
import { FindAllDeliveryManController } from "./modules/deliveryman/use-cases/find-all-deliveryman/find-all-deliveryman.controller";

const routes = Router();

const createCustomerController = new CreateCustomerController;
const findAllCustomerController = new FindAllCustomerController;

const createDeliveryController = new CreateDeliveryController;

const createDeliveryManController = new CreateDeliveryManController;
const findAllDeliveryManController = new FindAllDeliveryManController;

routes.get("/", (req: Request, res: Response) => {
    res.send({ "description": "Api Delivery v1" });
});

// ### customer ### //

//find all customer
routes.get("/customers", findAllCustomerController.handle);

//create new customer
routes.post("/customers", createCustomerController.handle);


// ### delivery ###

//create new delivery
routes.post("/deliveries", createDeliveryController.handle);


// ### deliveryman ### //

//create new deliveryman
routes.post("/deliveryman", createDeliveryManController.handle);

//find all deliveryman
routes.get("/deliveryman", findAllDeliveryManController.handle);

export { routes };