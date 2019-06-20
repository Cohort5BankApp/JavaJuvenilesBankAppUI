import { Address } from 'src/models/Address';

<<<<<<< HEAD
export class Customer {
    id: number;
    first_name: string;
    last_name: string;
    address: Address;
}
=======
export class Customer{
    customer_id: number;
    first_name: string;
    last_name: string;
    addresses: Address[] = new Array;
}
>>>>>>> fda3bc707512f30e14d34b03ee6c1517bb8e0142
