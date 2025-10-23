import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:py-24">
        <div className="relative z-10 w-full md:max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-blue-400" />
            Biometric, passkey-first, privacy by default
          </div>
          <h1 className="font-semibold leading-tight tracking-tight text-white md:text-6xl text-4xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-lg text-zinc-400 md:text-lg">
            Ship passwordless sign-in with a single line of code. Delight users with
            instant biometric logins while we handle security, keys, and device trust.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              Get early access
            </a>
            <a
              href="#code"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
            >
              <Zap className="h-4 w-4 text-blue-400" />
              See the one-liner
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              SDKs for Web, iOS, Android
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              SOC2-ready • GDPR-friendly
            </div>
          </div>
        </div>

        <div className="relative z-0 mx-auto w-full max-w-3xl grow">
          <div className="h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* subtle gradient overlay not blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
