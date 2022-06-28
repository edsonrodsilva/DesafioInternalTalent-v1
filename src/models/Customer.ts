import { v4 as uuidv4 } from 'uuid';

class Customer {
  id: string;
  name: string;
  email: string;
  password: string;
  age?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Customer }