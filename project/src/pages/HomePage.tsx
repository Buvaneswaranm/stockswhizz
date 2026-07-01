import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Clock,
  Shield,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import LinkHubSection from '../components/LinkHubSection';

const features = [
  {
    id: 'expert',
    title: 'Expert Recommendations',
    description:
      'Research-backed stock and mutual fund picks tailored to your risk appetite and goals.',
    icon: TrendingUp,
    content:
      'Our advisors analyze market trends, economic indicators, and your personal financial goals to provide tailored investment recommendations. We consider risk tolerance, investment timeline, and market conditions. Every recommendation is backed by thorough research and years of market experience.',
  },
  {
    id: 'updates',
    title: 'Market Intelligence',
    description:
      'Stay ahead with timely updates on sectors, stocks, and macro trends affecting your portfolio.',
    icon: BarChart3,
    content:
      'Stay ahead with comprehensive market updates delivered to your inbox. Our updates include real-time market analysis, stock recommendations, economic news impact, sector-specific insights, investment opportunities, and risk alerts.',
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description:
      'Ask questions anytime — our team is here to guide you through every market cycle.',
    icon: Users,
    content:
      'Get access to our expert support team throughout your investment journey. This includes query resolution, portfolio review sessions, market guidance, risk assessment, strategy adjustments, and regular performance tracking.',
  },
];

const pillars = [
  {
    icon: Shield,
    title: 'Risk-First Approach',
    text: 'Every recommendation starts with understanding what you can afford to lose.',
  },
  {
    icon: Clock,
    title: 'Long-Term Mindset',
    text: 'We focus on sustainable wealth creation, not get-rich-quick schemes.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Picks',
    text: 'Fundamental and technical analysis combined with on-ground market insight.',
  },
];

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <>
      <LinkHubSection />

      {/* Services */}
      <section className="px-4 py-16 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-xl">
            <span className="sw-badge mb-4">What We Offer</span>
            <h2 id="services-heading" className="sw-heading text-3xl sm:text-4xl">
              Everything to invest smarter
            </h2>
            <p className="mt-3 text-muted">
              From curated recommendations to lifetime support — built for Indian investors.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.id}
                  className="sw-glass sw-glass-hover group rounded-2xl p-6 sm:p-7"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="sw-heading mb-2 text-xl">{feature.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-light transition-colors hover:text-gold"
                    onClick={() => openModal(feature.title, feature.content)}
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-white/[0.06] bg-midnight-50/50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="sw-badge mb-4">Our Philosophy</span>
              <h2 className="sw-heading mb-5 text-3xl sm:text-4xl">
                Investing shouldn&apos;t feel like gambling
              </h2>
              <p className="mb-8 leading-relaxed text-muted">
                Stocks, mutual funds, and trading can overwhelm even experienced investors.
                We cut through the noise with personalized advice, regular updates, and
                hands-on support — so you make decisions you won&apos;t regret.
              </p>
              <button
                type="button"
                className="sw-btn-secondary"
                onClick={() =>
                  openModal(
                    'Our Investment Approach',
                    'At StocksWhizz, we follow a data-driven approach:\n\n1. Goal Analysis — objectives, timeline, risk capacity\n\n2. Market Research — technical & fundamental analysis\n\n3. Portfolio Strategy — allocation, diversification, risk management\n\n4. Regular Monitoring — performance tracking & adjustments\n\n5. Continuous Support — expert consultation & query resolution',
                  )
                }
              >
                See our approach
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="sw-glass flex gap-4 rounded-xl p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-muted">{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-midnight-100 to-midnight p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative max-w-lg">
              <h2 className="sw-heading text-2xl sm:text-3xl">
                Ready to take the next step?
              </h2>
              <p className="mt-3 text-muted">
                Apply for personalized guidance or explore our free calculators first.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://forms.gle/MpBgJHEkfog8cF2A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sw-btn-primary"
                >
                  Apply for Guidance
                </a>
                <Link to="/calculators" className="sw-btn-secondary">
                  Browse Calculators
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="sw-glass w-full max-w-md rounded-2xl p-6 shadow-card sm:p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="modal-title" className="sw-heading text-xl text-gold-light">
                {modalContent.title}
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1 text-muted hover:bg-white/[0.06] hover:text-cream"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="whitespace-pre-line text-sm leading-relaxed text-muted">
              {modalContent.content}
            </div>
            <button
              type="button"
              className="sw-btn-primary mt-6 w-full"
              onClick={() => setShowModal(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
