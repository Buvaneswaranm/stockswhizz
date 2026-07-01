type CalculatorInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  hint?: string;
};

export default function CalculatorInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  suffix,
  hint,
}: CalculatorInputProps) {
  return (
    <div>
      <label htmlFor={id} className="sw-label">
        {label}
        {suffix && (
          <span className="ml-1 font-normal text-muted">({suffix})</span>
        )}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="sw-input"
      />
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

type CalculatorSelectProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  options: { value: number; label: string }[];
};

export function CalculatorSelect({
  id,
  label,
  value,
  onChange,
  options,
}: CalculatorSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="sw-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="sw-input appearance-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-midnight-100">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
