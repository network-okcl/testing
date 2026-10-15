const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

/** Strips spaces/dashes and a leading +91, 91 or 0, leaving the 10-digit number. */
export function normalizeMobile(mobile: string): string {
  const digits = mobile.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

/** Indian mobile numbers: 10 digits, starting with 6–9. */
export function isValidMobile(mobile: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizeMobile(mobile));
}
