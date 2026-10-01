import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://alibenjannet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Ben Jannet — Data Science & AI Engineering Student",
    template: "%s | Ali Ben Jannet",
  },
  description:
    "Portfolio of Ali Ben Jannet — Data Science & AI engineering student at ESPRIM Monastir building end-to-end AI systems: LLM agents, vision-language document extraction, deep learning for medical imaging, speech wake-word detection, plus full-stack microservice platforms. Hedera Certified Developer Associate.",
  applicationName: "Ali Ben Jannet Portfolio",
  keywords: [
    "Ali Ben Jannet",
    "Ali Benjannet",
    "Full Stack Developer",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "AI Engineer",
    "LLM",
    "Vision-Language Models",
    "Microservices",
    "PostgreSQL",
    "Hedera",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "TypeScript",
    "Portfolio",
    "ESPRIM",
    "Monastir",
    "Tunisia",
  ],
  authors: [{ name: "Ali Ben Jannet", url: siteUrl }],
  creator: "Ali Ben Jannet",
  publisher: "Ali Ben Jannet",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: siteUrl,
    siteName: "Ali Ben Jannet Portfolio",
    title: "Ali Ben Jannet — Data Science & AI Engineering Student",
    description:
      "Data Science & AI engineering student: LLM agents, vision-language models, deep learning, speech, and full-stack microservices (Python, FastAPI, Next.js, PostgreSQL, Docker). View projects, experiences & certifications.",
    images: [
      {
        url: "/abj-logo.png",
        width: 512,
        height: 512,
        alt: "Ali Ben Jannet — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Ben Jannet — Data Science & AI Engineering Student",
    description:
      "Data Science & AI engineering student: LLM agents, vision-language models, deep learning and full-stack microservices.",
    images: ["/abj-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/abj-logo.png",
    shortcut: "/abj-logo.png",
    apple: "/abj-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e1e2e",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Ben Jannet",
  alternateName: "Ali Benjannet",
  url: siteUrl,
  image: `${siteUrl}/abj-logo.png`,
  jobTitle: "Data Science & AI Engineering Student",
  email: "mailto:alibenjannette@gmail.com",
  telephone: "+216 54 098 546",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ali Bourguiba Avenue, Skanes",
    addressLocality: "Monastir",
    addressCountry: "TN",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "ESPRIM — Private Engineering School of Monastir",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Higher Institute of Computer Science Mahdia",
    },
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Large Language Models",
    "Vision-Language Models",
    "Microservices",
    "Hedera Hashgraph",
  ],
  sameAs: [
    "https://github.com/ALI0benjannet",
    "https://www.linkedin.com/in/ali-ben-jannet-2a7746324",
    "https://www.facebook.com/share/161sBQkeNY/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ali Ben Jannet Portfolio",
  url: siteUrl,
  inLanguage: ["en", "fr"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning : certaines extensions de navigateur injectent
  // des attributs sur <html> / <body> avant l'hydratation de React.
  return (
    <html lang="en" data-theme="dracula" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
