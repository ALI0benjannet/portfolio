type Language = "EN" | "FR";

type Props = {
  lang: Language;
  onToggle: () => void;
};

const Langue = ({ lang, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Changer la langue"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-base-100 shadow-2xl ring-2 ring-accent/30 transition hover:scale-105 hover:shadow-accent/30"
    >
      <span className="text-lg font-bold tracking-wide">{lang}</span>
    </button>
  );
};

export default Langue;