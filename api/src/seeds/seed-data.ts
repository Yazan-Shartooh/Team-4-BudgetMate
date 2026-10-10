import type { TransactionType } from '../transactions/transaction.types';

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

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

/** offset 0 = current month, 1 = previous month, and so on. */
export function monthKey(offset: number): string {
  const now = new Date();
  const firstOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  firstOfCurrentMonth.setMonth(firstOfCurrentMonth.getMonth() - offset);
  return `${firstOfCurrentMonth.getFullYear()}-${pad2(firstOfCurrentMonth.getMonth() + 1)}`;
}

/** Returns a valid date in the requested month and never uses a future date. */
export function dateIn(offset: number, day: number): string {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  monthStart.setMonth(monthStart.getMonth() - offset);

  const year = monthStart.getFullYear();
  const monthIndex = monthStart.getMonth();
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  let safeDay = Math.max(1, Math.min(day, lastDayOfMonth));

  if (offset === 0) {
    safeDay = Math.min(safeDay, now.getDate());
  }

  return `${year}-${pad2(monthIndex + 1)}-${pad2(safeDay)}`;
}

// 32 sample transactions based on the project data, spread across three months.
// Dates are generated dynamically, so the sample always uses the current,
// previous, and two-months-ago periods while keeping the YYYY-MM-DD format.
export const SEED_TRANSACTIONS: SeedTransaction[] = [
  // Current month: income = 1,500.00; expenses = 858.50; savings = 641.50.
  { type: 'income', amount: 1200, category: 'Salary', date: dateIn(0, 1), note: 'Monthly salary' },
  { type: 'income', amount: 300, category: 'Freelance', date: dateIn(0, 8), note: 'Freelance project' },
  { type: 'expense', amount: 400, category: 'Housing', date: dateIn(0, 1), note: 'Rent' },
  { type: 'expense', amount: 70, category: 'Bills', date: dateIn(0, 2), note: 'Electricity and internet' },
  { type: 'expense', amount: 85.5, category: 'Food', date: dateIn(0, 3), note: 'Weekly groceries' },
  { type: 'expense', amount: 45, category: 'Transport', date: dateIn(0, 4), note: 'Monthly bus pass' },
  { type: 'expense', amount: 45, category: 'Entertainment', date: dateIn(0, 5), note: 'Cinema ticket' },
  { type: 'expense', amount: 62.3, category: 'Food', date: dateIn(0, 6), note: 'Supermarket' },
  { type: 'expense', amount: 25, category: 'Health', date: dateIn(0, 7), note: 'Pharmacy' },
  { type: 'expense', amount: 38, category: 'Transport', date: dateIn(0, 8), note: 'Taxi' },
  { type: 'expense', amount: 37.7, category: 'Food', date: dateIn(0, 9), note: 'Lunch with friends' },
  { type: 'expense', amount: 50, category: 'Entertainment', date: dateIn(0, 9), note: 'Concert' },

  // Previous month.
  { type: 'income', amount: 1200, category: 'Salary', date: dateIn(1, 1), note: 'Monthly salary' },
  { type: 'income', amount: 250, category: 'Freelance', date: dateIn(1, 18), note: 'Freelance project' },
  { type: 'income', amount: 50, category: 'Gift', date: dateIn(1, 25), note: 'Birthday gift' },
  { type: 'expense', amount: 400, category: 'Housing', date: dateIn(1, 1), note: 'Rent' },
  { type: 'expense', amount: 85, category: 'Bills', date: dateIn(1, 3), note: 'Electricity and internet' },
  { type: 'expense', amount: 90, category: 'Food', date: dateIn(1, 5), note: 'Groceries' },
  { type: 'expense', amount: 40, category: 'Transport', date: dateIn(1, 8), note: 'Fuel' },
  { type: 'expense', amount: 30, category: 'Entertainment', date: dateIn(1, 11), note: 'Streaming and games' },
  { type: 'expense', amount: 60, category: 'Health', date: dateIn(1, 12), note: 'Dentist' },
  { type: 'expense', amount: 75, category: 'Food', date: dateIn(1, 14), note: 'Groceries' },
  { type: 'expense', amount: 55, category: 'Transport', date: dateIn(1, 20), note: 'Train tickets' },
  { type: 'expense', amount: 110.4, category: 'Food', date: dateIn(1, 22), note: 'Family dinner' },
  { type: 'expense', amount: 22.5, category: 'Entertainment', date: dateIn(1, 27), note: 'Bowling' },

  // Two months ago: income = 1,000.00; expenses = 1,140.00; savings = -140.00.
  { type: 'income', amount: 1000, category: 'Salary', date: dateIn(2, 1), note: 'Monthly salary' },
  { type: 'expense', amount: 400, category: 'Housing', date: dateIn(2, 1), note: 'Rent' },
  { type: 'expense', amount: 90, category: 'Bills', date: dateIn(2, 4), note: 'Electricity and internet' },
  { type: 'expense', amount: 180, category: 'Food', date: dateIn(2, 6), note: 'Groceries' },
  { type: 'expense', amount: 180, category: 'Health', date: dateIn(2, 15), note: 'Medical check-up' },
  { type: 'expense', amount: 170, category: 'Food', date: dateIn(2, 19), note: 'Groceries and restaurant' },
  { type: 'expense', amount: 120, category: 'Entertainment', date: dateIn(2, 23), note: 'Weekend trip' },
];

// Starter budgets for the current month and the previous month.
export const SEED_BUDGETS: SeedBudget[] = [
  { category: 'Food', month: monthKey(0), amount: 300 },
  { category: 'Transport', month: monthKey(0), amount: 100 },
  { category: 'Entertainment', month: monthKey(0), amount: 80 },
  { category: 'Food', month: monthKey(1), amount: 300 },
  { category: 'Transport', month: monthKey(1), amount: 100 },
  { category: 'Entertainment', month: monthKey(1), amount: 80 },
];
