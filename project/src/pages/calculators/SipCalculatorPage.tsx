import { useMemo, useState } from 'react';
import CalculatorLayout from '../../components/calculators/CalculatorLayout';
import CalculatorInput from '../../components/calculators/CalculatorInput';
import ResultGrid, { CalculatorForm } from '../../components/calculators/ResultGrid';
import { calculateSip } from '../../utils/calculatorFormulas';

export default function SipCalculatorPage() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateSip(monthly, rate, years),
    [monthly, rate, years],
  );

  return (
    <CalculatorLayout
      title="SIP Calculator"
      subtitle="Estimate wealth created through a Systematic Investment Plan in mutual funds."
    >
      <CalculatorForm>
        <CalculatorInput
          id="sip-monthly"
          label="Monthly Investment"
          suffix="₹"
          value={monthly}
          onChange={setMonthly}
          min={500}
          step={500}
        />
        <CalculatorInput
          id="sip-rate"
          label="Expected Return"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={30}
          step={0.5}
        />
        <CalculatorInput
          id="sip-years"
          label="Investment Period"
          suffix="years"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
        />
      </CalculatorForm>

      <ResultGrid
        results={[
          { label: 'Total Invested', value: result.invested },
          { label: 'Estimated Returns', value: result.returns },
          { label: 'Maturity Value', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}
