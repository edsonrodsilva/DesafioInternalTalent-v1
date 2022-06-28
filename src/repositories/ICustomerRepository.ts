import { Customer } from "@src/models/Customer";

interface ICreateCustomer {
  create(name: string, email: string, password: string, age: number): void

  findAll(): Customer[];

  findById(id: string): Customer;

  findByName(name: string): Customer[];

  findByEmail(email: string): Customer;
}