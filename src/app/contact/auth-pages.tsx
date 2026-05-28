"use client";
// AUTH PAGES: Login, Signup, Forgot Password
// Each export is a separate page. Copy each to its path shown above it.

import { useState } from "react";
import Link from "next/link";
import { C, GLOBAL_CSS, ArrowRight, CheckIcon } from "@/components/_shared";

// ── shared auth styles ───────────────────────────────────────────────────────
const AUTH_CSS = GLOBAL_CSS + `
  .kw-input {
    width: 100%; height: 44px; border-radius: 10px; padding: 0 14px;
    border: 1.5px solid #1A2D45; background-color: #050D1A;
    color: #F0F4F8; font-size: 14px; outline: none;
    transition: border-color 150ms;
    font-family: inherit;
  }
  .kw-input:focus { border-color: #00D4FF; }
  .kw-input::placeholder { color: #4A6080; }
  .kw-auth-card { background-color: #0F1C2E; border: 1px solid #1A2D45; border-radius: 20px; padding: 36px 32px; }
  @media (max-width: 480px) { .kw-auth-card { padding: 28px 22px; } }
`;

const GoogleSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function AuthLogo() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontWeight: 800, fontSize: 14 }}>K</div>
      <span style={{ color: C.text, fontWeight: 800, fontSize: 16, letterSpacing: "-0.01em" }}>KREWW</span>
    </Link>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
      <div style={{ flex: 1, height: 1, backgroundColor: C.border }} />
      <span style={{ fontSize: 12, color: C.muted }}>or</span>
      <div style={{ flex: 1, height: 1, backgroundColor: C.border }} />
    </div>
  );
}

function Field({ label, type = "text", placeholder, hint }: { label: string; type?: string; placeholder: string; hint?: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: C.sec }}>{label}</label>
        {hint && <span style={{ fontSize: 12, color: C.accent }}>{hint}</span>}
      </div>
      <input type={type} placeholder={placeholder} className="kw-input" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/login/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function LoginPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: AUTH_CSS }} />
      <div style={{ minHeight: "100vh", backgroundColor: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <AuthLogo />
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 6 }}>Welcome back</h1>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 28 }}>Sign in to your Kreww workspace</p>

          <div className="kw-auth-card">
            {/* Google */}
            <button style={{
              width: "100%", height: 44, borderRadius: 10,
              border: `1.5px solid ${C.border}`, backgroundColor: "transparent",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              color: C.text, fontSize: 14, fontWeight: 600, cursor: "pointer",
              transition: "background 150ms",
            }}>
              <GoogleSVG /> Continue with Google
            </button>

            <Divider />

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Email" type="email" placeholder="you@company.com" />
              <Field label="Password" type="password" placeholder="••••••••" hint={<Link href="/forgot-password" style={{ color: C.accent, fontSize: 12 }}>Forgot password?</Link> as unknown as string} />

              <button style={{
                width: "100%", height: 46, borderRadius: 10, marginTop: 4,
                backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
                border: "none", cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,212,255,0.28)",
              }}>
                Sign in <ArrowRight />
              </button>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 14, color: C.muted, marginTop: 24 }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: C.accent, fontWeight: 700 }}>Start free trial</Link>
          </p>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/signup/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function SignupPage() {
  const perks = ["14-day free trial", "No credit card required", "Set up in 5 minutes"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: AUTH_CSS }} />
      <div style={{ minHeight: "100vh", backgroundColor: C.bg, display: "flex", padding: "40px 24px" }}>
        {/* Left — form */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <AuthLogo />
            <h1 style={{ fontSize: 26, fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 6 }}>Start your free trial</h1>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 22 }}>Your office is ready in under 5 minutes.</p>

            {/* Perks */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              {perks.map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.sec }}>
                  <CheckIcon /> {p}
                </div>
              ))}
            </div>

            <div className="kw-auth-card">
              <button style={{
                width: "100%", height: 44, borderRadius: 10,
                border: `1.5px solid ${C.border}`, backgroundColor: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                color: C.text, fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>
                <GoogleSVG /> Sign up with Google
              </button>

              <Divider />

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Field label="Full name" placeholder="Ayomide Alao" />
                <Field label="Work email" type="email" placeholder="you@company.com" />
                <Field label="Password" type="password" placeholder="At least 8 characters" />
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.sec, display: "block", marginBottom: 8 }}>Workspace name</label>
                  <input type="text" placeholder="e.g. Techcorp HQ" className="kw-input" />
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 6 }}>This will be your team's office URL: mykreww.com/techcorp-hq</div>
                </div>

                <button style={{
                  width: "100%", height: 46, borderRadius: 10, marginTop: 4,
                  backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
                  border: "none", cursor: "pointer", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,212,255,0.28)",
                }}>
                  Create your workspace <ArrowRight />
                </button>

                <p style={{ fontSize: 11, color: C.muted, textAlign: "center" }}>
                  By signing up you agree to our{" "}
                  <Link href="/terms" style={{ color: C.sec }}>Terms</Link> and{" "}
                  <Link href="/privacy" style={{ color: C.sec }}>Privacy Policy</Link>.
                </p>
              </div>
            </div>

            <p style={{ textAlign: "center", fontSize: 14, color: C.muted, marginTop: 24 }}>
              Already have an account?{" "}
              <Link href="/login" style={{ color: C.accent, fontWeight: 700 }}>Sign in</Link>
            </p>
          </div>
        </div>

        {/* Right — feature highlights (hidden on small screens via inline media) */}
        <div className="kw-signup-right" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 48 }}>
          <style>{`@media(max-width:900px){.kw-signup-right{display:none!important}}`}</style>
          <div style={{ maxWidth: 360 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 20 }}>What you get</div>
            {[
              { icon: "◼", title: "The Office",       desc: "A visual floor of desk cards. See who's online, what they're working on, in real time." },
              { icon: "☰", title: "Tasks & Kanban",   desc: "Assign, track, and ship work. Progress visible to the whole team." },
              { icon: "💬", title: "Chat & Meetings",  desc: "Channels, DMs, and one-click Google Meet. All in one place." },
              { icon: "📋", title: "Notice Board",     desc: "Company-wide announcements that everyone sees, with priority tags." },
              { icon: "📄", title: "Documents",        desc: "Organised folders and a clean editor. Your team's knowledge base, built in." },
            ].map(f => (
              <div key={f.title} style={{ display: "flex", gap: 14, marginBottom: 22 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: C.sec, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/forgot-password/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: AUTH_CSS }} />
      <div style={{ minHeight: "100vh", backgroundColor: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <AuthLogo />

          {sent ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>📬</div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 12 }}>Check your inbox</h1>
              <p style={{ fontSize: 14, color: C.sec, lineHeight: 1.7, marginBottom: 28 }}>
                We've sent a password reset link to your email. It expires in 1 hour. Check your spam folder if you don't see it.
              </p>
              <Link href="/login" style={{ fontSize: 14, color: C.accent, fontWeight: 700 }}>← Back to sign in</Link>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: 26, fontWeight: 800, color: C.text, letterSpacing: "-0.025em", marginBottom: 8 }}>Reset your password</h1>
              <p style={{ fontSize: 14, color: C.muted, marginBottom: 32 }}>Enter your email and we'll send a reset link.</p>

              <div className="kw-auth-card">
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <Field label="Email address" type="email" placeholder="you@company.com" />
                  <button
                    onClick={() => setSent(true)}
                    style={{
                      width: "100%", height: 46, borderRadius: 10,
                      backgroundColor: C.accent, color: C.bg, fontSize: 15, fontWeight: 700,
                      border: "none", cursor: "pointer", display: "flex", alignItems: "center",
                      justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,212,255,0.28)",
                    }}>
                    Send reset link <ArrowRight />
                  </button>
                </div>
              </div>

              <p style={{ textAlign: "center", fontSize: 14, color: C.muted, marginTop: 24 }}>
                Remember it?{" "}
                <Link href="/login" style={{ color: C.accent, fontWeight: 700 }}>Sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
