type LogoProps = {
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: { box: 'h-9 px-1.5', wordmark: 'text-xl' },
  md: { box: 'h-11 px-2', wordmark: 'text-2xl' },
  lg: { box: 'h-14 px-2.5', wordmark: 'text-3xl' },
} as const;

export default function Logo({
  showWordmark = true,
  size = 'sm',
  className = '',
}: LogoProps) {
  const { box, wordmark } = sizeClasses[size];
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex shrink-0 items-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-white/10 ${box}`}
      >
        <img
          src={logoSrc}
          alt="StocksWhizz logo"
          className="h-full w-auto object-contain"
        />
      </span>
      {showWordmark && (
        <span
          className={`font-display tracking-tight text-cream transition-colors group-hover:text-gold-light ${wordmark}`}
        >
          StocksWhizz
        </span>
      )}
    </span>
  );
}
