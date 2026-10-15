import Link from "next/link";

export default function AdminLoginButton() {
  return (
    <Link
      href="/admin"
      className="fixed bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-slate-200 shadow-lg backdrop-blur-md transition hover:border-accent/50 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
      Admin Login
    </Link>
  );
}
