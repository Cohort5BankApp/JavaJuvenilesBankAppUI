// private Long id;
// private enum Type{
//     p2p, deposit, withdrawal
// }
// private Type type;
// private String transaction_date;
// private enum Status{
//     pending, cancelled, completed, reccuring
// }
// private Status status;
// private Long account_id;
// private enum Medium{
//     balance, rewards
// }
// private Medium medium;
// private Double amount;
// private String description;

export interface Withdrawal {
    id: number;
    type: Type;
    transaction_date: string;
    status: Status;
    account_id: number;
    medium: Medium;
    amount: number;
    description: string;
}