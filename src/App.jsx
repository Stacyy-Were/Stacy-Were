import React from 'react';
import {
  Terminal,
  Shield,
  Zap,
  Github,
  ExternalLink,
  Mail,
  Activity,
  Lock,
  Network,
  Eye,
  Bug,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-10 relative overflow-hidden">

      {/* Scanline */}
      <div className="scanline pointer-events-none fixed inset-0 z-50 opacity-10" />

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#ff6600 1px, transparent 1px), linear-gradient(90deg, #ff6600 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <header className="flex justify-between items-start mb-16">
          <div className="flex flex-col leading-[0.75] select-none">

            <span className="font-serif text-4xl md:text-5xl italic font-black text-orange-400 tracking-tight opacity-90">
              STACY
            </span>

            <span className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter mt-[-2px]">
              WERE
            </span>

          </div>

          <div className="hidden md:flex flex-col items-end gap-2 mt-4">

            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">

              <span className="flex items-center gap-2">

                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_#ff6600]" />

                Security Status: Active

              </span>

            </div>

            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
              SOC_NODE // NAIROBI_KE
            </span>

          </div>
        </header>

        {/* Main Bento Grid */}
        <main className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Hero */}
          <div className="md:col-span-3 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-orange-400/30 transition-all">

            <div className="relative z-10">

              <div className="flex items-center gap-2 mb-6">

                <Shield size={18} className="text-orange-400" />

                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-400">
                  Security Operations
                </span>

              </div>

              <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9]">

                Cybersecurity
                <br />

                <span className="text-zinc-800 transition-colors group-hover:text-zinc-700">
                  Analyst
                </span>

              </h2>

              <p className="mt-8 text-zinc-400 max-w-xl text-lg leading-relaxed">
                IT professional building practical cybersecurity skills through
                network security, Linux, threat detection, system monitoring
                and hands-on security labs.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">

                <span className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                  SOC
                </span>

                <span className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                  Linux
                </span>

                <span className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                  Networking
                </span>

                <span className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                  Python
                </span>

              </div>

            </div>

            <Shield
              size={300}
              className="absolute -right-20 -bottom-20 text-white/[0.025] rotate-12 group-hover:text-orange-400/[0.04] transition-colors"
            />

          </div>

          {/* Security Status */}
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-orange-400/40 transition-all">

            <div className="flex justify-between items-start">

              <Activity className="text-orange-400" size={24} />

              <div className="text-right">

                <p className="text-[10px] font-bold text-zinc-500 uppercase">
                  Threat Level
                </p>

                <p className="text-xs font-mono text-orange-400">
                  LOW
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div>

                <div className="flex justify-between text-[10px] uppercase font-bold text-zinc-500 mb-2">

                  <span>
                    Security Health
                  </span>

                  <span className="text-orange-400">
                    92%
                  </span>

                </div>

                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">

                  <div className="h-full bg-orange-400 w-[92%] shadow-[0_0_15px_#ff6600]" />

                </div>

              </div>

              <div className="flex justify-between items-center pt-3 border-t border-zinc-800">

                <span className="text-[9px] text-zinc-600 uppercase font-mono">
                  Firewall
                </span>

                <span className="text-[9px] text-orange-400 font-mono">
                  ACTIVE
                </span>

              </div>

              <div className="flex justify-between items-center">

                <span className="text-[9px] text-zinc-600 uppercase font-mono">
                  IDS
                </span>

                <span className="text-[9px] text-orange-400 font-mono">
                  MONITORING
                </span>

              </div>

            </div>

          </div>

          {/* Security Telemetry */}
          <div className="md:col-span-2 bg-zinc-950/70 border border-zinc-800/50 rounded-[2.5rem] p-6 font-mono text-[10px] backdrop-blur-md">

            <div className="text-orange-400 mb-4 border-b border-zinc-800/50 pb-2 flex justify-between items-center">

              <span className="tracking-widest uppercase">
                Security_Telemetry
              </span>

              <span className="animate-pulse bg-orange-400/10 text-orange-400 px-2 py-0.5 rounded text-[8px]">
                ● LIVE
              </span>

            </div>

            <div className="space-y-2 text-zinc-500">

              <p className="flex justify-between">

                <span className="text-zinc-300 font-bold">
                  NETWORK:
                </span>

                <span className="text-orange-400 uppercase">
                  MONITORED
                </span>

              </p>

              <p className="flex justify-between">

                <span className="text-zinc-300 font-bold">
                  LINUX_HOST:
                </span>

                <span className="text-orange-400 uppercase">
                  SECURE
                </span>

              </p>

              <p className="flex justify-between">

                <span className="text-zinc-300 font-bold">
                  AUTH_EVENTS:
                </span>

                <span className="text-white">
                  LOGGED
                </span>

              </p>

              <p className="flex justify-between">

                <span className="text-zinc-300 font-bold">
                  IDS_STATUS:
                </span>

                <span className="text-orange-400">
                  ACTIVE
                </span>

              </p>

            </div>

            <div className="mt-5 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 text-orange-400/80 text-[9px] leading-relaxed">

              <span className="text-zinc-600">
                $ sudo monitor --network
              </span>

              <br />

              <span>
                &gt; scanning interfaces...
              </span>

              <br />

              <span>
                &gt; monitoring traffic...
              </span>

              <br />

              <span className="text-orange-400">
                &gt; no critical threats detected
              </span>

            </div>

          </div>

          {/* Threat Detection */}
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-6 group hover:border-orange-400/40 transition-all">

            <div className="flex justify-between items-start mb-8">

              <Eye
                size={24}
                className="text-orange-400"
              />

              <span className="text-[8px] font-mono text-zinc-600">
                MON_01
              </span>

            </div>

            <h3 className="text-xl font-black italic uppercase">
              Threat Detection
            </h3>

            <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
              Identifying suspicious activity through logs, network traffic,
              authentication events and system monitoring.
            </p>

          </div>

          {/* Incident Response */}
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-6 group hover:border-orange-400/40 transition-all">

            <div className="flex justify-between items-start mb-8">

              <Bug
                size={24}
                className="text-orange-400"
              />

              <span className="text-[8px] font-mono text-zinc-600">
                IR_02
              </span>

            </div>

            <h3 className="text-xl font-black italic uppercase">
              Incident Response
            </h3>

            <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
              Investigating security events, analyzing attack patterns and
              documenting findings for remediation.
            </p>

          </div>

          {/* Security Projects */}
          <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 hover:bg-zinc-900/60 transition-all border-b-4 border-b-orange-400 group relative overflow-hidden">

            <div className="flex justify-between items-start mb-10 relative z-10">

              <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-orange-400/10 transition-colors text-orange-400">
                <Github size={24} />
              </div>

              <ExternalLink
                size={20}
                className="text-zinc-600 group-hover:text-orange-400 transition-colors"
              />

            </div>

            <h3 className="text-2xl font-black italic uppercase mb-2 relative z-10">
              Security Labs
            </h3>

            <p className="text-zinc-500 text-sm relative z-10 max-w-md">
              Hands-on cybersecurity projects covering Linux, networking,
              reconnaissance, log analysis, threat detection and security
              automation.
            </p>

            <div className="flex gap-2 mt-6 relative z-10">

              <span className="text-[8px] font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-500">
                NMAP
              </span>

              <span className="text-[8px] font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-500">
                LINUX
              </span>

              <span className="text-[8px] font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-500">
                PYTHON
              </span>

            </div>

            <Network
              size={130}
              className="absolute -right-10 -bottom-10 text-white/[0.025] rotate-12 group-hover:text-orange-400/[0.04] transition-colors"
            />

          </div>

          {/* Security Stack */}
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 group hover:border-orange-400/40 transition-all">

            <Lock
              size={28}
              className="text-orange-400 mb-6"
            />

            <h3 className="text-xl font-black italic uppercase mb-4">
              Security Stack
            </h3>

            <div className="space-y-3 font-mono text-[9px] uppercase tracking-widest">

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Linux
                </span>

                <span className="text-orange-400">
                  ✓
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Networking
                </span>

                <span className="text-orange-400">
                  ✓
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Python
                </span>

                <span className="text-orange-400">
                  ✓
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Git
                </span>

                <span className="text-orange-400">
                  ✓
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Nmap
                </span>

                <span className="text-orange-400">
                  ✓
                </span>
              </div>

            </div>

          </div>

          {/* Contact */}
          <div className="md:col-span-1 bg-zinc-900/20 border border-zinc-800/50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group border-dashed hover:border-orange-400/50 transition-all">

            <Mail
              size={32}
              className="text-zinc-700 group-hover:text-orange-400 transition-all duration-500 group-hover:scale-110 mb-4"
            />

            <h3 className="text-xs font-black italic uppercase tracking-widest">
              Establish Connection
            </h3>

            <a
              href="mailto:stacyywere@gmail.com"
              className="mt-3 text-zinc-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
            >
              Email ↗
            </a>

          </div>

        </main>

        {/* Footer */}
        <footer className="mt-8 flex justify-between items-center text-[8px] font-mono uppercase tracking-widest text-zinc-700">

          <span>
            STACY_WERE // CYBERSECURITY
          </span>

          <span className="flex items-center gap-2">

            <Zap size={10} />

            SYSTEM ONLINE

          </span>

        </footer>

      </div>
    </div>
  );
}