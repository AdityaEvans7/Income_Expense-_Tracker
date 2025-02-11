import { dashboard, expenses, transactions, trend } from "../utils/Icon";

export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: dashboard,
    link: '/dashboard'
  },
  {
    id: 2,
    title: 'View Transaction',
    icon: transactions,
    link: '/dashboard'
  },
  {
    id: 3,
    title: 'Incomes',
    icon: trend,
    link: '/dashboard'
  },
  {
    id: 4,
    title: 'Expense',
    icon: expenses,
    link: '/dashboard'
  },
];
