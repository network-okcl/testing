"use client";

import { useState, type FormEvent } from "react";
import { isValidEmail, isValidMobile } from "@/lib/validation";

type Errors = { email?: string; mobile?: string };

export default function CentreLoginCard() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setNotice(null);
    const next: Errors = {};
    if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (!isValidMobile(mobile)) next.mobile = "Please enter a valid 10-digit mobile number.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    // Phase 2 will replace this with a call to the Apps Script lookup.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setNotice("Details look good. Registration lookup will be connected in the next phase.");
  };

  return (
    <div className="animate-rise w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_60px_-15px_rgba(56,189,248,0.35)] backdrop-blur-xl [animation-delay:150ms]">
      <h2 className="text-xl font-semibold text-text">Centre Login</h2>
      <p className="mt-1 text-sm text-muted">
        Enter your registered details to check status, or start a new registration.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
        <Field
          id="email"
          label="Email ID"
          type="email"
          autoComplete="email"
          placeholder="centre@example.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
          icon={
            <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
          }
        />
        <Field
          id="mobile"
          label="Mobile Number"
          type="tel"
          autoComplete="tel"
          inputMode="numeric"
          placeholder="98765 43210"
          value={mobile}
          onChange={setMobile}
          error={errors.mobile}
          icon={
            <path d="M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2zm3 15h2" />
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-3 font-medium text-[#04101f] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-80"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#04101f]/30 border-t-[#04101f]" />
              Checking…
            </>
          ) : (
            <>
              Continue
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>
      </form>

      {notice && (
        <p role="status" className="mt-4 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-sky-200">
          {notice}
        </p>
      )}

      <p className="mt-6 flex items-center gap-2 text-xs text-muted">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        </svg>
        Your details are used only to verify your centre registration.
      </p>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  icon: React.ReactNode;
  inputMode?: "numeric";
};

function Field({ id, label, error, icon, onChange, ...input }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="relative">
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
        <input
          id={id}
          name={id}
          {...input}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-black/30 py-3 pl-10 pr-3 text-text placeholder:text-slate-500 outline-none transition focus:ring-2 ${
            error ? "border-danger/60 focus:ring-danger/40" : "border-white/10 focus:border-accent/60 focus:ring-accent/30"
          }`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
