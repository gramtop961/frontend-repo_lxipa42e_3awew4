import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, XCircle } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error' | 'info', message: string }

  const backend = import.meta.env.VITE_BACKEND_URL;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !backend) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${backend}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'cta' }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.detail || 'Something went wrong.');

      if (data.status === 'exists') {
        setStatus({ type: 'info', message: data.message || "You're already on the list." });
      } else {
        setStatus({ type: 'success', message: data.message || "You're on the waitlist!" });
      }
      setEmail('');
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to join the waitlist.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-zinc-950 px-6 pb-20 pt-12 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Be first to make passwords vanish</h3>
        <p className="mt-2 text-zinc-400">Join the waitlist for early access, launch updates, and docs.</p>
        <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-xl gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-blue-500/30 transition focus:ring-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting
              </>
            ) : (
              <>
                Join waitlist <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
        {status && (
          <div className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-sm">
            {status.type === 'success' && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
            {status.type === 'info' && <CheckCircle2 className="h-4 w-4 text-blue-400" />}
            {status.type === 'error' && <XCircle className="h-4 w-4 text-red-400" />}
            <p className={`text-zinc-300`}>{status.message}</p>
          </div>
        )}
        {!backend && (
          <p className="mx-auto mt-3 max-w-xl text-xs text-zinc-500">Backend URL not configured. Set VITE_BACKEND_URL to enable submissions.</p>
        )}
        <p className="mt-3 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CTA;
