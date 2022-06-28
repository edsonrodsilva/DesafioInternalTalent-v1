import { DeliveryManRepository } from "@src/repositories/DeliveryManRepository";
import { hash } from "bcrypt";
import { create } from "domain";

interface ICreateDeliveryMan {
    name: string;
    email: string;
    password: string;
}

class CreateDeliveryManService {

    constructor(private DeliveryManRepository: DeliveryManRepository) { }

    async execute({ name, email, password }: ICreateDeliveryMan) {

        const DeliveryManExist = await this.DeliveryManRepository.findByEmail(email);

        if (DeliveryManExist) {
            throw new Error("DeliveryMan already exist");
        }

        const hashPassword = await hash(password, 10);

        this.DeliveryManRepository,create({name, email, password, age})
    }
}

export { CreateDeliveryManService }