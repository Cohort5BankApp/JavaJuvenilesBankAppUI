

export interface Deposit{
    id:number;
    type: string;
    transaction_date:string;
    status:string;
    payee_id:number;
    medium: string;
    amount: number;
    description:string;
}