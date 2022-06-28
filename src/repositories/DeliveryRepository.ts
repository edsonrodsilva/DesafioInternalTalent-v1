import { Delivery } from "../models/Delivery";

//DTO => Data transfer object
interface CreateDeliveryDTO {
  produtc: string;
}

class DeliveryRepository {
  async create({produtc}: CreateDeliveryDTO) {
    return "New Delivery";
  }

  findAll() {
    return "All Delivery";
  }

  findById({id}) {
    return "Delivery by ID";
  }

  findByName({name}) {
    return "Delivery by Name";
  }
}

export { DeliveryRepository }