import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';

type InternalNavLink = {
  label: string;
  to: string;
  external?: false;
};

type ExternalNavLink = {
  label: string;
  to: string;
  external: true;
  cta?: boolean;
};

type NavLinkItem = InternalNavLink | ExternalNavLink;

const navLinks: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Calculators', to: '/calculators' },
  {
    label: 'Apply',
    to: 'https://forms.gle/MpBgJHEkfog8cF2A8',
    external: true,
  },
  {
    label: 'Book Call',
    to: 'https://stockswhizz.setmore.com',
    external: true,
    cta: true,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-midnight/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.cta
                    ? 'sw-btn-primary ml-2 !py-2 !text-xs'
                    : 'rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-cream'
                }
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  pathname === link.to ||
                  (link.to === '/calculators' && pathname.startsWith('/calculators'))
                    ? 'bg-white/[0.06] text-gold-light'
                    : 'text-muted hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-white/[0.06] hover:text-cream md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/[0.06] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/[0.04] hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/[0.04] hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
