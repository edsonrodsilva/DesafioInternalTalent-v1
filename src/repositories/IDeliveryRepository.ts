import { DeliveryMan } from "@src/models/DeliveryMan";

interface IDeliveryMan {
  create(product: string): void

  findAll(): DeliveryMan[];

  findById(id: string): DeliveryMan;

  findByName(name: string): DeliveryMan[];

  findByEmail(email: string): DeliveryMan;
}