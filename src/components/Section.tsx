interface SectionProps {
  children?: React.ReactNode;
}
function Section({ children }: SectionProps) {
  return (
    <div className="flex w-full justify-around flex-wrap gap-2 my-2">
      {children}
    </div>
  );
}

export default Section;
