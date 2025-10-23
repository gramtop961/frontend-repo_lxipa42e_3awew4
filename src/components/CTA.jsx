import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // In a real app, this would POST to your backend/waitlist tool
    alert(`Thanks! We'll be in touch at ${email}.`);
    setEmail('');
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
          >
            Join waitlist <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-3 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CTA;
