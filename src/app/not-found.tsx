import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <p className="relative font-mono text-sm uppercase tracking-[0.3em] text-accent">Error 404</p>
      <h1 className="relative mt-4 text-5xl font-bold tracking-tight md:text-7xl">Page not found</h1>
      <p className="relative mt-4 max-w-md text-base-content/70">
        The page you are looking for does not exist or has been moved.
        <br />
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn btn-accent relative mt-8 rounded-full px-8">
        Back home · Retour à l&apos;accueil
      </Link>
    </main>
  );
}
