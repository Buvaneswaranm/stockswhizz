import { useMemo, useState } from 'react';
import CalculatorLayout from '../../components/calculators/CalculatorLayout';
import CalculatorInput, {
  CalculatorSelect,
} from '../../components/calculators/CalculatorInput';
import ResultGrid, { CalculatorForm } from '../../components/calculators/ResultGrid';
import { postOfficeTdRates } from '../../data/calculatorRegistry';
import {
  calculateFd,
  calculateKvp,
  calculateMis,
  calculateNsc,
  calculatePostOfficeRd,
  calculatePpf,
  calculateScss,
  calculateSsy,
} from '../../utils/calculatorFormulas';

export function PostOfficeRdPage() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.7);
  const [years, setYears] = useState(5);

  const result = useMemo(
    () => calculatePostOfficeRd(monthly, rate, years),
    [monthly, rate, years],
  );

  return (
    <CalculatorLayout
      title="Post Office RD Calculator"
      subtitle="5-year Post Office Recurring Deposit with quarterly compounding."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-rd-monthly"
          label="Monthly Deposit"
          suffix="₹"
          value={monthly}
          onChange={setMonthly}
          min={100}
          step={100}
        />
        <CalculatorInput
          id="po-rd-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
        <CalculatorInput
          id="po-rd-years"
          label="Tenure"
          suffix="years"
          value={years}
          onChange={setYears}
          min={1}
          max={5}
          hint="PO RD standard tenure is 5 years"
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          { label: 'Total Deposited', value: result.invested },
          { label: 'Interest Earned', value: result.returns },
          { label: 'Maturity Amount', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeFdPage() {
  const [principal, setPrincipal] = useState(100000);
  const [tenure, setTenure] = useState(3);
  const [rate, setRate] = useState(postOfficeTdRates[3]);

  const result = useMemo(
    () => calculateFd(principal, rate, tenure, 4),
    [principal, rate, tenure],
  );

  const handleTenureChange = (years: number) => {
    setTenure(years);
    setRate(postOfficeTdRates[years] ?? rate);
  };

  return (
    <CalculatorLayout
      title="Post Office Time Deposit (FD)"
      subtitle="Fixed deposit in Post Office — 1, 2, 3 and 5 year tenures."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-fd-principal"
          label="Deposit Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          step={1000}
        />
        <CalculatorSelect
          id="po-fd-tenure"
          label="Tenure"
          value={tenure}
          onChange={handleTenureChange}
          options={[
            { value: 1, label: '1 Year' },
            { value: 2, label: '2 Years' },
            { value: 3, label: '3 Years' },
            { value: 5, label: '5 Years' },
          ]}
        />
        <CalculatorInput
          id="po-fd-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
          hint="Default rate updates with tenure — you can edit"
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

export function PostOfficePpfPage() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);

  const result = useMemo(
    () => calculatePpf(yearly, rate, years),
    [yearly, rate, years],
  );

  return (
    <CalculatorLayout
      title="PPF Calculator"
      subtitle="Public Provident Fund — 15-year tax-free savings with annual compounding."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-ppf-yearly"
          label="Yearly Deposit"
          suffix="₹"
          value={yearly}
          onChange={setYearly}
          min={500}
          max={150000}
          step={500}
          hint="Max ₹1.5 lakh per financial year"
        />
        <CalculatorInput
          id="po-ppf-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
        <CalculatorInput
          id="po-ppf-years"
          label="Tenure"
          suffix="years"
          value={years}
          onChange={setYears}
          min={15}
          max={50}
          hint="Minimum lock-in is 15 years"
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          { label: 'Total Deposited', value: result.invested },
          { label: 'Interest Earned', value: result.returns },
          { label: 'Maturity Amount', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeNscPage() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.7);
  const years = 5;

  const result = useMemo(
    () => calculateNsc(principal, rate, years),
    [principal, rate],
  );

  return (
    <CalculatorLayout
      title="NSC Calculator"
      subtitle="National Savings Certificate — 5-year fixed income scheme."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-nsc-principal"
          label="Investment Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          step={1000}
        />
        <CalculatorInput
          id="po-nsc-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          { label: 'Investment', value: principal },
          { label: 'Interest (5 years)', value: result.interest },
          { label: 'Maturity Amount', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeSsyPage() {
  const [yearly, setYearly] = useState(50000);
  const [rate, setRate] = useState(8.2);

  const result = useMemo(() => calculateSsy(yearly, rate, 15), [yearly, rate]);

  return (
    <CalculatorLayout
      title="Sukanya Samriddhi (SSY)"
      subtitle="Girl child savings scheme — deposits for 15 years, matures at 21 years."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-ssy-yearly"
          label="Yearly Deposit"
          suffix="₹"
          value={yearly}
          onChange={setYearly}
          min={250}
          max={150000}
          step={500}
        />
        <CalculatorInput
          id="po-ssy-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          { label: 'Total Deposited (15 yrs)', value: result.invested },
          { label: 'Interest Earned', value: result.returns },
          {
            label: 'Maturity at 15 Years',
            value: result.maturity,
            highlight: true,
          },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeScssPage() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.2);
  const [years, setYears] = useState(5);

  const result = useMemo(
    () => calculateScss(principal, rate, years),
    [principal, rate, years],
  );

  return (
    <CalculatorLayout
      title="Senior Citizens Savings (SCSS)"
      subtitle="Quarterly interest payout for investors aged 60+. Max deposit ₹30 lakh."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-scss-principal"
          label="Deposit Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          max={3000000}
          step={10000}
        />
        <CalculatorInput
          id="po-scss-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
        <CalculatorInput
          id="po-scss-years"
          label="Tenure"
          suffix="years"
          value={years}
          onChange={setYears}
          min={5}
          max={5}
          hint="Standard tenure is 5 years (extendable)"
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          {
            label: 'Quarterly Payout',
            value: result.quarterlyPayout,
            highlight: true,
            decimal: true,
          },
          { label: 'Total Interest', value: result.totalInterest },
          { label: 'Principal + Interest', value: result.maturity },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeMisPage() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7.4);
  const years = 5;

  const result = useMemo(
    () => calculateMis(principal, rate, years),
    [principal, rate],
  );

  return (
    <CalculatorLayout
      title="Post Office MIS"
      subtitle="Monthly Income Scheme — earn fixed monthly interest for 5 years."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-mis-principal"
          label="Deposit Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          max={900000}
          step={10000}
          hint="Max single account deposit ₹9 lakh"
        />
        <CalculatorInput
          id="po-mis-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          {
            label: 'Monthly Income',
            value: result.monthlyIncome,
            highlight: true,
            decimal: true,
          },
          { label: 'Total Interest (5 yrs)', value: result.totalInterest },
          { label: 'Principal Returned', value: principal },
        ]}
      />
    </CalculatorLayout>
  );
}

export function PostOfficeKvpPage() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.5);

  const result = useMemo(
    () => calculateKvp(principal, rate),
    [principal, rate],
  );

  return (
    <CalculatorLayout
      title="Kisan Vikas Patra (KVP)"
      subtitle="Lump sum certificate that doubles in value at maturity."
      backTo="/calculators#post-office"
      backLabel="Post Office Schemes"
    >
      <CalculatorForm>
        <CalculatorInput
          id="po-kvp-principal"
          label="Investment Amount"
          suffix="₹"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          step={1000}
        />
        <CalculatorInput
          id="po-kvp-rate"
          label="Interest Rate"
          suffix="% p.a."
          value={rate}
          onChange={setRate}
          min={1}
          max={12}
          step={0.1}
        />
      </CalculatorForm>
      <ResultGrid
        results={[
          { label: 'Months to Double', value: result.monthsToDouble, format: 'months' },
          { label: 'Interest Earned', value: result.interest },
          { label: 'Maturity Amount', value: result.maturity, highlight: true },
        ]}
      />
    </CalculatorLayout>
  );
}
