import { useMemo, useState } from 'react';
import CalculatorLayout from '../../components/calculators/CalculatorLayout';
import CalculatorInput from '../../components/calculators/CalculatorInput';
import ResultGrid, { CalculatorForm } from '../../components/calculators/ResultGrid';
import { calculateEmi } from '../../utils/calculatorFormulas';

type LoanCalculatorPageProps = {
  title: string;
  subtitle: string;
  defaultRate: number;
  maxTenure?: number;
};

export function LoanCalculatorPage({
  title,
  subtitle,
  defaultRate,
  maxTenure = 30,
}: LoanCalculatorPageProps) {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(defaultRate);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateEmi(principal, rate, years),
    [principal, rate, years],
  );

  return (
    <CalculatorLayout title={title} subtitle={subtitle}>
      <CalculatorForm>
        <CalculatorInput
          id="loan-amount"
          label="Loan Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={100000}
          step={100000}
        />
        <CalculatorInput
          id="loan-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={24}
          step={0.1}
        />
        <CalculatorInput
          id="loan-tenure"
          label="Loan Tenure"
          suffix="years"
          value={years}
          onChange={setYears}
          min={1}
          max={maxTenure}
        />
      </CalculatorForm>

      <ResultGrid
        results={[
          { label: 'Monthly EMI', value: result.emi, highlight: true, decimal: true },
          { label: 'Total Interest', value: result.totalInterest },
          { label: 'Total Payment', value: result.totalPayment },
          { label: 'Principal Amount', value: principal },
        ]}
      />
    </CalculatorLayout>
  );
}

export default function HomeLoanCalculatorPage() {
  return (
    <LoanCalculatorPage
      title="Home Loan EMI Calculator"
      subtitle="Calculate monthly EMI, total interest and repayment for your home loan."
      defaultRate={8.5}
      maxTenure={30}
    />
  );
}

export function PersonalLoanCalculatorPage() {
  return (
    <LoanCalculatorPage
      title="Personal Loan EMI Calculator"
      subtitle="Plan your personal loan EMI and total repayment cost."
      defaultRate={11}
      maxTenure={7}
    />
  );
}
