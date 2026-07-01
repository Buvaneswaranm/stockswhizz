import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  calculatorCategories,
  calculators,
} from '../data/calculatorRegistry';

export default function CalculatorsHubPage() {
  return (
    <div className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <span className="sw-badge mb-4">Free Tools</span>
          <h1 className="sw-heading text-3xl sm:text-4xl md:text-5xl">
            Financial <em className="sw-gradient-text not-italic">Calculators</em>
          </h1>
          <p className="mt-4 text-muted">
            Accurate estimates for investments, loans, and government savings schemes.
            All rates are editable to match current offerings.
          </p>
        </header>

        {calculatorCategories.map((category) => {
          const items = calculators.filter((c) => c.category === category.id);
          if (items.length === 0) return null;

          return (
            <section
              key={category.id}
              id={category.id === 'post-office' ? 'post-office' : undefined}
              className="mb-14"
            >
              <h2 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold-dim">
                <span className="h-px flex-grow max-w-8 bg-gold/30" />
                {category.label}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={calc.id}
                      to={calc.path}
                      className="sw-glass sw-glass-hover group flex flex-col rounded-xl p-5"
                    >
                      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                        <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <h3 className="mb-1 font-semibold text-cream group-hover:text-gold-light">
                        {calc.title}
                      </h3>
                      <p className="mb-4 flex-grow text-sm text-muted">{calc.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gold-dim group-hover:text-gold">
                        Calculate
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
