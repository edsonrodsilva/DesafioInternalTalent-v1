import { prisma } from "@src/databases/prisma-client";

export class FindAllDeliveryManUseCase {
    async execute() {
        const deliveryMan = await prisma.deliveriesMan.findMany();
        return deliveryMan;
    }
}