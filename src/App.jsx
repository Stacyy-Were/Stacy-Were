import React, { useState, useEffect } from 'react';
import {
  Shield,
  Github,
  ExternalLink,
  Mail,
  Eye,
  Network,
  Cpu,
  Bug,
  Search,
  Server,
  Target,
  BookOpen,
  Wifi,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Play,
  Activity,
} from 'lucide-react';

const INK = '#000000';
const PINK = '#FF53A1';
const BONE = '#EEEEEE';
const MUTED = 'rgba(238,238,238,0.75)';
const FAINT = 'rgba(238,238,238,0.45)';
const HAIRLINE = 'rgba(255,83,161,0.2)';

const SECTION_IDS = ['hero', 'skills', 'programming', 'homelab', 'projects', 'learning', 'goal'];

function useTypedOnce(text, speed = 65) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return { display, done };
}

function useRoleCycler(words, active, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!active || !words || words.length === 0) return undefined;

    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(currentWord.slice(0, display.length + 1));
        if (display.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplay(currentWord.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, active, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

function Cursor({ color = PINK }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '0.4ch',
        marginLeft: 6,
        backgroundColor: color,
        animation: 'blink 1s step-end infinite',
      }}
    >
      &nbsp;
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="h-px w-8 sm:w-10" style={{ backgroundColor: PINK }} />
      <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold" style={{ color: PINK }}>
        {children}
      </span>
      <span className="h-px w-8 sm:w-10" style={{ backgroundColor: PINK }} />
    </div>
  );
}

function SkillBar({ name, level }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold" style={{ color: BONE }}>
          {name}
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color: FAINT }}>
          {level}/10
        </span>
      </div>
      <div className="h-1.5 sm:h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(238,238,238,0.1)' }}>
        <div className="h-full rounded-full" style={{ width: `${level * 10}%`, backgroundColor: PINK }} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const greeting = useTypedOnce("SOC Analyst", 65);
  const role = useRoleCycler(['SOC Analysis', 'Threat Detection', 'Incident Response'], greeting.done);

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) setCurrentSection(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goToSection = (idx) => {
    const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, idx));
    const el = document.getElementById(SECTION_IDS[clamped]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const proficiencies = [
    { name: 'Python', level: 9 },
    { name: 'Bash', level: 7 },
    { name: 'C / C++', level: 6 },
    { name: 'JavaScript', level: 7 },
    { name: 'PHP', level: 6 },
    { name: 'HTML / CSS', level: 8 },
  ];

  const developmentSkills = [
    { name: 'Git / GitHub', level: 8 },
    { name: 'API Integration', level: 7 },
  ];

  const databaseSkills = [
    { name: 'MySQL', level: 7 },
    { name: 'Log Parsing / Files', level: 8 },
  ];

  const [selectedIp, setSelectedIp] = useState('192.168.1.50');
  const [scanLogs, setScanLogs] = useState([
    'System ready. Select a target IP below to simulate log analysis.',
  ]);

  const targetDatabase = {
    '192.168.1.50': {
      user: 'Admin',
      status: 'ALERT: Threshold (5) Reached - Brute Force Pattern Flagged',
      logs: [
        '2026-08-08 08:17:03 LOGIN_FAILED user=Admin ip=192.168.1.50',
        '2026-08-08 08:17:06 LOGIN_FAILED user=Admin ip=192.168.1.50',
        '2026-08-08 08:17:09 LOGIN_FAILED user=Admin ip=192.168.1.50',
        '2026-08-08 08:17:12 LOGIN_FAILED user=Admin ip=192.168.1.50',
        '2026-08-08 08:17:15 LOGIN_FAILED user=Admin ip=192.168.1.50',
        '[ALERT] 192.168.1.50 had 5 failed login attempts. Automated firewall rule generated.',
      ],
    },
    '192.168.1.25': {
      user: 'User',
      status: 'NORMAL: Below Threshold (4/5) - Valid User Activity',
      logs: [
        '2026-08-08 09:02:44 LOGIN_FAILED user=User ip=192.168.1.25',
        '2026-08-08 09:03:10 LOGIN_SUCCESS user=User ip=192.168.1.25',
        '2026-08-08 10:30:00 LOGIN_FAILED user=User ip=192.168.1.25',
        '2026-08-08 10:30:02 LOGIN_FAILED user=User ip=192.168.1.25',
        '2026-08-08 10:30:04 LOGIN_FAILED user=User ip=192.168.1.25',
        '[INFO] IP 192.168.122.25 recovered with successful authentication sequence.',
      ],
    },
    '10.0.0.15': {
      user: 'test',
      status: 'NORMAL: Single Probe Event Recorded',
      logs: [
        '2026-08-08 10:21:33 LOGIN_FAILED user=test ip=10.0.0.15',
        '[INFO] Minimal occurrence. No active threat indicator triggered.',
      ],
    },
  };

  const handleSimulateScan = (ip) => {
    setSelectedIp(ip);
    setScanLogs([`[*] Parsing records for IP: ${ip}...`, '[*] Running checks against threshold rules...']);
    setTimeout(() => {
      setScanLogs(targetDatabase[ip].logs);
    }, 600);
  };

  const [activeLabNode, setActiveLabNode] = useState('ubuntu');

  const labNodesData = {
    ubuntu: {
      name: 'Ubuntu Host (Monitoring Node)',
      type: 'Core Host',
      telemetry: ['Python Log Analyzer Engine', 'Wireshark PCAP Ingestion', 'Syslog Collector & Alert Triage'],
      description: 'Acts as the central observation center running automated log scanners and analysis scripts to monitor network telemetry.',
    },
    kali: {
      name: 'Kali Linux (Attack Emulation)',
      type: 'Attack Node',
      telemetry: ['Nmap Network Scans', 'Metasploit Exploit Modules', 'theHarvester Reconnaissance'],
      description: 'Used for controlled penetration testing and generating simulated traffic to test detection thresholds.',
    },
    metasploitable: {
      name: 'Metasploitable 2',
      type: 'Target Node',
      telemetry: ['Apache Access Logs', 'Authentication Failure Records', 'Service Enumeration Traces'],
      description: 'An intentionally vulnerable system generating real log streams and attack artifacts for defensive analysis.',
    },
    windows10: {
      name: 'Windows 10',
      type: 'Endpoint Node',
      telemetry: ['Security Event ID 4624/4625 (Logons)', 'Event ID 4688 (Process Creation)', 'Sysmon Process Monitoring'],
      description: 'Monitors endpoint user activity, process execution behavior, and potential anomalous command-line execution.',
    },
    windowsserver: {
      name: 'Windows Server',
      type: 'Domain Node',
      telemetry: ['Active Directory Authentication Logs', 'Kerberos Ticket Triage', 'Domain Account Enumeration Monitoring'],
      description: 'Tracks Active Directory event logs to identify credential dumping, lateral movement, and domain-level anomalies.',
    },
    activedirectory: {
      name: 'Active Directory Logging',
      type: 'Sub-Domain Node',
      telemetry: ['Sysvol Access Auditing', 'Group Policy Monitoring', 'DC Replication Event Logs'],
      description: 'Deep telemetry streams tied directly to Windows Server domain controller auditing policies.',
    },
  };

  const projects = [
    { icon: Search, title: 'Log Analyzer', desc: "The first real tool I built — it reads through system logs and flags brute-force login patterns so I don't have to eyeball every line myself." },
    { icon: Shield, title: 'File Integrity Monitor (FIM)', desc: "Keeps an eye on important files and tells me the moment something changes that shouldn't have." },
    { icon: Server, title: 'Active Directory Telemetry Lab', desc: 'My own little domain to break and rebuild, so I can actually recognize what credential dumping and lateral movement look like in real logs.' },
    { icon: Bug, title: 'Exploit Triage & Telemetry Lab', desc: 'I run exploits against deliberately vulnerable machines like Metasploitable 2, then dig through what they leave behind to write better detection rules.' },
  ];

  const learningItems = [
    { name: 'SIEM', top: 6, left: 10, href: 'https://www.huntress.com/cybersecurity-education/what-is-siem' },
    { name: 'Wazuh', top: 14, left: 82, href: 'https://wazuh.com/' },
    { name: 'Splunk', top: 30, left: 6, href: 'https://www.splunk.com/' },
    { name: 'PowerShell', top: 24, left: 76, href: 'https://learn.microsoft.com/en-us/powershell/' },
    { name: 'Sigma', top: 68, left: 10, href: 'https://github.com/SigmaHQ/sigma' },
    { name: 'MITRE ATT&CK', top: 70, left: 78, href: 'https://attack.mitre.org/' },
    { name: 'Incident Response', top: 88, left: 22 },
    { name: 'Threat Intelligence', top: 88, left: 66, href: 'https://www.ibm.com/think/topics/threat-intelligence' },
    { name: 'Wireshark', top: 4, left: 44, href: 'https://www.wireshark.org/' },
    { name: 'Hackviser', top: 18, left: 36, href: 'https://hackviser.com/' },
    { name: 'TryHackMe', top: 86, left: 42, href: 'https://tryhackme.com/' },
    { name: 'HackTheBox', top: 20, left: 58, href: 'https://www.hackthebox.com/' },
    { name: 'Subverted.io', top: 48, left: 9, href: 'https://subverted.io/' },
  ];

  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === SECTION_IDS.length - 1;

  return (
    <div className="w-full box-border bg-black text-white relative overflow-x-hidden">
      <style>{`
        @keyframes blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .floating-slow { animation: float 4s ease-in-out infinite; }
        .floating-mid { animation: float 3s ease-in-out infinite; }
        .floating-fast { animation: float 2.2s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <div id="hero" className="min-h-screen w-full flex flex-col justify-between p-5 sm:p-10 lg:p-14 relative z-10 box-border max-w-7xl mx-auto">
        <header className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 bg-zinc-950/90 text-xs sm:text-sm font-mono font-bold tracking-widest text-white shadow-md">
            SAW
          </div>

          <nav className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-950/90 backdrop-blur-md text-xs font-mono">
            <button onClick={() => goToSection(1)} className="px-3 lg:px-4 py-2 rounded-full text-zinc-300 hover:text-white transition-all font-medium">
              Security Skills
            </button>
            <button onClick={() => goToSection(2)} className="px-3 lg:px-4 py-2 rounded-full text-zinc-300 hover:text-white transition-all font-medium">
              Programming
            </button>
            <button onClick={() => goToSection(3)} className="px-3 lg:px-4 py-2 rounded-full text-zinc-300 hover:text-white transition-all font-medium">
              Home Lab
            </button>
            <button onClick={() => goToSection(4)} className="px-3 lg:px-4 py-2 rounded-full text-zinc-300 hover:text-white transition-all font-medium">
              Projects
            </button>
          </nav>

          <a
            href="mailto:stacyywere@gmail.com"
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-zinc-800 bg-zinc-950/90 hover:border-zinc-700 text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-white transition-all shadow-md whitespace-nowrap"
          >
            Email
          </a>
        </header>

        <main className="flex flex-col items-center justify-center text-center my-auto py-10">
          <div className="font-mono text-sm sm:text-base mb-4 tracking-widest uppercase font-bold" style={{ color: PINK, minHeight: '1.6rem' }}>
            {greeting.display}
            {!greeting.done && <Cursor color={PINK} />}
          </div>

          <h1
            className="font-black uppercase leading-none text-white w-full text-center"
            style={{ whiteSpace: 'nowrap', fontSize: 'clamp(2.1rem, 10.5vw, 9rem)', letterSpacing: '-0.02em' }}
          >
            Stacy Were<span style={{ color: PINK }}>.</span>
          </h1>

          <div className="font-mono text-sm sm:text-base mt-7 mb-4 flex items-center gap-2 font-semibold" style={{ color: BONE, minHeight: '1.5rem' }}>
            <span style={{ color: FAINT }}>&gt;&nbsp;</span>
            {role}
            {greeting.done && <Cursor color={PINK} />}
          </div>

          <p className="text-sm sm:text-base font-mono max-w-xl sm:max-w-2xl mt-6 sm:mt-8 mb-4 tracking-wide leading-relaxed px-2" style={{ color: MUTED }}>
            IT graduate turning curiosity into a career in cybersecurity one log file, one lab and one late night at a time.
          </p>
        </main>
      </div>

      {/* SOC & BLUE TEAM */}
      <section id="skills" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <Eyebrow>Cybersecurity</Eyebrow>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            SOC <span style={{ color: PINK }}>&amp;</span> Blue Team
          </h2>
        </div>

        <div className="w-full max-w-5xl rounded-2xl border border-zinc-800 shadow-xl overflow-hidden bg-zinc-950">
          <div className="bg-zinc-950 border-b border-zinc-800 px-4 sm:px-5 py-3 flex items-center justify-between font-mono text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2.5">
              <Terminal size={16} className="text-zinc-400" />
              <span className="font-semibold text-zinc-200">root@kali: ~</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800 inline-block" />
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 relative bg-black">
            <div className="relative z-10 font-mono text-xs sm:text-sm text-white mb-4 space-y-1">
              <div><span className="text-zinc-500">┌──(</span>root㉿kali<span className="text-zinc-500">)-[</span>~<span className="text-zinc-500">]</span></div>
              <div><span className="text-zinc-500">└─$</span> <span className="text-pink-400 font-bold">cat soc_and_blue_team_skills.txt</span></div>
            </div>

            <div className="relative z-10 font-mono text-xs sm:text-sm text-zinc-200 space-y-4 bg-zinc-950/80 p-4 sm:p-6 md:p-7 rounded-xl border border-zinc-800/90">

              <div>
                <span className="text-pink-400 font-bold uppercase tracking-wider flex items-center gap-2 mb-2.5 text-sm sm:text-base">
                  <Eye size={16} />
                  [+] Log Analysis &amp; Detection
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-300 text-sm">
                  <div>&bull; Security Monitoring &amp; Event Triage</div>
                  <div>&bull; Phishing Email &amp; Artifact Analysis</div>
                  <div>&bull; Incident Detection &amp; Alerting</div>
                  <div>&bull; File Integrity Monitoring (FIM)</div>
                  <div>&bull; Indicator of Compromise (IOC) Tracking</div>
                  <div>&bull; Incident Response Fundamentals</div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900">
                <span className="text-pink-400 font-bold uppercase tracking-wider flex items-center gap-2 mb-2.5 text-sm sm:text-base">
                  <Network size={16} />
                  [+] Networking &amp; Protocols
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-300 text-sm">
                  <div>&bull; TCP/IP &amp; OSI Network Model</div>
                  <div>&bull; Core Ports, Services &amp; Protocols</div>
                  <div>&bull; DNS, DHCP &amp; Traffic Routing</div>
                  <div>&bull; Network Enumeration &amp; Reconnaissance</div>
                  <div>&bull; ARP, TCP Handshake, UDP Triage</div>
                  <div>&bull; Nmap Scanning &amp; Wireshark PCAP Analysis</div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900">
                <span className="text-pink-400 font-bold uppercase tracking-wider flex items-center gap-2 mb-2.5 text-sm sm:text-base">
                  <Cpu size={16} />
                  [+] Systems &amp; Environments
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-300 text-sm">
                  <div>&bull; Linux Administration &amp; Hardening</div>
                  <div>&bull; Windows Event Logs &amp; Active Directory</div>
                </div>
              </div>

            </div>

            <div className="relative z-10 font-mono text-xs sm:text-sm text-white mt-4 space-y-1">
              <div><span className="text-zinc-500">┌──(</span>root㉿kali<span className="text-zinc-500">)-[</span>~<span className="text-zinc-500">]</span></div>
              <div><span className="text-zinc-500">└─$</span> <span className="inline-block w-2.5 h-5 bg-pink-400 align-middle animate-pulse" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMING */}
      <section id="programming" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 w-full">
          <Eyebrow>Programming &amp; Tooling</Eyebrow>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Languages, Development <span style={{ color: PINK }}>&amp;</span> Databases
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full mb-8">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold border-b border-zinc-800 pb-2">Languages</p>
            {proficiencies.map((p) => (
              <SkillBar key={p.name} {...p} />
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold border-b border-zinc-800 pb-2">Development</p>
            {developmentSkills.map((d) => (
              <SkillBar key={d.name} {...d} />
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold border-b border-zinc-800 pb-2">Databases</p>
            {databaseSkills.map((db) => (
              <SkillBar key={db.name} {...db} />
            ))}
          </div>
        </div>

        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl overflow-hidden">
          <div className="bg-zinc-900/90 px-4 sm:px-5 py-3 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
              <Terminal size={16} style={{ color: PINK }} />
              <span className="font-bold tracking-wider text-white">LOG SCANNER SIMULATOR</span>
            </div>
            <span className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded bg-black/80 text-pink-400 border border-zinc-800 font-semibold">
              Python Analyzer Engine
            </span>
          </div>

          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-mono text-zinc-300 mb-3">
                  Select an IP address from the sample <code className="text-pink-400 font-semibold">auth.log</code> dataset:
                </p>

                <div className="space-y-2.5">
                  {Object.keys(targetDatabase).map((ip) => (
                    <button
                      key={ip}
                      onClick={() => handleSimulateScan(ip)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs sm:text-sm flex items-center justify-between gap-2 transition-all border ${
                        selectedIp === ip
                          ? 'bg-zinc-900 border-pink-500/60 text-white shadow-md'
                          : 'bg-black/40 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                      }`}
                    >
                      <span className="font-bold">{ip}</span>
                      <span className="text-xs opacity-80 font-medium whitespace-nowrap">Target: {targetDatabase[ip].user}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/70 border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-zinc-100 inline font-bold">Rule:</span> Threshold limit is <code className="text-pink-400 font-bold">5</code> failed attempts.
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between mb-2.5 gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-mono text-zinc-300 flex items-center gap-2">
                  <Search size={14} style={{ color: PINK }} />
                  Output Feed ({selectedIp})
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live simulation
                </span>
              </div>

              <div className="rounded-xl bg-black border border-zinc-900 p-4 font-mono text-xs sm:text-sm text-zinc-200 h-[170px] overflow-y-auto space-y-2 shadow-inner">
                {scanLogs.map((logLine, idx) => (
                  <div
                    key={idx}
                    className={
                      logLine.includes('[ALERT]')
                        ? 'text-pink-400 font-bold bg-pink-950/30 p-1.5 rounded'
                        : logLine.includes('[INFO]')
                        ? 'text-emerald-400 font-semibold'
                        : 'text-zinc-300'
                    }
                  >
                    {logLine}
                  </div>
                ))}
              </div>

              <div className="mt-3 text-xs sm:text-sm font-mono text-zinc-400 flex items-center justify-between gap-2 flex-wrap">
                <span className="truncate max-w-full sm:max-w-[75%] font-medium">Status: {targetDatabase[selectedIp].status}</span>
                <button
                  onClick={() => handleSimulateScan(selectedIp)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm transition-all border border-zinc-800 flex-shrink-0 font-semibold"
                >
                  <Play size={12} /> Re-run
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME LAB */}
      <section id="homelab" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-6xl mx-auto text-center">
        <Eyebrow>Home Lab</Eyebrow>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2">
          A sandbox for <span style={{ color: PINK }}>threat observation</span>
        </h2>
        <p className="text-sm sm:text-base font-mono mb-8 text-zinc-300 max-w-xl mx-auto leading-relaxed">
          This is where I actually learn — click around the lab below to see what each machine is telling me.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 text-left w-full">
          <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 shadow-xl relative">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-pink-400 mb-4 flex items-center gap-2.5 font-bold">
              <span className="text-pink-500">&gt;</span>
              <span>MONITORING TOPOLOGY</span>
            </div>

            <div className="font-mono text-xs sm:text-sm space-y-2.5 relative">
              <button
                onClick={() => setActiveLabNode('ubuntu')}
                className={`w-full text-left p-2.5 rounded-xl transition-all border ${
                  activeLabNode === 'ubuntu' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-300 hover:bg-zinc-900/50'
                }`}
              >
                <span className="font-bold block text-white">&#8226; Ubuntu Host (Monitoring Node)</span>
              </button>

              <div className="pl-4 sm:pl-5 border-l border-pink-500/30 space-y-2 relative ml-2 sm:ml-3">
                <button
                  onClick={() => setActiveLabNode('kali')}
                  className={`w-full text-left p-2 rounded-xl transition-all border ${
                    activeLabNode === 'kali' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-300 hover:bg-zinc-900/50'
                  }`}
                >
                  <span className="font-semibold">Kali Linux (Attack Emulation)</span>
                </button>

                <button
                  onClick={() => setActiveLabNode('metasploitable')}
                  className={`w-full text-left p-2 rounded-xl transition-all border ${
                    activeLabNode === 'metasploitable' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-300 hover:bg-zinc-900/50'
                  }`}
                >
                  <span className="font-semibold">Metasploitable 2 (Target Source)</span>
                </button>

                <button
                  onClick={() => setActiveLabNode('windows10')}
                  className={`w-full text-left p-2 rounded-xl transition-all border ${
                    activeLabNode === 'windows10' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-300 hover:bg-zinc-900/50'
                  }`}
                >
                  <span className="font-semibold">Windows 10 (Endpoint Telemetry)</span>
                </button>

                <div className="space-y-1.5">
                  <button
                    onClick={() => setActiveLabNode('windowsserver')}
                    className={`w-full text-left p-2 rounded-xl transition-all border ${
                      activeLabNode === 'windowsserver' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-300 hover:bg-zinc-900/50'
                    }`}
                  >
                    <span className="font-semibold">Windows Server (Domain Controller)</span>
                  </button>

                  <div className="pl-4 sm:pl-5 border-l border-pink-500/20 ml-2 sm:ml-3">
                    <button
                      onClick={() => setActiveLabNode('activedirectory')}
                      className={`w-full text-left p-2 rounded-xl transition-all border text-xs sm:text-sm ${
                        activeLabNode === 'activedirectory' ? 'bg-zinc-900 border-pink-500 text-white shadow-sm' : 'bg-transparent border-transparent text-zinc-400 hover:bg-zinc-900/50'
                      }`}
                    >
                      <span className="font-semibold">Active Directory Logging</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3.5 mb-4 gap-2 flex-wrap">
                <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-white">
                  <Activity size={16} style={{ color: PINK }} />
                  <span>TELEMETRY INSPECTOR</span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded bg-black/80 text-pink-400 border border-zinc-800 font-semibold">
                  {labNodesData[activeLabNode].type}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-sm sm:text-base font-mono font-bold text-pink-400 block mb-1.5">
                  {labNodesData[activeLabNode].name}
                </span>
                <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed">
                  {labNodesData[activeLabNode].description}
                </p>
              </div>

              <div className="space-y-2.5 font-mono text-xs sm:text-sm mt-4">
                <span className="text-zinc-400 uppercase tracking-widest text-xs block mb-1.5 font-bold">
                  Active Log Streams:
                </span>
                {labNodesData[activeLabNode].telemetry.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-black/70 border border-zinc-900 p-3 rounded-xl text-zinc-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-400">
              <span className="font-semibold">Node Status: Online</span>
              <span className="text-emerald-400 flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Streaming
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-6xl mx-auto text-center">
        <Eyebrow>Security Projects</Eyebrow>
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            SOC <span style={{ color: PINK }}>projects</span>
          </h2>
          <a
            href="https://github.com/Stacyy-Were"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest font-bold"
            style={{ color: PINK }}
          >
            <Github size={15} />
            View GitHub Profile
            <ExternalLink size={13} />
          </a>
        </div>
        <div className="text-left w-full space-y-5 sm:space-y-6">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 py-5"
              style={{ borderTop: idx === 0 ? `1px solid ${HAIRLINE}` : 'none', borderBottom: `1px solid ${HAIRLINE}` }}
            >
              <p.icon size={22} style={{ color: PINK }} className="mt-1 flex-shrink-0" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 w-full">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide md:col-span-1" style={{ color: BONE }}>
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed md:col-span-3 font-mono" style={{ color: MUTED }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENTLY LEARNING */}
      <section id="learning" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-6xl mx-auto text-center relative">
        <Eyebrow>Currently Learning &amp; Platforms</Eyebrow>

        <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950/50 shadow-xl mt-4">
          {learningItems.map((item) => {
            const badge = (
              <span
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-semibold shadow-lg backdrop-blur-md whitespace-nowrap inline-block"
                style={{
                  backgroundColor: 'rgba(255,83,161,0.15)',
                  border: '1px solid rgba(255,83,161,0.4)',
                  color: BONE,
                }}
              >
                {item.name}
              </span>
            );
            return (
              <div
                key={item.name}
                className="absolute floating-mid z-10 transition-all duration-300"
                style={{ top: `${item.top}%`, left: `${item.left}%`, transform: 'translate(-50%, -50%)' }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform block"
                  >
                    {badge}
                  </a>
                ) : (
                  badge
                )}
              </div>
            );
          })}

          <div className="relative z-20 flex flex-col items-center justify-center p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-4 flex items-center gap-2.5">
              <BookOpen size={22} style={{ color: PINK }} />
              Building the <span style={{ color: PINK }}>next layer</span>
            </h2>
            <a
              href="https://github.com/Stacyy-Were"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all shadow-xl hover:scale-105"
              style={{ backgroundColor: PINK, color: INK }}
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* GOAL & CONTACT */}
      <section id="goal" className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 flex flex-col items-center border-t border-zinc-900 box-border max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Target size={26} style={{ color: PINK }} />
        </div>
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: PINK }}>
          The Goal
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-8 max-w-3xl" style={{ color: BONE }}>
          I'm working toward a junior SOC analyst role where I can keep learning by doing — then grow from
          there into offensive security, eventually helping teams find the holes before someone else does.
        </p>
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest mb-10 font-semibold" style={{ color: MUTED }}>
          Monitor &rarr; Analyze &rarr; Investigate &rarr; Detect &rarr; Protect
        </p>

        <div className="w-full max-w-4xl pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left border-t border-zinc-900 mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase mb-1.5">Let's talk</h3>
            <p className="text-sm sm:text-base font-mono" style={{ color: MUTED }}>
              Open to junior SOC roles and internships, or just talking shop about logs, labs and everything I'm learning.
            </p>
          </div>
          <a href="https://teams.live.com/v2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-mono font-bold uppercase tracking-widest flex-shrink-0 shadow-xl whitespace-nowrap" style={{ backgroundColor: PINK, color: INK }}>
            <Mail size={17} />
            Teams
          </a>
        </div>

        <footer
          className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono uppercase tracking-widest pt-6 max-w-4xl font-semibold"
          style={{ color: FAINT, borderTop: `1px solid ${HAIRLINE}` }}
        >
          <span>Stacy Were // SOC</span>
          <span className="flex items-center gap-2">
            <Wifi size={14} />
            System online
          </span>
        </footer>
      </section>
    </div>
  );
}