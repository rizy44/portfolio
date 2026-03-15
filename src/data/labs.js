export const labs = [
  {
    id: 'volatility-forensics',
    category: 'Forensics',
    title: 'Windows Memory Forensics with Volatility',
    description:
      'Analyzed a Windows 7 SP1 memory dump using Volatility Framework 2.6. Performed process enumeration with psscan to identify suspicious processes, extracted browser artifacts, and identified forensic flags from the raw memory image.',
    techniques: [
      'Memory Dump Analysis',
      'Process Enumeration (psscan)',
      'Browser Artifact Extraction',
      'Flag Identification',
      'Timeline Analysis',
    ],
    tools: ['Volatility Framework 2.6', 'Linux CLI', 'strings'],
    skillsLearned: [
      'Digital Forensics',
      'Memory Analysis',
      'Incident Response',
      'Evidence Collection',
    ],
    images: [
      '/images/labs/forensics/volatility-1.png',
      '/images/labs/forensics/volatility-2.png',
    ],
    reportLinks: [
      'https://docs.google.com/document/d/1KsgMYjLj_PK910sDqPI7EVTsHyFA2ZUL/edit?usp=sharing&ouid=116827632250371120024&rtpof=true&sd=true',
    ],
  },
  {
    id: 'cff-explorer-re',
    category: 'Reverse Engineering',
    title: 'PE Header Analysis & Malware Unpacking',
    description:
      'Performed Portable Executable (PE) header analysis using CFF Explorer. Identified a modified AddressOfEntryPoint redirected to the .rsrc section and analyzed SizeOfImage modifications — classic indicators of packed or obfuscated malware samples.',
    techniques: [
      'PE Header Parsing',
      'Entry Point Analysis',
      'Section Table Analysis',
      'Packer Detection',
      'Import Table Inspection',
    ],
    tools: ['CFF Explorer', 'PE-bear', 'Detect It Easy'],
    skillsLearned: [
      'Reverse Engineering',
      'Malware Analysis',
      'PE Format Internals',
      'Binary Analysis',
    ],
    images: [
      '/images/labs/reverse-engineering/cff.png',
      '/images/labs/reverse-engineering/cff-explorer.png',
    ],
    reportLinks: [
      'https://docs.google.com/document/d/1W2UiUd_EHAJII4iRxmmLh27T2SZ24sPu/edit?usp=sharing&ouid=116827632250371120024&rtpof=true&sd=true',
    ],
  },
  {
    id: 'ropchain-exploit',
    category: 'Reverse Engineering',
    title: 'ROP Chain Exploit — Libc Leak & Arbitrary Code Execution',
    description:
      'Reverse engineering and binary exploitation lab focused on Return-Oriented Programming (ROP). Analyzed a vulnerable binary in GDB/pwndbg to identify gadgets and control flow, then built a two-stage exploit: first stage leaked the libc base address via format string and GOT/PLT, second stage chained ROP gadgets to call system("/bin/sh") and obtain a remote shell.',
    techniques: [
      'Return-Oriented Programming (ROP)',
      'Libc Address Leak (GOT/PLT)',
      'Format String Exploitation',
      'Gadget Discovery',
      'Stack Layout Analysis',
      'Remote Exploitation',
    ],
    tools: ['pwntools', 'GDB / pwndbg', 'ROPgadget', 'Python'],
    skillsLearned: [
      'Reverse Engineering',
      'Binary Exploitation',
      'x86-64 Assembly',
      'Exploit Development',
      'Low-Level Security',
    ],
    images: [
      '/images/labs/reverse-engineering/ropchain-1.png',
      '/images/labs/reverse-engineering/ropchain-2.png',
    ],
    reportLinks: [
      'https://drive.google.com/drive/folders/1zLFW7Gpwxgbg-mxwVqaZrZ07RcSQfVd-?usp=sharing',
    ],
  },
  {
    id: 'blue-red-team-firewall',
    category: 'Red Team / Blue Team',
    title: 'Blue Team / Red Team — Firewall, WAF & SIEM Security Assessment',
    description:
      'This project simulates a real-world environment and end-to-end security assessment from two opposing perspectives: Blue Team (build and defend) and Red Team (test and attack). The Blue Team deployed a segmented network (WAN, LAN, DMZ, Internal Server Zone), pfSense firewall with default-deny policy, Suricata IPS, ModSecurity WAF with OWASP Core Rule Set, Squid Proxy and SSL Bump for HTTPS inspection, and Wazuh SIEM for log correlation. The Red Team performed reconnaissance (Nmap, Nikto, Ffuf), attempted web attacks (SQLi, XSS, SQLMap) which were blocked by the WAF, then successfully compromised the internal side via Man-in-the-Middle and ARP spoofing to capture high-privilege credentials.',
    techniques: [
      'Blue Team: Segmented architecture (WAN / LAN / DMZ / SVZ); pfSense (default deny), Suricata IPS, ModSecurity WAF + OWASP CRS, Squid Proxy & SSL Bump, Wazuh SIEM.',
      'Red Team: Recon (Nmap, TCPDump, Ffuf, Nikto, OpenSSL); web attacks (SQLi, XSS, Host Header Injection, SQLMap) blocked by ModSecurity.',
      'Red Team success: MITM + ARP spoofing, fake login page and SSL cert, credential harvesting; RCE attempt via .htaccess upload blocked.',
    ],
    tools: [
      'pfSense',
      'Suricata',
      'ModSecurity',
      'OWASP CRS',
      'Wazuh',
      'Squid Proxy',
      'SSL Bump',
      'Nmap',
      'Nikto',
      'SQLMap',
      'Ffuf',
    ],
    skillsLearned: [
      'Network Security',
      'Firewall Design',
      'WAF / IPS',
      'SIEM',
      'Red Team',
      'Blue Team',
      'Penetration Testing',
      'Threat Analysis',
    ],
    images: [
      '/images/labs/web-security/attack-kill-chain.png',
      '/images/labs/web-security/topo-mang.jpg',
    ],
    reportLinks: [
      'https://drive.google.com/drive/folders/1KpOwA7rzInC-68KOooc69nzUyHzW2ZUo',
    ],
  },
];

export const labCategories = [
  'All',
  'Forensics',
  'Reverse Engineering',
  'Red Team / Blue Team',
];
