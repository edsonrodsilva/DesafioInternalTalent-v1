import { prisma } from "@src/databases/prisma-client";

interface ICreateDelivery {
    product: string;
}

export class CreateDeliveryUseCase {
    async execute({ product }: ICreateDelivery) {
        if (!product) {
            throw new Error("Product missing");
        }

        const customer_id = "80f47cad-1923-4cb2-9f50-45de81a3c132";

        const delivery = await prisma.deliveries.create({
            data: {
                product,
                customer_id
            }
        });

        return delivery;
    }
}