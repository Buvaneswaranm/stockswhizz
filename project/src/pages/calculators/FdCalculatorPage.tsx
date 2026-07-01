import { useMemo, useState } from 'react';
import CalculatorLayout from '../../components/calculators/CalculatorLayout';
import CalculatorInput from '../../components/calculators/CalculatorInput';
import ResultGrid, { CalculatorForm } from '../../components/calculators/ResultGrid';
import { calculateFd } from '../../utils/calculatorFormulas';

export default function FdCalculatorPage() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);

  const result = useMemo(
    () => calculateFd(principal, rate, years, 4),
    [principal, rate, years],
  );

  return (
    <CalculatorLayout
      title="FD Calculator"
      subtitle="Fixed deposit maturity with quarterly compounding — banks and NBFCs."
    >
      <CalculatorForm>
        <CalculatorInput
          id="fd-principal"
          label="Deposit Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          step={1000}
        />
        <CalculatorInput
          id="fd-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={15}
          step={0.1}
        />
        <CalculatorInput
          id="fd-years"
          label="Tenure"
          suffix="years"
          value={years}
          onChange={setYears}
          min={1}
          max={10}
        />
      </CalculatorForm>

      <ResultGrid
        results={[
          { label: 'Principal', value: principal },
          { label: 'Interest Earned', value: result.interest },
          { label: 'Maturity Amount', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}
