import React from 'react';
import Hero from './components/Hero';
import CodeShowcase from './components/CodeShowcase';
import TrustBar from './components/TrustBar';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500" />
            <span className="font-semibold">GhostAuth</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#code" className="transition hover:text-white">Code</a>
            <a href="#waitlist" className="transition hover:text-white">Early access</a>
            <a href="#" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 transition hover:bg-white/10">Docs</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <CodeShowcase />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8 text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} GhostAuth Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
