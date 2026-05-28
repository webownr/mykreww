// ═══════════════════════════════════════════════════════════════════════════════
// PATH: src/app/forgot-password/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
export default function ForgotPasswordPage() {
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


