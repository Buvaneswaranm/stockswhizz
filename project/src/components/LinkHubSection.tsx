import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Calculator, TrendingUp } from 'lucide-react';

type CtaCard = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  primary?: boolean;
};

const ctaCards: CtaCard[] = [
  {
    id: 'investment-guide',
    icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
    title: 'Investment Guidance',
    description:
      'Get a personalized roadmap aligned to your goals, risk profile, and timeline.',
    buttonText: 'Apply Now',
    href: 'https://forms.gle/MpBgJHEkfog8cF2A8',
    primary: true,
  },
  {
    id: 'consultation',
    icon: <Calendar className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
    title: 'Consultation Call',
    description:
      'Book a one-on-one session with our team at a time that works for you.',
    buttonText: 'Book a Call',
    href: 'https://stockswhizz.setmore.com',
  },
];

const stats = [
  { value: '13+', label: 'Free Calculators' },
  { value: '1000+', label: 'Investors Guided' },
  { value: '100%', label: 'India Focused' },
];

function CtaCardItem({ card }: { card: CtaCard }) {
  return (
    <article className="sw-glass sw-glass-hover group flex flex-col rounded-2xl p-6 sm:p-7">
      <div
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
          card.primary
            ? 'bg-gold/15 text-gold ring-gold/25'
            : 'bg-white/[0.04] text-gold-light ring-white/10'
        }`}
      >
        {card.icon}
      </div>

      <h3 className="sw-heading mb-2 text-xl sm:text-2xl">{card.title}</h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
        {card.description}
      </p>

      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
          card.primary
            ? 'bg-gold text-midnight hover:bg-gold-light hover:shadow-glow'
            : 'border border-white/10 bg-white/[0.04] text-cream hover:border-gold/30 hover:bg-white/[0.07]'
        }`}
      >
        {card.buttonText}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}

export default function LinkHubSection() {
  return (
    <section id="link-hub" aria-labelledby="link-hub-heading" className="px-4 pb-8 pt-12 sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <header className="animate-fade-up mb-14 text-center">
          <span className="sw-badge mb-6">Wealth Advisory · India</span>
          <h1
            id="link-hub-heading"
            className="sw-heading mx-auto mb-5 max-w-3xl text-4xl leading-[1.15] sm:text-5xl md:text-6xl"
          >
            Build wealth with{' '}
            <em className="sw-gradient-text not-italic">clarity</em> and confidence
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Personalized guidance, free financial tools, and practical education —
            everything you need for your investing journey.
          </p>
        </header>

        <div className="animate-fade-up mb-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-midnight-100/80 px-4 py-6 text-center sm:py-8">
              <p className="sw-heading text-2xl text-gold-light sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up mb-10 grid gap-5 sm:grid-cols-2">
          {ctaCards.map((card) => (
            <CtaCardItem key={card.id} card={card} />
          ))}
        </div>

        <div className="animate-fade-up sw-glass sw-glass-hover mb-14 overflow-hidden rounded-2xl">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/25">
              <Calculator className="h-5 w-5 text-gold" aria-hidden="true" />
            </div>
            <div className="flex-grow">
              <h2 className="sw-heading text-xl text-cream sm:text-2xl">
                Financial Calculators
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                SIP, loans, FD, and every major Post Office scheme — free and instant.
              </p>
            </div>
            <Link to="/calculators" className="sw-btn-primary shrink-0">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
