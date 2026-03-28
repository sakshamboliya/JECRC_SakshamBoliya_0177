export interface Transaction {
  id: number;
  date: string;
  description: string;
  type: number;       // 0 = Credit, 1 = Debit
  amount: number;
  balance: string;
}

export interface TransactionQuery {
  date?: string;
  sortBy?: string;
  sortOrder?: string;
}

export interface CreateTransactionDto {
  date: string;
  description: string;
  type: number;
  amount: number;
  balance: string;
}