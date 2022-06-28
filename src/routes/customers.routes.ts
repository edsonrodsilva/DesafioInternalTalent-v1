import { CustomerRepository } from "@src/repositories/CustomerRepository";
import { CreateCustomerService } from "@src/services/CreateCustomerService";
import { Router } from "express";

const customerRoutes = Router();

const customerRepository = new CustomerRepository();

customerRoutes.post("/customers", (req, res) => {
  const { name, email, password, age } = req.body;

  const createCustomerService = new CreateCustomerService(customerRepository);

  const result = createCustomerService.execute({name, email, password, age});

  return res.status(201).json(result);
})

export { customerRoutes };