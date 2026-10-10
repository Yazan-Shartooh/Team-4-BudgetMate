import { Injectable } from '@nestjs/common';
import type { TransactionType } from '../transactions/transaction.types';

const EXPENSE_CATEGORIES = [
  'Food',
  'Transport',
  'Housing',
  'Bills',
  'Health',
  'Entertainment',
  'Shopping',
] as const;

const INCOME_CATEGORIES = [
  'Salary',
  'Freelance',
  'Gift',
  'Other Income',
] as const;

@Injectable()
export class CategoriesService {
  getIncomeCategories(): string[] {
    return [...INCOME_CATEGORIES];
  }

  getExpenseCategories(): string[] {
    return [...EXPENSE_CATEGORIES];
  }

  isValidCategory(type: TransactionType, name: string): boolean {
    return type === 'income'
      ? INCOME_CATEGORIES.includes(name as (typeof INCOME_CATEGORIES)[number])
      : EXPENSE_CATEGORIES.includes(name as (typeof EXPENSE_CATEGORIES)[number]);
  }

  isExpenseCategory(name: string): boolean {
    return EXPENSE_CATEGORIES.includes(name as (typeof EXPENSE_CATEGORIES)[number]);
  }

  isIncomeCategory(name: string): boolean {
    return INCOME_CATEGORIES.includes(name as (typeof INCOME_CATEGORIES)[number]);
  }

  isKnownCategory(name: string): boolean {
    return this.isExpenseCategory(name) || this.isIncomeCategory(name);
  }
}
