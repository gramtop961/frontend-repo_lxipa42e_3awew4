import React, { useMemo, useState } from 'react';
import { CheckCircle, Copy, Terminal } from 'lucide-react';

const snippets = {
  javascript: `// Web (JS)
import { init } from '@ghostauth/js';

init({ projectId: 'proj_123' }).signIn(); // ← one line
`,
  python: `# Python (FastAPI)
from ghostauth import Client

Client(project_id='proj_123').sign_in()  # ← one line
`,
  curl: `# cURL
curl -X POST https://api.ghostauth.dev/v1/sessions \
  -H 'Authorization: Bearer sk_live_...' \
  -d '{"user":"auto"}'
`,
};

const tabs = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'python', label: 'Python' },
  { id: 'curl', label: 'cURL' },
];

const CodeShowcase = () => {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);
  const code = useMemo(() => snippets[active], [active]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <section id="code" className="bg-zinc-950 px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
            One line to go live
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Drop-in passwordless</h2>
          <p className="mt-2 text-zinc-400">Add secure biometric logins to any app without rewriting your stack.</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-white/10 bg-zinc-900/60 px-2 backdrop-blur">
            <div className="flex gap-1 p-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active === t.id
                      ? 'bg-zinc-800 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button
              onClick={copy}
              className="mr-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-blue-400" /> Copy
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto rounded-b-xl border border-t-0 border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 text-sm leading-relaxed">
            <code className="whitespace-pre text-zinc-200">{code}</code>
          </pre>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-zinc-400">
            <CheckCircle className="h-4 w-4 text-emerald-400" /> Works with React, Next.js, Vue, Svelte, iOS, Android, and more
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
