import { prisma } from "@src/databases/prisma-client";

export class FindAllCustomerUseCase {
    async execute() {
        const customers = await prisma.customers.findMany();
        return customers;
    }
}