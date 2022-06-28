import { DeliveryRepository } from "@src/repositories/DeliveryRepository";
import { hash } from "bcrypt";

interface ICreateDelivery {
    product: string
}

class CreateDeliveryService {

    constructor(private DeliveryRepository: DeliveryRepository) { }

    async execute({ product }: ICreateDelivery) {

        const DeliveryExist = await this.DeliveryRepository.findByName(product);

        if (DeliveryExist) {
            throw new Error("Delivery already exist");
        }

        this.DeliveryRepository,create({product});
    }
}

export { CreateDeliveryService }