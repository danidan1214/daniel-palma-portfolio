import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function Section({ id, className = '', ariaLabel, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-8 md:py-10 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}