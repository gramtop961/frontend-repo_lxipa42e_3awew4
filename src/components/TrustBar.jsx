import React from 'react';
import { Shield, Star } from 'lucide-react';

const Brand = ({ name }) => (
  <div className="flex h-10 items-center justify-center rounded-md border border-white/5 bg-white/5 px-4 text-sm text-zinc-300">
    {name}
  </div>
);

const TrustBar = () => {
  return (
    <section className="bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Shield className="h-3.5 w-3.5 text-blue-400" />
            End-to-end encrypted, device-bound keys
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            Loved by devs — 5 min setup
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          <Brand name="Next.js" />
          <Brand name="React" />
          <Brand name="FastAPI" />
          <Brand name="iOS" />
          <Brand name="Android" />
          <Brand name="Node" />
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
