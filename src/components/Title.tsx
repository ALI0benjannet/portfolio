type TitleProps = {
  title: string;
  /** Petit numéro ou mot affiché au-dessus du titre. */
  eyebrow?: string;
  subtitle?: string;
};

// Un seul <h1> par page (dans le Hero) : les sections utilisent <h2>.
const Title = ({ title, eyebrow, subtitle }: TitleProps) => (
  <div className="mb-10 flex flex-col items-center text-center">
    {eyebrow && (
      <span className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    <span className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-primary" />
    {subtitle && (
      <p className="mt-4 max-w-2xl text-base text-base-content/70">{subtitle}</p>
    )}
  </div>
);

export default Title;
