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
    images: ['/images/labs/reverse-engineering/cff-explorer.png'],
    reportLinks: [
      'https://docs.google.com/document/d/1W2UiUd_EHAJII4iRxmmLh27T2SZ24sPu/edit?usp=sharing&ouid=116827632250371120024&rtpof=true&sd=true',
    ],
  },
  {
    id: 'web-security-lab',
    category: 'Web Security',
    title: 'Web Application Penetration Testing',
    description:
      'Conducted web application security assessments using industry-standard tools. Identified and documented vulnerabilities including SQL injection, Cross-Site Scripting, CSRF, and authentication bypass vectors following OWASP methodology.',
    techniques: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Authentication Bypass',
      'Session Management Testing',
      'CSRF Testing',
    ],
    tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'Nikto'],
    skillsLearned: [
      'Web Security',
      'Penetration Testing',
      'OWASP Top 10',
      'Vulnerability Assessment',
    ],
    images: [],
  },
  {
    id: 'binary-exploitation-lab',
    category: 'Binary Exploitation',
    title: 'Buffer Overflow & Binary Exploitation',
    description:
      'Practiced binary exploitation techniques including stack-based buffer overflow attacks, return-oriented programming (ROP), and shellcode development in controlled CTF-style lab environments.',
    techniques: [
      'Stack Buffer Overflow',
      'Return-Oriented Programming (ROP)',
      'Shellcode Development',
      'Format String Attacks',
    ],
    tools: ['GDB', 'Ghidra', 'pwntools', 'IDA Pro'],
    skillsLearned: [
      'Binary Exploitation',
      'Low-Level Security',
      'x86 Assembly',
      'Exploit Development',
    ],
    images: [],
  },
];

export const labCategories = [
  'All',
  'Forensics',
  'Reverse Engineering',
  'Web Security',
  'Binary Exploitation',
];
