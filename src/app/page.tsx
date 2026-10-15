import ParticleField from "@/components/ParticleField";
import CentreLoginCard from "@/components/CentreLoginCard";
import AdminLoginButton from "@/components/AdminLoginButton";

const highlights = [
  { title: "Quick registration", text: "Apply as a new centre in a few guided steps." },
  { title: "Live status", text: "Track your application anytime with your email and mobile." },
  { title: "Secure", text: "Your information is handled only by authorised OKCL staff." },
];

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col">
      <ParticleField />

      <header className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-[#04101f]">
          OK
        </div>
        <div className="leading-tight">
          <p className="font-semibold tracking-wide">OKCL</p>
          <p className="text-xs text-muted">Centre Registration Portal</p>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl flex-1 content-center gap-10 px-6 pb-24 pt-4 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
        <div className="animate-rise self-end">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-sky-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Centre registrations open
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Partner with{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">OKCL</span>
            <br />
            as an authorised centre
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted sm:text-lg">
            Register your centre or check the status of an existing application — all in one place.
          </p>
        </div>

        <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:items-center lg:justify-end">
          <CentreLoginCard />
        </div>

        <div className="animate-rise self-start [animation-delay:300ms]">
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map((h) => (
              <li key={h.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-text">{h.title}</p>
                <p className="mt-1 text-xs text-muted">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="px-6 pb-6 text-center text-xs text-slate-500 sm:text-left">
        <div className="mx-auto max-w-6xl">© {new Date().getFullYear()} OKCL. All rights reserved.</div>
      </footer>

      <AdminLoginButton />
    </main>
  );
}
