import { CustomerRepository } from "@src/repositories/CustomerRepository";
import { hash } from "bcrypt";
import { create } from "domain";

interface ICreateCustomer {
    name: string;
    email: string;
    password: string;
    age?: number;
}

class CreateCustomerService {

    constructor(private customerRepository: CustomerRepository) { }

    async execute({ name, email, password, age }: ICreateCustomer): void {

        const customerExist = this.customerRepository.findByEmail(email);

        if (customerExist) {
            throw new Error("Customer already exist");
        }

        const hashPassword = await hash(password, 10);

        this.customerRepository,create({name, email, password, age})
    }
}

export { CreateCustomerService }