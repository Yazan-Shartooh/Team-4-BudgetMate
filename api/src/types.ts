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

export type BudgetStatus = 'on_track' | 'near_limit' | 'exceeded' | 'no_budget';

export interface Budget {
  id: string;
  category: string;
  month: string; // YYYY-MM
  amount: number;
}

export interface BudgetUsage {
  category: string;
  month: string;
  budgetId: string | null;
  budget: number | null;
  spent: number;
  remaining: number | null;
  exceededBy: number;
  percentUsed: number | null;
  status: BudgetStatus;
}

export interface SeedTransaction {
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  note?: string;
}

export interface SeedBudget {
  category: string;
  month: string;
  amount: number;
}
