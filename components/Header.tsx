type HeaderProps = {
  courseName: string;
  subtitle: string;
  updateDate: string;
  updateDateIso: string;
};

export function Header({
  courseName,
  subtitle,
  updateDate,
  updateDateIso,
}: HeaderProps) {
  return (
    <header className="border-b border-border pb-10 text-center">
      <p className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {subtitle}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-[2.75rem] sm:leading-tight">
        {courseName}
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        <time dateTime={updateDateIso}>{updateDate}</time>
      </p>
    </header>
  );
}
