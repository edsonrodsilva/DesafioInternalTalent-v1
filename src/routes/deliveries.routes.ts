import { DeliveryRepository } from "@src/repositories/DeliveryRepository";
import { CreateDeliveryService } from "@src/services/CreateDeliveryService";
import { Router } from "express";

const deliveryRoutes = Router();

const deliveryRepository = new DeliveryRepository();

deliveryRoutes.post("/deliverys", (req, res) => {
  const { product } = req.body;

  const createDeliveryService = new CreateDeliveryService(deliveryRepository);

  const result = createDeliveryService.execute({product});

  return res.status(201).json(result);
})

export { deliveryRoutes };