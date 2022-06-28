import { prisma } from "@src/databases/prisma-client";
import { hash } from "bcrypt";

interface ICreateDeliveryMan {
    name: string;
    email: string;
    password: string;
    vehicle?: string;
}

export class CreateDeliveryManUseCase {
    async execute({ name, email, password, vehicle }: ICreateDeliveryMan) {

        const edson = await prisma.deliveriesMan.findMany();

        const deliveryManExist = await prisma.deliveriesMan.findFirst({
            where: {
                email
            }
        });

        if (deliveryManExist) {
            throw new Error("DeliveryMan already exist");
        }

        const hashPassword = await hash(password, 10);

        const deliveryMan = await prisma.deliveriesMan.create({
            data: {
                name,
                email,
                password: hashPassword,
                vehiche: vehicle
            }
        });

        return deliveryMan;
    }
}