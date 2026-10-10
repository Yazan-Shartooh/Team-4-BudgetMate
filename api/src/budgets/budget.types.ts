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
