import type { LucideIcon } from 'lucide-react';
import {
  Banknote,
  Building2,
  Calculator,
  LineChart,
  CircleDollarSign,
  Landmark,
  PiggyBank,
  TrendingUp,
  Wallet,
} from 'lucide-react';

export type CalculatorItem = {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  category: 'investment' | 'loan' | 'deposit' | 'post-office';
  defaultRate?: number;
};

export const calculatorCategories = [
  { id: 'investment', label: 'Investment' },
  { id: 'loan', label: 'Loans' },
  { id: 'deposit', label: 'Fixed Deposit' },
  { id: 'post-office', label: 'Post Office Schemes' },
] as const;

export const calculators: CalculatorItem[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    description: 'Estimate returns on monthly mutual fund SIP investments.',
    path: '/calculators/sip',
    icon: TrendingUp,
    category: 'investment',
    defaultRate: 12,
  },
  {
    id: 'step-up-sip',
    title: 'Step-Up SIP Calculator',
    description: 'Plan SIP with yearly increment in monthly investment.',
    path: '/calculators/step-up-sip',
    icon: LineChart,
    category: 'investment',
    defaultRate: 12,
  },
  {
    id: 'home-loan',
    title: 'Home Loan EMI Calculator',
    description: 'Calculate EMI, total interest and repayment for home loans.',
    path: '/calculators/home-loan',
    icon: Building2,
    category: 'loan',
    defaultRate: 8.5,
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan EMI Calculator',
    description: 'Calculate EMI and total cost for personal loans.',
    path: '/calculators/personal-loan',
    icon: Wallet,
    category: 'loan',
    defaultRate: 11,
  },
  {
    id: 'fd',
    title: 'FD Calculator',
    description: 'Fixed deposit maturity with quarterly compounding.',
    path: '/calculators/fd',
    icon: PiggyBank,
    category: 'deposit',
    defaultRate: 7,
  },
  {
    id: 'po-rd',
    title: 'Post Office RD',
    description: 'Recurring deposit maturity with quarterly compounding.',
    path: '/calculators/post-office/rd',
    icon: Landmark,
    category: 'post-office',
    defaultRate: 6.7,
  },
  {
    id: 'po-fd',
    title: 'Post Office Time Deposit (FD)',
    description: 'PO time deposit maturity for 1 to 5 year tenures.',
    path: '/calculators/post-office/fd',
    icon: Banknote,
    category: 'post-office',
    defaultRate: 7.1,
  },
  {
    id: 'po-ppf',
    title: 'Post Office PPF',
    description: 'Public Provident Fund maturity over 15 years.',
    path: '/calculators/post-office/ppf',
    icon: CircleDollarSign,
    category: 'post-office',
    defaultRate: 7.1,
  },
  {
    id: 'po-nsc',
    title: 'Post Office NSC',
    description: 'National Savings Certificate 5-year maturity.',
    path: '/calculators/post-office/nsc',
    icon: Calculator,
    category: 'post-office',
    defaultRate: 7.7,
  },
  {
    id: 'po-ssy',
    title: 'Sukanya Samriddhi (SSY)',
    description: 'Girl child savings scheme — 15 year maturity.',
    path: '/calculators/post-office/ssy',
    icon: PiggyBank,
    category: 'post-office',
    defaultRate: 8.2,
  },
  {
    id: 'po-scss',
    title: 'Senior Citizens Scheme (SCSS)',
    description: 'Quarterly interest payout for senior citizens.',
    path: '/calculators/post-office/scss',
    icon: Landmark,
    category: 'post-office',
    defaultRate: 8.2,
  },
  {
    id: 'po-mis',
    title: 'Post Office MIS',
    description: 'Monthly income scheme — monthly interest payout.',
    path: '/calculators/post-office/mis',
    icon: Wallet,
    category: 'post-office',
    defaultRate: 7.4,
  },
  {
    id: 'po-kvp',
    title: 'Kisan Vikas Patra (KVP)',
    description: 'Lump sum investment — estimate doubling period.',
    path: '/calculators/post-office/kvp',
    icon: TrendingUp,
    category: 'post-office',
    defaultRate: 7.5,
  },
];

/** Indicative Post Office TD rates by tenure (years) */
export const postOfficeTdRates: Record<number, number> = {
  1: 6.9,
  2: 7.0,
  3: 7.1,
  5: 7.5,
};
