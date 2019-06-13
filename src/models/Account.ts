enum Type{
    Savings, Checking, Credit
}

export interface Account{
    account_id: number;
    nickname: string;
    rewards: number;
    balance: number;
    customer_id: number;
    type: string;
}