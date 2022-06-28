import { DeliveryMan } from "../models/DeliveryMan";

//DTO => Data transfer object
interface CreateDeliveryManDTO {
  name: string;
  email: string;
  password: string;
}

class DeliveryManRepository {
  async create({name, email, password}: CreateDeliveryManDTO) {
    return "New DeliveryMan";
  }

  async findAll() {
    return "All DeliveryMan";
  }

  async findById({id}) {
    return "DeliveryMan by ID";
  }

  async findByName({name}) {
    return "DeliveryMan by Name";
  }

  findByEmail({email}) {
    return `Find Customer by Email`;
  }

}

export { DeliveryManRepository }