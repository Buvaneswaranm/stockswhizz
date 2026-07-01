import { useMemo, useState } from 'react';
import CalculatorLayout from '../../components/calculators/CalculatorLayout';
import CalculatorInput from '../../components/calculators/CalculatorInput';
import ResultGrid, { CalculatorForm } from '../../components/calculators/ResultGrid';
import { calculateStepUpSip } from '../../utils/calculatorFormulas';

export default function StepUpSipCalculatorPage() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [stepUp, setStepUp] = useState(10);

  const result = useMemo(
    () => calculateStepUpSip(monthly, rate, years, stepUp),
    [monthly, rate, years, stepUp],
  );

  return (
    <CalculatorLayout
      title="Step-Up SIP Calculator"
      subtitle="Increase your SIP every year and see the power of rising contributions."
    >
      <CalculatorForm>
        <CalculatorInput
          id="stepup-monthly"
          label="Starting Monthly SIP"
          suffix="₹"
          value={monthly}
          onChange={setMonthly}
          min={500}
          step={500}
        />
        <CalculatorInput
          id="stepup-rate"
          label="Expected Return"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={30}
          step={0.5}
        />
        <CalculatorInput
          id="stepup-years"
          label="Investment Period"
          suffix="years"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
        />
        <CalculatorInput
          id="stepup-percent"
          label="Yearly Step-Up"
          suffix="%"
          value={stepUp}
          onChange={setStepUp}
          min={0}
          max={50}
          step={1}
          hint="SIP amount increases by this % every year"
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
