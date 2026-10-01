import Title from "./Title";
import Reveal from "./Reveal";
import { Award, BadgeCheck, FileText, Trophy } from "lucide-react";
import type { Language } from "@/lib/site";

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
    subtitle: "Professional certifications, trainings and recognitions.",
    certifications: "Certifications",
    awards: "Awards",
    view: "View certificate",
  },
  FR: {
    title: "Certifications & Distinctions",
    subtitle: "Certifications professionnelles, formations et distinctions.",
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
    <section id="certifications" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="05" title={t.title} subtitle={t.subtitle} />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            <BadgeCheck className="h-4 w-4" />
            {t.certifications}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certificationList.map((certification, index) => {
              const highlighted = certification.issuer === "Hedera";
              return (
                <Reveal key={certification.id} delay={Math.min(index, 5) * 50} className="h-full">
                  <article
                    className={`flex h-full flex-col gap-3 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 ${
                      highlighted
                        ? "border-accent/30 bg-accent/5 hover:border-accent/60"
                        : "border-base-content/10 bg-base-200/40 hover:border-accent/40"
                    }`}
                  >
                    <div>
                      <h4 className="font-semibold leading-snug">{certification.name}</h4>
                      {certification.detail && (
                        <p className="mt-0.5 text-xs text-base-content/60">{certification.detail}</p>
                      )}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium text-accent">{certification.issuer}</span>
                      <div className="flex items-center gap-2">
                        {certification.date && (
                          <span className="font-mono text-xs text-base-content/60">{certification.date}</span>
                        )}
                        {certification.file && (
                          <a
                            href={certification.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-xs btn-outline btn-accent rounded-full"
                          >
                            <FileText className="h-3 w-3" />
                            {t.view}
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            <Trophy className="h-4 w-4" />
            {t.awards}
          </h3>
          <div className="space-y-3">
            {awardList.map((award, index) => (
              <Reveal key={award.id} delay={index * 80}>
                <article className="flex items-center gap-4 rounded-2xl border border-base-content/10 bg-gradient-to-r from-primary/10 to-transparent p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    {index === 0 ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </span>
                  <p className="font-semibold leading-snug">{award.name}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
