import { v4 as uuidv4 } from 'uuid';

class DeliveryMan {
  id: string;
  name: string;
  email: string;
  password: string;
  customer_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { DeliveryMan }