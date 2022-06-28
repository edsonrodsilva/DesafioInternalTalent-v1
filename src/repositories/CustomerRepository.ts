import { Customer } from "../models/Customer";

//DTO => Data transfer object
interface CreateCustomerDTO {
  name: string;
  email: string;
  password: string;
  age?: number;
}

class CustomerRepository {
  create({name, email, password, age}: CreateCustomerDTO) {
    return "New Customer";
  }

  findAll() {
    return "All Customer";
  }

  findById({id}) {
    return "Find Customer by ID";
  }

  findByName({name}) {
    return "Find Customer by Name";
  }

  findByEmail({email}) {
    return `Find Customer by Email`;
  }
}

export { CustomerRepository }