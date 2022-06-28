import { v4 as uuidv4 } from 'uuid';

class Delivery {
  id: string;
  product: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Delivery }