import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-24">
      <div className="panel-surface max-w-xl p-10 text-center">
        <p className="eyebrow">404</p>
        <h1 className="section-title mx-auto text-balance">Page not found</h1>
        <p className="section-copy mx-auto">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/en"
            className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
