import { prisma } from "@src/databases/prisma-client";
import { hash } from "bcrypt";

interface ICreateCustomer {
    name: string;
    email: string;
    password: string;
    age?: number;
}

export class CreateCustomerUseCase {
    async execute({ name, email, password, age }: ICreateCustomer) {

        const customerExist = await prisma.customers.findFirst({
            where: {
                email
            }
        });

        if (customerExist) {
            throw new Error("Customer already exist");
        }

        const hashPassword = await hash(password, 10);

        const customer = await prisma.customers.create({
            data: {
                name,
                email,
                password: hashPassword,
                age,
            }
        });

        return customer;
    }
}