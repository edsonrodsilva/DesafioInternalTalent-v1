import { prisma } from "@src/databases/prisma-client";

interface ICreateDelivery {
    product: string;
}

export class CreateDeliveryUseCase {
    async execute({ product }: ICreateDelivery) {
        if (!product) {
            throw new Error("Product missing");
        }

        const customer_id = "3d144491-566f-4f84-b195-dbf883a2091c";

        const delivery = await prisma.deliveries.create({
            data: {
                product,
                customer_id
            }
        });

        return delivery;
    }
}