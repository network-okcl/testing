import Link from "next/link";
import ParticleField from "@/components/ParticleField";

export const metadata = { title: "Admin · OKCL Centre Portal" };

export default function AdminPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center px-6">
      <ParticleField />
      <div className="animate-rise w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
        <h1 className="text-2xl font-semibold">Admin Portal</h1>
        <p className="mt-2 text-sm text-muted">The admin login is coming in a later phase.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/50 hover:text-white"
        >
          ← Back to Centre Login
        </Link>
      </div>
    </main>
  );
}
