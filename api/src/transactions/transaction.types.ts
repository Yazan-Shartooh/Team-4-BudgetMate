export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string; // YYYY-MM-DD
  note: string; // Empty string when the user supplied no note.
  createdAt: string; // ISO timestamp used to break ties in date sorting.
}

export interface TransactionFilter {
  type?: TransactionType;
  category?: string;
  month?: string; // YYYY-MM
}
