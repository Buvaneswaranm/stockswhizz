import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-midnight-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl text-cream">
              StocksWhizz
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Personalized investment guidance and free financial calculators for
              Indian investors. Plan smarter, invest with confidence.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dim">
              Tools
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link to="/calculators/sip" className="hover:text-gold-light">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link to="/calculators/home-loan" className="hover:text-gold-light">
                  Home Loan EMI
                </Link>
              </li>
              <li>
                <Link to="/calculators/fd" className="hover:text-gold-light">
                  FD Calculator
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-gold-light">
                  All Calculators →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dim">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="https://forms.gle/MpBgJHEkfog8cF2A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light"
                >
                  Apply for Guidance
                </a>
              </li>
              <li>
                <a
                  href="https://stockswhizz.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} StocksWhizz. All rights reserved.</p>
          <p>Not SEBI-registered. For education only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
