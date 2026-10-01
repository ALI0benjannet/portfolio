import Title from "./Title";
import { Award, BadgeCheck, FileText, Trophy } from "lucide-react";

type Language = "EN" | "FR";

type Certification = {
  id: number;
  name: string;
  issuer: string;
  detail?: string;
  date?: string;
  // Chemin vers le PDF, ex. "/certificates/hcda.pdf" (fichier dans /public/certificates/).
  // Vide = pas de lien affiché.
  file?: string;
};

const certifications: Record<Language, Certification[]> = {
  EN: [
    { id: 1, name: "Hedera Certified Developer Associate (HCDA)", issuer: "Hedera", date: "Jun 2026", file: "" },
    { id: 2, name: "Hedera Certified Foundation (HCF)", issuer: "Hedera", date: "Jun 2026", file: "" },
    { id: 3, name: "Hedera Business Foundation (HBF)", issuer: "Hedera", date: "Jun 2026", file: "" },
    { id: 4, name: "Project Ball (Bal des Projets)", detail: "Certificate of Participation", issuer: "ESPRIT", date: "2026", file: "" },
    { id: 5, name: "Project Ball (Bal des Projets)", detail: "Certificate of Participation", issuer: "ESPRIT", date: "2025", file: "" },
    { id: 6, name: "Data Science", detail: "Certificate of Participation", issuer: "ESPRIM", file: "" },
    { id: 7, name: "C Language Bootcamp", issuer: "Microsoft Club", file: "" },
    { id: 8, name: "JavaScript Workshop", issuer: "Microsoft Club", file: "" },
    { id: 9, name: "C Language Workshop", issuer: "Coursera", file: "" },
    { id: 10, name: "Pascal Programming", issuer: "Africa Code Week Tunisia", file: "" },
    { id: 11, name: "Lifeguard Training", issuer: "National Civil Protection Office", file: "" },
  ],
  FR: [
    { id: 1, name: "Hedera Certified Developer Associate (HCDA)", issuer: "Hedera", date: "Juin 2026", file: "" },
    { id: 2, name: "Hedera Certified Foundation (HCF)", issuer: "Hedera", date: "Juin 2026", file: "" },
    { id: 3, name: "Hedera Business Foundation (HBF)", issuer: "Hedera", date: "Juin 2026", file: "" },
    { id: 4, name: "Bal des Projets", detail: "Attestation de participation", issuer: "ESPRIT", date: "2026", file: "" },
    { id: 5, name: "Bal des Projets", detail: "Attestation de participation", issuer: "ESPRIT", date: "2025", file: "" },
    { id: 6, name: "Data Science", detail: "Attestation de participation", issuer: "ESPRIM", file: "" },
    { id: 7, name: "Bootcamp langage C", issuer: "Microsoft Club", file: "" },
    { id: 8, name: "Atelier JavaScript", issuer: "Microsoft Club", file: "" },
    { id: 9, name: "Atelier langage C", issuer: "Coursera", file: "" },
    { id: 10, name: "Programmation Pascal", issuer: "Africa Code Week Tunisia", file: "" },
    { id: 11, name: "Formation de sauveteur", issuer: "Office National de la Protection Civile", file: "" },
  ],
};

const awards: Record<Language, { id: number; name: string }[]> = {
  EN: [
    { id: 1, name: "The Africa Prize in the Pascal Program" },
    { id: 2, name: "Project Ball (Bal des Projets) – Award" },
    { id: 3, name: "Project selected for incubation" },
  ],
  FR: [
    { id: 1, name: "Prix Africa du programme Pascal" },
    { id: 2, name: "Bal des Projets – Prix" },
    { id: 3, name: "Projet sélectionné pour incubation" },
  ],
};

const labels = {
  EN: {
    title: "Certifications & Awards",
    certifications: "Certifications",
    awards: "Awards",
    view: "View certificate",
  },
  FR: {
    title: "Certifications & Distinctions",
    certifications: "Certifications",
    awards: "Distinctions",
    view: "Voir le certificat",
  },
};

type Props = {
  lang: Language;
};

const Certifications = ({ lang }: Props) => {
  const t = labels[lang];
  const certificationList = certifications[lang];
  const awardList = awards[lang];

  return (
    <section id="certifications" className="mt-16 space-y-6 scroll-mt-28">
      <Title title={t.title} />
      <section className="relative overflow-hidden rounded-3xl border border-base-200/60 bg-base-100/70 p-6 shadow-2xl backdrop-blur-md md:p-10">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h3 className="text-left text-xl font-semibold">{t.certifications}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificationList.map((certification) => (
                <article
                  key={certification.id}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-base-200/70 bg-base-100/90 p-4 text-left shadow-lg transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold leading-tight text-accent">
                        {certification.name}
                      </h4>
                      {certification.detail && (
                        <p className="text-xs text-base-content/70">{certification.detail}</p>
                      )}
                      <p className="text-sm font-semibold text-base-content/80">
                        {certification.issuer}
                      </p>
                    </div>
                  </div>
                  {(certification.date || certification.file) && (
                    <div className="mt-auto flex flex-wrap items-center gap-2">
                      {certification.date && (
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                          {certification.date}
                        </span>
                      )}
                      {certification.file && (
                        <a
                          href={certification.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-xs btn-outline btn-accent"
                        >
                          <FileText className="h-3 w-3" />
                          {t.view}
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-left text-xl font-semibold">{t.awards}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {awardList.map((award, index) => (
                <article
                  key={award.id}
                  className="flex items-center gap-3 rounded-2xl border border-base-200/70 bg-base-100/90 p-4 text-left shadow-lg transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {index === 0 ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </div>
                  <p className="font-semibold leading-tight text-base-content/90">{award.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Certifications;
