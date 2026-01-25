export function SectionBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm text-gray-800/90 font-mono bg-gray-300/50 border border-gray-500/10 px-2 py-1 rounded-md w-fit mb-4 uppercase tracking-widest ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl md:text-8xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mb-20 max-w-4xl ${className}`}>{children}</section>
  );
}
