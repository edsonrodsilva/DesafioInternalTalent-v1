import { DeliveryManRepository } from "@src/repositories/DeliveryManRepository";
import { CreateDeliveryManService } from "@src/services/CreateDeliveryManService";
import { Router } from "express";

const deliveryManRoutes = Router();

const deliveryManRepository = new DeliveryManRepository();

deliveryManRoutes.post("/deliveryMans", (req, res) => {
  const { name, email, password } = req.body;

  const createDeliveryManService = new CreateDeliveryManService(deliveryManRepository);

  const result = createDeliveryManService.execute({name, email, password});

  return res.status(201).json(result);
})

export { deliveryManRoutes };