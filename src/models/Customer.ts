import{ Address } from 'src/models/Address';

export class Customer{
    customer_id: number;
    first_name: string;
    last_name: string;
    addresses: Address[] = new Array;
}