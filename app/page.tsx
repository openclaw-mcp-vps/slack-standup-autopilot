export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Slack Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-generate daily standups<br className="hidden sm:block" /> from your commits
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect GitHub or GitLab, pick a Slack channel, and let Standup Autopilot write and post your team&apos;s daily updates — automatically, every morning.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Connect your repos", desc: "Authorize GitHub or GitLab in one click. We read commits and PR activity — nothing else." },
            { step: "2", title: "Pick a Slack channel", desc: "Choose where standups get posted. Set your preferred time and format." },
            { step: "3", title: "Standups on autopilot", desc: "Every morning your team sees a clean, formatted standup — zero manual effort." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-black mb-3">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · unlimited repos &amp; channels</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "GitHub &amp; GitLab integration",
              "Unlimited Slack channels",
              "Custom standup schedule",
              "PR &amp; commit summaries",
              "Team-level or per-dev posts",
              "Priority support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feat }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Git platforms are supported?",
              a: "GitHub and GitLab are fully supported. Bitbucket support is on the roadmap."
            },
            {
              q: "Does it read my source code?",
              a: "No. We only read commit messages, PR titles, and branch names — never file contents."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. No questions asked, no lock-in."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Standup Autopilot. All rights reserved.
      </footer>
    </main>
  )
}
