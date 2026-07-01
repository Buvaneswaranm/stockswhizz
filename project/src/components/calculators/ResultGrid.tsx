import type { ReactNode } from 'react';
import { formatINR, formatINRDecimal } from '../../utils/formatCurrency';

type ResultItem = {
  label: string;
  value: number;
  highlight?: boolean;
  decimal?: boolean;
  format?: 'currency' | 'number' | 'months';
};

type ResultGridProps = {
  results: ResultItem[];
};

function formatValue(item: ResultItem): string {
  if (item.format === 'months') {
    return `${Math.round(item.value)} months`;
  }
  if (item.format === 'number') {
    return String(Math.round(item.value));
  }
  return item.decimal ? formatINRDecimal(item.value) : formatINR(item.value);
}

export default function ResultGrid({ results }: ResultGridProps) {
  const highlight = results.find((r) => r.highlight);
  const others = results.filter((r) => !r.highlight);

  return (
    <div className="mt-8">
      {highlight && (
        <div className="mb-4 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/15 to-gold/5 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gold-dim">
            {highlight.label}
          </p>
          <p className="sw-heading mt-2 text-3xl text-gold-light sm:text-4xl">
            {formatValue(highlight)}
          </p>
        </div>
      )}

      {others.length > 0 && (
        <dl className="grid gap-3 sm:grid-cols-2">
          {others.map((item) => (
            <div
              key={item.label}
              className="sw-glass rounded-xl px-4 py-3.5"
            >
              <dt className="text-xs text-muted">{item.label}</dt>
              <dd className="mt-0.5 text-base font-semibold text-cream">
                {formatValue(item)}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export function CalculatorForm({ children }: { children: ReactNode }) {
  return (
    <div className="sw-glass rounded-2xl p-6 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </div>
  );
}
