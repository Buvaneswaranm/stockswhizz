type PageBackgroundProps = {
  variant?: 'hero' | 'subtle';
};

export default function PageBackground({ variant = 'subtle' }: PageBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="sw-grid-bg absolute inset-0 opacity-60" />
      {variant === 'hero' && (
        <>
          <div className="link-hub-orb link-hub-orb-1 absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="link-hub-orb link-hub-orb-2 absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
          <div className="link-hub-orb link-hub-orb-3 absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[80px]" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
    </div>
  );
}
