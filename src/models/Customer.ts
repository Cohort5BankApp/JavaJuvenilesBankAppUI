import{ Address } from 'src/models/Address';

export interface Customer{
    id: number;
    first_name: string;
    last_name: string;
    address: Address;
}
