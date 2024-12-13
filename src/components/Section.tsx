interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`w-full px-[10%] mx-auto ${className}`}>
      {children}
    </section>
  );
}
