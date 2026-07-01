import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type CalculatorLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
};

export default function CalculatorLayout({
  title,
  subtitle,
  children,
  backTo = '/calculators',
  backLabel = 'All Calculators',
}: CalculatorLayoutProps) {
  return (
    <div className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold-light"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel}
          </Link>
        </nav>

        <header className="mb-8">
          <span className="sw-badge mb-4">Calculator</span>
          <h1 className="sw-heading text-2xl sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        </header>

        {children}

        <p className="mt-8 text-center text-xs text-muted/60">
          Rates are indicative and editable. Actual returns may vary. Not financial advice.
        </p>
      </div>
    </div>
  );
}
