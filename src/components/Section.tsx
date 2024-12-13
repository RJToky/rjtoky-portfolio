interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`w-full lg:px-[10%] md:px-[5%] px-4 ${className}`}>
      {children}
    </section>
  );
}
