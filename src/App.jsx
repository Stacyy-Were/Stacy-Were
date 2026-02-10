import React from 'react';
import { Terminal, Cpu, Zap, Github, ExternalLink, Mail, Activity, Box } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-10 bg-carbon text-white relative overflow-hidden">

      <div className="scanline" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Name */}
        <header className="flex justify-between items-start mb-16">
          <div className="flex flex-col leading-[0.75] select-none">
            <span className="font-serif text-4xl md:text-5xl italic font-black text-lime tracking-tightest opacity-90">
              STACY
            </span>
            <span className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter mt-[-2px]">
              WERE
            </span>
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-1 mt-4">
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse shadow-[0_0_8px_#ccff00]" /> 
                System: Active
              </span>
            </div>
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
              Loc: 1.3521° S / 36.6627° E
            </span>
          </div>
        </header>

        {/* Bento Grid */}
        <main className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Profile */}
          <div className="md:col-span-3 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-lime/30 transition-all">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase mt-6 leading-[0.9]">
                I.T Specialist <br/>
                <span className="text-zinc-800 transition-colors group-hover:text-zinc-700">System Admin</span>
              </h2>
              <p className="mt-8 text-zinc-400 max-w-md text-lg leading-relaxed">
                Managing high-availability infrastructure and enterprise networks. 
                Specializing in server virtualization, security auditing and hardware optimization.
              </p>
            </div>
            <Terminal size={300} className="absolute -right-20 -bottom-20 text-white/5 rotate-12 group-hover:text-lime/5 transition-colors" />
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-lime/40 transition-all">
            <div className="flex justify-between items-start">
              <Activity className="text-lime" size={24} />
              <div className="text-right">
                <p className="text-[10px] font-bold text-zinc-500 uppercase">Uptime</p>
                <p className="text-xs font-mono">99.9%</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] uppercase font-bold text-zinc-500 tracking-tight">
                  <span>System Load</span>
                  <span className="text-lime text-glow">75%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  {/*Progress Bar */}
                  <div className="h-full bg-lime w-[75%] shadow-[0_0_15px_#ccff00]" />
                </div>
              </div>
              
              <div className="pt-2 border-t border-zinc-800">
                 <p className="text-[9px] text-zinc-600 uppercase font-mono tracking-tighter">Status: Optimal_Flow</p>
              </div>
            </div>
          </div>


          <div className="bg-zinc-950/60 border border-zinc-800/50 rounded-[2.5rem] p-6 font-mono text-[10px] backdrop-blur-md">
            <div className="text-lime mb-4 border-b border-zinc-800/50 pb-2 flex justify-between items-center">
              <span className="tracking-widest uppercase">Telemetry_Stream</span>
              <span className="animate-pulse bg-lime/10 text-lime px-2 py-0.5 rounded text-[8px]">● LIVE</span>
            </div>
            <div className="space-y-1.5 text-zinc-500">
              <p className="flex justify-between"><span className="text-zinc-300 tracking-tighter font-bold">PY_ENGINE:</span> <span className="text-lime uppercase italic">Optimal</span></p>
              <p className="flex justify-between"><span className="text-zinc-300 tracking-tighter font-bold">REACT_UI:</span> <span className="text-lime uppercase italic">Nominal</span></p>
              <p className="flex justify-between"><span className="text-zinc-300 tracking-tighter font-bold">DB_QUERY:</span> <span className="text-white">12ms</span></p>
              <p className="flex justify-between"><span className="text-zinc-300 tracking-tighter font-bold">DEPLOY_HZ:</span> <span className="text-white">60FPS</span></p>
            </div>
            <div className="mt-4 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 text-lime/80 text-[9px] leading-tight">
              $ npm run optimize --force <br/>
              <span className="text-zinc-600 tracking-tighter font-bold group-hover:text-lime/50 transition-colors">&gt; compressing_assets... done</span>
            </div>
          </div>

          {/* Projects Card */}
          <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-8 hover:bg-zinc-900/60 transition-all border-b-4 border-b-lime group relative overflow-hidden">
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-lime/10 transition-colors text-lime">
                <Github size={24} />
              </div>
              <ExternalLink size={20} className="text-zinc-600 group-hover:text-lime transition-colors" />
            </div>
            <h3 className="text-2xl font-black italic uppercase mb-2 relative z-10">Automated Telemetry</h3>
            <p className="text-zinc-500 text-sm relative z-10">Building custom data pipelines for performance tracking and real-time analytics.</p>
            <Box size={120} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 group-hover:text-lime/5 transition-colors" />
          </div>

          {/* Contact Card */}
          <div className="md:col-span-1 bg-zinc-900/20 border border-zinc-800/50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group border-dashed hover:border-lime/50 transition-all">
            <Mail size={32} className="text-zinc-700 group-hover:text-lime transition-all duration-500 group-hover:scale-110 mb-4" />
            <h3 className="text-xs font-black italic uppercase tracking-widest">Get in touch</h3>
            <a href="mailto:stacyywere@gmail.com" className="mt-2 text-zinc-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors">Email ↗</a>
          </div>

        </main>
      </div>
    </div>
  );
}