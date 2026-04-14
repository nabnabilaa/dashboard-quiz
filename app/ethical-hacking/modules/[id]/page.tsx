"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const modulesDB: Record<string, any> = {
    1: {
        id: 1,
        title: "Ethical Hacking 101",
        subtitle: "Introduction & Basic Ethics",
        description: "From Stereotypes to Legal Profession: Shattering the Black Hoodie Myth.",
        color: "blue",
        nextModule: 2,
        content: {
            intro: "Ethical hacking is a professional practice—much like a 'system doctor'—that diagnoses vulnerabilities to strengthen defenses. This material debunks the 'Black Hoodie' myth and explains how a technical hobby transforms into a vital legal profession.",
            keyTerms: [
                { title: "Hacker (The Builder)", icon: "fa-hammer", color: "blue", desc: 'A skilled programmer driven by curiosity. Focuses on creating and learning "how things work".' },
                { title: "Cracker (The Breaker)", icon: "fa-user-ninja", color: "red", desc: "Often called a 'Hacker' in media. Uses skills to damage or steal data illegally." },
                { title: "Vulnerability", icon: "fa-lock-open", color: "orange", desc: "A weakness in a system (software/hardware) that can be exploited for illegal access." },
                { title: "Zero-Day", icon: "fa-radiation", color: "yellow", desc: "A new vulnerability discovered before any patch or fix exists from the vendor." }
            ],
            facts: [
                { title: "39 Seconds", desc: "The average frequency of cyber attacks worldwide." },
                { title: "43%", desc: "Small and medium-sized businesses (SMBs) are the target of 43% of cyber attacks." },
                { title: "$10.5T", desc: "Global losses due to cybercrime are predicted to reach $10.5 Trillion by 2025." },
                { title: "95%", desc: "The percentage of cybersecurity incidents caused by human error." }
            ],
            hats: [
                { title: "White Hat", desc: "Ethical Hacker. Has official permission; aim is to secure systems.", icon: "fa-user-nurse" },
                { title: "Black Hat", desc: "Cyber Criminal. Aim is to damage, steal data, or for malicious financial motives.", icon: "fa-user-ninja" },
                { title: "Grey Hat", desc: "Illegal but not necessarily malicious. Often just wants to show off skills.", icon: "fa-user-secret" }
            ],
            legal: [
                { title: "NDA", desc: "Internal Non-Disclosure Agreement.", icon: "fa-file-signature" },
                { title: "RoE", desc: "Rules of Engagement (Testing boundaries).", icon: "fa-scroll" }
            ],
            careers: [
                { title: "Penetration Tester", desc: "Legally simulates attacks to find bugs." },
                { title: "SOC Analyst", desc: "Defense team (Blue Team) that monitors attacks in real-time." },
                { title: "Security Researcher", desc: "Finds zero-day vulnerabilities and reports them to vendors (Bug Bounty)." }
            ],
            methodology: [
                { title: "Recon", desc: "Research Target" },
                { title: "Scanning", desc: "Port Detection" },
                { title: "Exploit", desc: "Gain Access" },
                { title: "Maintain", desc: "Backdoor" }
            ],
            cases: [
                {
                    title: "Login Bypass vs Input Sanitization",
                    scenario: "The application accepts input 'admin' OR 1=1-- and grantes access without a password.",
                    risk: "All user data could be leaked in seconds.",
                    solution: "Use parameterized queries and blacklist dangerous characters."
                }
            ]
        },
    },
    2: {
        id: 2,
        title: "Pentest Methodology",
        subtitle: "Industry Standards & Stages",
        description: "A deep dive into PTES (Penetration Testing Execution Standard) and professional workflows.",
        color: "purple",
        nextModule: 3,
        content: {
            intro: "Hacking without a method is mere vandalism. Professionals follow established standards so that their results are measurable, safe, and repeatable.",
            standards: [
                { title: "PTES", subtitle: "Execution Standard", desc: "The most popular technical standard. Divides pentesting into 7 clear stages.", features: ["Pre-engagement", "Intelligence Gathering", "Threat Modeling"] },
                { title: "OWASP", subtitle: "Web Security", desc: "The bible of web security. Focuses on the Top 10 most critical vulnerabilities.", features: ["OWASP Top 10", "WSTG Guide"] },
                { title: "NIST", subtitle: "Government Framework", desc: "A strict standard often used by government agencies and banks.", features: ["Risk Management", "Framework Core"] }
            ],
            stages: [
                { id: 1, title: "Pre-engagement Interactions", subtitle: "Agreement", desc: "Defining Scope, RoE, Timing, and Legal Contracts. The most crucial stage to avoid legal issues.", color: "blue" },
                { id: 2, title: "Intelligence Gathering", subtitle: "Reconnaissance", desc: "Collecting as much info as possible about the target (IP, Domain, Employee Email) passively and actively.", color: "cyan" },
                { id: 3, title: "Threat Modeling", subtitle: "Strategy", desc: "Analyzing which assets are most valuable and how to effectively attack them.", color: "teal" },
                { id: 4, title: "Vulnerability Analysis", subtitle: "Scanning", desc: "Searching for security flaws using scanner tools or manual testing.", color: "green" },
                { id: 5, title: "Exploitation", subtitle: "Attack", desc: "Attempting to breach the system using discovered flaws. Proof of Concept (PoC).", color: "red" },
                { id: 6, title: "Post Exploitation", subtitle: "Deepening", desc: "What can be done after gaining access? Privilege Escalation, Pivoting to other networks.", color: "purple" },
                { id: 7, title: "Reporting", subtitle: "Report", desc: "Creating technical reports for IT and executive reports for management. Providing remediation solutions.", color: "orange" }
            ],
            simulation: {
                title: "Terminal Simulation",
                desc: "See how a pentester moves between stages in a terminal.",
                steps: [
                    { type: "Recon", action: "Check Target IP", cmd: "ping target-bank.com", output: "PING target-bank.com (192.168.1.5): 56 data bytes\n64 bytes from 192.168.1.5: icmp_seq=0 ttl=64 time=10.2 ms" },
                    { type: "Scanning", action: "Scan Open Ports", cmd: "nmap -p 80,443 192.168.1.5", output: "PORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https" },
                    { type: "Exploit", action: "Test SQL Injection", cmd: "curl 'http://target-bank.com/login?user=admin' --data \"pass=' OR 1=1--\"", output: "HTTP/1.1 200 OK\nWelcome, Admin! (Login Bypass Successful)" }
                ],
                remediation: "Input sanitization failed to handle the single quote (') character. Use Prepared Statements in the database."
            }
        }
    },
    3: {
        id: 3,
        title: "Reconnaissance",
        subtitle: "The Art of Information Gathering",
        description: "Techniques for collecting target information (OSINT) before launching an attack.",
        color: "cyan",
        nextModule: 4,
        content: {
            intro: {
                desc: "Reconnaissance (Recon) is the longest phase in hacking (can take 70% of the time). The more information you have, the easier it is to find vulnerabilities.",
                goal: ["Discover 'Attack Surface'.", "Find data leaks (emails, old passwords).", "Map technologies used (Tech Stack)."],
                risk: "Active Recon can be detected by Firewall/IDS. Passive Recon is safer."
            },
            methods: [
                {
                    title: "Passive Recon (OSINT)",
                    desc: "Gathering info WITHOUT touching the target server directly. Undetectable.",
                    icon: "fa-user-secret",
                    risk: "RISK: LOW",
                    color: "blue",
                    items: ["Google Dorking (site:target.com filetype:pdf)", "Check Whois & DNS Records", "Search for employees on LinkedIn", "View old web versions on Wayback Machine"]
                },
                {
                    title: "Active Recon",
                    desc: "Directly interacting with the target system. Can trigger security alarms.",
                    icon: "fa-radar",
                    risk: "RISK: HIGH",
                    color: "red",
                    items: ["Port Scanning (Nmap)", "Banner Grabbing (Check server version)", "DNS Zone Transfer", "Ping Sweep"]
                }
            ],
            tools: [
                { title: "Google Dorks", desc: "Advanced Google search techniques to find sensitive files.", cat: "Passive", cmd: "site:gov.id filetype:sql" },
                { title: "Shodan.io", desc: "Search engine for IoT devices and Servers (CCTV, SCADA, Server).", cat: "Passive", cmd: "Browser: shodan.io" },
                { title: "TheHarvester", desc: "Scraping emails, subdomains, and hostnames from various public sources.", cat: "Passive", cmd: "theHarvester -d domain.com -b google" },
                { title: "Nmap", desc: "The king of network scanning. Can be active/stealth.", cat: "Active", cmd: "nmap -sS target.com" }
            ],
            case: {
                title: "Case Study: GitHub Leak",
                desc: "Developers often accidentally upload 'API KEYS' or 'AWS Credentials' to public repositories.",
                steps: [
                    { id: 1, title: "Search", desc: "Hacker searches for 'AWS_ACCESS_KEY' in the target's GitHub." },
                    { id: 2, title: "Finding", desc: "An exposed config.php file is found containing database credentials." },
                    { id: 3, title: "Impact", desc: "The hacker can log into the database without needing to perform any exploit." }
                ]
            },
            practice: [
                { title: "Google Dorking", desc: "Try searching for PDF files on your university website using 'site:ac.id filetype:pdf'." },
                { title: "Whois Lookup", desc: "Check who owns the domain facebook.com using an online whois tool." }
            ]
        },
    4: {
        id: 4,
        title: "Scanning & Enumeration",
        subtitle: "Mapping Networks & Services",
        description: "Identifying open ports, running services, and the target's operating system.",
        color: "orange",
        nextModule: 5,
        content: {
            intro: "After knowing who the target is (Recon), now we knock on their door. Scanning searches for open doors (Ports), Enumeration peeks at who is inside (Service/Version).",
            analogy: [
                { title: "Scanning", desc: "Like a thief walking around a house checking every window & door to see which one is unlocked.", color: "orange" },
                { title: "Enumeration", desc: "After entering the porch, the thief sees a package addressed to the owner & the type of alarm system used.", color: "yellow" }
            ],
            scanning: {
                types: [
                    { title: "TCP Connect", desc: "Full connection (3-way handshake). Most accurate but noisy (logged).", icon: "fa-plug" },
                    { title: "SYN Scan", desc: "Half connection (Stealth). Does not complete the handshake. Faster & stealthier.", icon: "fa-ghost" },
                    { title: "UDP Scan", desc: "Scanning for UDP services (DNS, SNMP). Slow and often results in false-positives.", icon: "fa-paper-plane" }
                ],
                cheatsheet: [
                    { desc: "Quick Scan (100 common ports)", cmd: "nmap -F target.com" },
                    { desc: "Full Port Scan (1-65535)", cmd: "nmap -p- target.com" },
                    { desc: "Detect Version & OS", cmd: "nmap -sV -O target.com" },
                    { desc: "Script Scan (Vulnerability)", cmd: "nmap --script vuln target.com" }
                ]
            },
            enumeration: {
                desc: "The process of digging for deeper details from the discovered services.",
                table: [
                    { service: "SMB (445)", info: "Share folders, User list, Printer info.", tool: "Enum4linux" },
                    { service: "SNMP (161)", info: "Network map, Software installed, Device info.", tool: "Snmpwalk" },
                    { service: "SMTP (25)", info: "List valid user emails (VRFY command).", tool: "Smtp-user-enum" },
                    { service: "HTTP (80)", info: "Web server version, Directories (robots.txt).", tool: "Nikto / Gobuster" }
                ]
            },
            tutorial: {
                title: "Mini Lab: Nmap Basic",
                steps: [
                    { title: "Step 1", desc: "Run Nmap to see open ports.", cmd: "nmap 192.168.1.10", output: "PORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http" },
                    { title: "Step 2", desc: "Check application versions (Service Version). Vital for finding matching exploits.", cmd: "nmap -sV 192.168.1.10", output: "PORT   VERSION\n22/tcp OpenSSH 7.2p2 (Vulnerable!)\n80/tcp Apache 2.4.18" }
                ]
            },
            ethics: [
                { title: "Don't Scan Others!", desc: "Port scanning someone else's server without permission can be considered an attempted attack (illegal)." },
                { title: "Use Your Own Lab", desc: "Install Metasploitable or DVWA in VirtualBox for safe practice." }
            ]
        }
    },
    5: {
        id: 5,
        title: "Exploitation Basics",
        subtitle: "Hacking the System",
        description: "Exploiting vulnerabilities to gain unauthorized access.",
        color: "teal",
        nextModule: 6,
        content: {
            title: "Exploitation Phase",
            desc: "This is the real 'Hacking' moment. We use a 'Fake Key' (Exploit) to open a 'Broken Door' (Vulnerability) and send in a 'Spy' (Payload).",
            concepts: [
                { title: "Vulnerability", subtitle: "The Broken Door", desc: "A flaw in program code. Examples: Buffer Overflow in Windows XP, SQL Injection in web logins.", color: "red" },
                { title: "Exploit", subtitle: "The Crowbar", desc: "A specific script/program created to manipulate that vulnerability.", color: "orange" },
                { title: "Payload", subtitle: "The Troops", desc: "The code executed AFTER the exploit succeeds. Example: Reverse Shell (connects back to the hacker).", color: "green" },
                { title: "Listener", subtitle: "The Receiver", desc: "The hacker's server waiting for a back-connection from the victim (Reverse Shell).", color: "blue" }
            ],
            cycle: [
                { id: 1, title: "Find Vuln", desc: "Searchsploit / Google", tool: "Exploit-DB" },
                { id: 2, title: "Pick Exploit", desc: "Match target version", tool: "Metasploit" },
                { id: 3, title: "Set Payload", desc: "Windows/Linux Meterpreter", tool: "Msfvenom" },
                { id: 4, title: "Execute!", desc: "Get Shell Access", tool: "Shell" }
            ],
            methodology: [
                { title: "Remote Exploit", desc: "Attacking over a network (no physical access).", icon: "fa-wifi", bg: "slate-900" },
                { title: "Local Exploit", desc: "Already have basic user access, want to become Admin (Root).", icon: "fa-laptop", bg: "slate-900" },
                { title: "Client-Side", desc: "Tricking users into opening malicious files (PDF/Links).", icon: "fa-envelope-open-text", bg: "white" }
            ],
            tools: [
                { title: "Metasploit Framework", desc: "A must-know! The world's most complete exploit framework. Point-and-click hacking.", icon: "msf" },
                { title: "Searchsploit", desc: "Offline version of Exploit-DB. Search for exploits via terminal.", icon: "db" }
            ],
            case: {
                title: "Simulation: Metasploit vs Windows 7 (EternalBlue)",
                scenario: "MS17-010 (EternalBlue) is a legendary flaw used by the WannaCry Ransomware. Let's try it in the Lab.",
                steps: [
                    { title: "Setup", cmd: "msfconsole\nuse exploit/windows/smb/ms17_010_eternalblue", output: "[*] Using configured payload windows/x64/meterpreter/reverse_tcp" },
                    { title: "Targeting", cmd: "set RHOSTS 192.168.1.50 (Victim IP)", output: "RHOSTS => 192.168.1.50" },
                    { title: "Fire!", cmd: "run", output: "[+] EternalBlue overwritten successfully\n[*] Sending stage (200262 bytes) to 192.168.1.50\n[*] Meterpreter session 1 opened" },
                    { title: "Victory", cmd: "sysinfo", output: "Computer: WIN-7-PC\nOS: Windows 7 (Build 7601, SP1)\nSystem Language: en_US" }
                ]
            }
        }
    },
    6: {
        id: 6,
        title: "OSI Fundamentals",
        subtitle: "Essential Networking Concepts for Hackers",
        description: "Without understanding networking, you're just a 'Script Kiddie'. Understand how data flows.",
        color: "rose",
        nextModule: 7,
        content: {
            intro: "Almost all cyber attacks occur over a network. The OSI Model divides network communication into 7 logical layers. Hackers must know at which layer an attack operates.",
            layers: [
                {
                    name: "Layer 7: Application", badge: "Human Interface", icon: "fa-globe", color: "purple",
                    desc: "The layer that interacts directly with the user (Browser, Email). Data is clearly visible here.",
                    vectors: [{ title: "HTTP Attacks", desc: "SQL Injection, XSS, CSRF." }, { title: "DNS Poisoning", desc: "Forging website addresses." }],
                    mitigations: [{ title: "WAF (Web App Firewall)", desc: "Filter malicious HTTP traffic." }, { title: "Input Validation", desc: "Prevent code injection." }]
                },
                {
                    name: "Layer 4: Transport", badge: "TCP/UDP Ports", icon: "fa-network-wired", color: "pink",
                    desc: "Manages data delivery (Reliable/TCP vs Fast/UDP). This is where 'Ports' live.",
                    vectors: [{ title: "SYN Flood (DoS)", desc: "Flooding a server with fake connection requests." }, { title: "Port Scanning", desc: "Searching for open ports." }],
                    mitigations: [{ title: "Firewall", desc: "Block unnecessary ports." }, { title: "Rate Limiting", desc: "Limit the number of connections per second." }]
                },
                {
                    name: "Layer 3: Network", badge: "IP Address", icon: "fa-route", color: "indigo",
                    desc: "Manages addressing and routing. IP Addresses exist at this layer.",
                    vectors: [{ title: "IP Spoofing", desc: "Forging the sender's IP address." }, { title: "Ping of Death", desc: "Abnormal Ping packets designed to crash systems." }],
                    mitigations: [{ title: "Packet Filtering", desc: "Filter Blacklisted IPs." }, { title: "VPN", desc: "Encrypt tunnels between networks." }]
                },
                {
                    name: "Layer 2: Data Link", badge: "MAC Address", icon: "fa-ethernet", color: "cyan",
                    desc: "Physical communication between devices within a local network (LAN/Switch).",
                    vectors: [{ title: "ARP Spoofing (MitM)", desc: "Tricking devices so that data is sent to the hacker instead of the router." }, { title: "MAC Flooding", desc: "Flooding the Switch table." }],
                    mitigations: [{ title: "Port Security", desc: "Limit MAC Addresses per switch port." }, { title: "DAI", desc: "Dynamic ARP Inspection." }]
                },
                {
                    name: "Layer 1: Physical", badge: "Cables & Wifi", icon: "fa-wifi", color: "emerald",
                    desc: "Physical cables, radio signals, fiber optics.",
                    vectors: [{ title: "Wiretapping", desc: "Tapping physical cables." }, { title: "Jamming", desc: "Interrupting WiFi signals." }],
                    mitigations: [{ title: "Access Control", desc: "Lock server rooms." }, { title: "Faraday Cage", desc: "Block outgoing signals." }]
                }
            ]
        }
    },
    7: {
        id: 7,
        title: "Web Hacking 101: Injection",
        subtitle: "OWASP Top 10 - Critical Attacks",
        description: "The most common and lethal attacks. Forcing applications to execute malicious code.",
        color: "indigo",
        nextModule: 8,
        content: {
            title: "The World of Injection",
            intro: "The concept is simple: The application blindly trusts user input. The hacker inserts a 'Command' inside 'Data'. The result? The application obeys the hacker's command.",
            sections: [
                {
                    type: "sqli", title: "SQL Injection (SQLi)", icon: "fa-database", layer: "Layer 7",
                    desc: "Manipulating database queries via input forms. Can dump the entire database, bypass logins, and even delete data.",
                    labs: [{ title: "Login Bypass", desc: "' OR 1=1 --" }, { title: "UNION Attack", desc: "Merging results from another query." }],
                    mitigations: [{ title: "Prepared Statements", desc: "Separate data from the query." }, { title: "Input Validation", desc: "Whitelist allowed characters." }]
                },
                {
                    type: "xxe", title: "XML External Entity (XXE)", icon: "fa-file-code", layer: "Layer 7", color: "orange",
                    desc: "Attacking misconfigured XML parsers. Can read system files (/etc/passwd) or scan internal networks.",
                    code: "<?xml...><!ENTITY xxe SYSTEM 'file:///etc/passwd'>",
                    redView: { intro: "Often found in features that upload Excel/SVG files or SOAP APIs.", targets: ["Config Files", "Source Code", "Internal Ports"], goal: "Data Exfiltration / SSRF" },
                    blueView: { intro: "Old XML parsers often enable DTDs by default.", prevent: ["Disable External Entities (DTD) in the parser."], tip: "Use JSON format if possible." }
                },
                {
                    type: "cmd", title: "OS Command Injection", icon: "fa-terminal", layer: "Layer 7", color: "red",
                    desc: "Most critical! User input goes directly into the operating system shell. The hacker can take full control of the server.",
                    code: "ping_target.php?ip=127.0.0.1; cat /etc/shadow",
                    redView: { intro: "Look for features that call ping, curl, or system binary executions.", targets: ["Full Server Takeover (RCE)"], goal: "Root Access" },
                    blueView: { intro: "Never use exec() functions with raw user input.", prevent: ["Use language-specific API libraries", "Avoid shell_exec / system()"], tip: "Input must be very restricted (Whitelist IP only)." },
                    labs: [{ title: "Command Chaining", desc: "Use ; | && to chain multiple commands." }]
                }
            ],
            perspectives: {
                sqli: {
                    red: { title: "Red Team View", intro: "SQLi is 'Low Hanging Fruit'. Easily tested automatically.", targets: ["User Passwords (Hashes)", "Customer Data (PII)", "Admin Access"], signals: ["SQL Syntax errors on page", "Long loading times (Blind SQLi)"], goal: "Dump Database" },
                    blue: { title: "Blue Team View", intro: "SQLi is very noisy in logs if not done carefully.", prevent: ["WAF Rules", "Parameterizing Queries (Mandatory!)"], contain: ["Monitor Error Logs (SQL Syntax Error)"], goal: "Block Malicious Payload" },
                    detect: { title: "Detection", intro: "SQLi attack patterns are very distinctive.", signals: ["Strange characters in URL: ' -- ; UNION", "Many consecutive 500 errors"], response: ["Block attacker IP", "Fix vulnerable code immediately"] }
                }
            }
        }
    },
    8: {
        id: 8,
        title: "Broken Access Control",
        subtitle: "Logic & Privilege Attacks",
        description: "How hackers access data that should be forbidden to them.",
        color: "emerald",
        nextModule: 9,
        content: {
            title: "Access Control Flaws",
            intro: "Access Control is the wall that separates regular users from Admin data. If this wall cracks, a hacker can become anyone.",
            sections: [
                {
                    title: "IDOR (Insecure Direct Object Reference)", icon: "fa-id-card", desc: "Accessing other users' data simply by changing the ID in the URL.",
                    labs: [{ title: "Lab 1", desc: "Change /api/user/10 to /api/user/11 to view a neighbor's data." }],
                    mitigations: [{ title: "Object Level Auth", desc: "Check data ownership on the backend before granting access." }]
                },
                {
                    title: "Privilege Escalation", icon: "fa-arrow-up", desc: "A regular user gaining Admin permissions (Horizontal vs Vertical).",
                    labs: [{ title: "Parameter Tampering", desc: "Change the 'is_admin' field from 'false' to 'true' during registration." }],
                    mitigations: [{ title: "Least Privilege", desc: "Provide users with the minimum access necessary." }]
                }
            ]
        }
    },
    9: {
        id: 9,
        title: "XSS & Client-Side",
        subtitle: "Hacking the User Browser",
        description: "Attacking website visitors through injected JavaScript code.",
        color: "amber",
        nextModule: 10,
        content: {
            isGeneric: true,
            intro: "Client-side attacks do not attack the server directly, but use the server as a proxy to attack other users.",
            sections: [
                { title: "Stored XSS", icon: "fa-comment-alt", desc: "Malicious script stored in the database (e.g., Comments) and executed every time someone views it.", color: "red" },
                { title: "Reflected XSS", icon: "fa-search", desc: "The script is not stored but reflected via the URL (e.g., Search Feature).", color: "orange" },
                { title: "DOM XSS", icon: "fa-code", desc: "The attack happens entirely on the browser side through DOM manipulation.", color: "yellow" }
            ],
            tools: [
                { title: "Beef Framework", desc: "Browser Exploitation Framework for controlling the victim's browser.", cmd: "beef-xss" },
                { title: "XSS Hunter", desc: "Service for finding blind XSS automatically.", cmd: "Browser: xsshunter.com" }
            ]
        }
    },
    10: {
        id: 10,
        title: "Cryptography: Weak Spots",
        subtitle: "Breaking the Code",
        description: "Why strong encryption can fail completely due to incorrect implementation.",
        color: "violet",
        nextModule: 11,
        content: {
            isGeneric: true,
            intro: "Cryptography is the heart of security. But without proper key management, it's just thin paper.",
            sections: [
                { title: "Insecure Storage", icon: "fa-key", desc: "Storing passwords in plain text or using weak encoding (Base64).", list: ["Hash with Salt", "Use Argon2 / Bcrypt"] },
                { title: "Weak Algorithms", icon: "fa-unlock", desc: "Still using MD5 or SHA1, which are easily broken.", list: ["Use SHA-256", "Avoid deprecated algorithms"] }
            ]
        }
    },
    11: {
        id: 11,
        title: "Social Engineering 2.0",
        subtitle: "Hacking the Human",
        description: "Because humans are the weakest link in cybersecurity.",
        color: "rose",
        nextModule: 12,
        content: {
            isGeneric: true,
            intro: "Why spend months hacking a server if you can get a password with just one phone call?",
            sections: [
                { title: "Phishing", icon: "fa-fish", desc: "Fake emails that look highly official (Apple, Bank, Office).", list: ["Check sender email", "Inspect links before clicking"] },
                { title: "Pretexting", icon: "fa-user-tie", desc: "Creating fake scenarios (Pretending to be IT support) to extract information.", list: ["Verify identity", "Never share OTP"] }
            ]
        }
    },
    12: {
        id: 12,
        title: "Cloud & Mobile Security",
        subtitle: "The New Frontier",
        description: "Security challenges in the era of Serverless, AWS, and mobile devices.",
        color: "orange",
        nextModule: 13,
        content: {
            isGeneric: true,
            intro: "We used to guard physical 'Servers'. Now we guard 'Configurations'.",
            sections: [
                { title: "S3 Bucket Exposure", icon: "fa-cloud", desc: "Misconfigured Cloud storage that makes public data accessible to anyone.", list: ["Check permissions", "Enable Encryption"] },
                { title: "Mobile Malware", icon: "fa-mobile-alt", desc: "Fake Android/iOS apps that steal SMS OTPs.", list: ["Only download from Playstore", "Check app permissions"] }
            ]
        }
    },
    13: {
        id: 13,
        title: "The Endgame: Red vs Blue",
        subtitle: "Hacker vs Defender Operations",
        description: "Unifying all knowledge: Designing attacks (Red) and building defenses (Blue).",
        color: "fuchsia",
        nextModule: null,
        content: {
            isGeneric: true,
            intro: "The world of cybersecurity is an eternal game of cat and mouse. Understanding both sides is the key to becoming a complete professional.",
            sections: [
                {
                    title: "Red Team Operations (Offensive)",
                    desc: "Simulating real enemies. Not just finding 'bugs', but trying to achieve an 'Objective' (e.g., Stealing Employee Database).",
                    icon: "fa-user-ninja",
                    redView: { intro: "Mindset: 'Try Harder'. If the door is locked, try the window. If the window is locked, trick the guard.", targets: ["People (Social Eng)", "Process (Business Logic)", "Technology (Exploits)"], goal: "Testing Blue Team response and the effectiveness of security controls." },
                    labs: [
                        { title: "Kill Chain Design", desc: "Design attack scenarios from Recon to Exfiltration." },
                        { title: "C2 Setup", desc: "Deploy a simple Command & Control server." }
                    ]
                },
                {
                    title: "Blue Team Operations (Defense)",
                    desc: "Detection, Response, and Mitigation. Keeping the fortress strong.",
                    icon: "fa-user-shield",
                    blueView: { intro: "Mindset: 'Assume Breach'. Assume the hacker is already in; find where they are hiding.", prevent: ["SIEM Monitoring", "Incident Response Plan"], tip: "Log everything, analyze what matters." },
                    labs: [
                        { title: "Log Analysis", desc: "Look for brute-force attack traces in SSH logs." },
                        { title: "Hardening", desc: "Secure a freshly installed Linux server." }
                    ]
                }
            ],
            tools: [
                { title: "Wazuh / Splunk", desc: "SIEM (Security Information and Event Management) for Blue Team.", cmd: "Agent based monitoring" },
                { title: "Cobalt Strike / Sliver", desc: "Advanced C2 Framework for Red Team simulations.", cmd: "Team Server" },
                { title: "MITRE ATT&CK", desc: "Knowledge base of cyber attack tactics and techniques. Essential glossary for Red & Blue Teams." }
            ],
            practice: [
                { title: "Log Analysis", desc: "Analyze Apache/Nginx logs to find traces of SQL Injection or Directory Traversal attacks." },
                { title: "Tabletop Exercise", desc: "Simulation discussion: 'What do we do if Ransomware hits the HR server right now?'" }
            ]
        }
    }
};
};

export default function ModulePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const data = modulesDB[resolvedParams.id];

    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-dark-bg text-slate-200">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/5 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
                    <Link
                        href="/ethical-hacking"
                        className="flex items-center gap-2 text-slate-300 hover:text-brand-500 transition-colors group"
                    >
                        <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                        <span>Back to Dashboard</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${data.color}-500/10 border border-${data.color}-500/20 text-${data.color}-400 text-xs font-mono font-bold mb-6`}>
                        MODULE {data.id}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {data.title}
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed italic">
                        {data.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 pb-24 space-y-16">

                {/* MODULE 1 RENDERER */}
                {data.id === 1 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{data.content.intro}</p>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.content.facts?.map((fact: any, idx: number) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-900/20 to-dark-bg p-5 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all relative overflow-hidden">
                                    <h1 className="text-6xl font-black text-blue-500/5 absolute -top-4 -right-4">{idx + 1}</h1>
                                    <h4 className="font-bold text-white mb-2 relative z-10">{fact.title}</h4>
                                    <p className="text-xs text-slate-400 relative z-10">{fact.desc}</p>
                                </div>
                            ))}
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">Key Terms</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {data.content.keyTerms?.map((term: any, idx: number) => (
                                    <div key={idx} className={`bg-dark-bg p-5 rounded-xl border border-${term.color}-500/20 flex gap-4`}>
                                        <div className={`w-12 h-12 flex-shrink-0 bg-${term.color}-500/10 rounded-lg flex items-center justify-center text-${term.color}-400`}>
                                            <i className={`fas ${term.icon} text-xl`}></i>
                                        </div>
                                        <div>
                                            <h3 className={`text-${term.color}-400 font-bold mb-1`}>{term.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{term.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white text-center">"Hat" Classifications</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {data.content.hats?.map((hat: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card p-6 rounded-xl border border-white/5 text-center hover:translate-y-1 transition-transform">
                                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-xl">
                                            <i className={`fas ${hat.icon} text-3xl`}></i>
                                        </div>
                                        <h4 className={`font-bold mb-2 ${hat.title.includes("Black") ? "text-red-500" : "text-white"}`}>{hat.title}</h4>
                                        <p className="text-sm text-slate-400">{hat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-white mb-6">Ethics & Legality</h2>
                                    <p className="text-slate-400 mb-6 text-sm">Without permission, hacking is a crime. Mandatory documents:</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {data.content.legal?.map((item: any, idx: number) => (
                                            <div key={idx} className="p-3 bg-dark-bg rounded-lg border border-white/5">
                                                <i className={`fas ${item.icon} text-brand-500 mb-2`}></i>
                                                <p className="text-xs font-bold text-white">{item.title}</p>
                                                <p className="text-[10px] text-slate-500">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 border-t md:border-t-0 md:border-l border-dark-border pt-6 md:pt-0 md:pl-8">
                                    <h2 className="text-2xl font-bold text-white mb-6">Career Path</h2>
                                    <ul className="space-y-4">
                                        {data.content.careers?.map((job: any, idx: number) => (
                                            <li key={idx} className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                <div>
                                                    <h4 className="text-white font-bold text-sm">{job.title}</h4>
                                                    <p className="text-slate-400 text-xs">{job.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white text-center">Methodology (Hacking Cycle)</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {data.content.methodology?.map((step: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card px-6 py-3 rounded-full border border-white/5 flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">{idx + 1}</span>
                                        <div>
                                            <span className="text-white text-sm font-bold block">{step.title}</span>
                                            <span className="text-slate-500 text-[10px] uppercase tracking-wider">{step.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8">Real Case Studies</h2>
                            <div className="space-y-4">
                                {data.content.cases?.map((cs: any, idx: number) => (
                                    <details key={idx} className="group bg-dark-bg rounded-xl border border-white/5" open={idx === 0}>
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-white hover:bg-slate-800 transition-colors">
                                            <span>{cs.title}</span><i className="fas fa-chevron-down group-open:rotate-180 transition-transform"></i>
                                        </summary>
                                        <div className="p-6 pt-0 text-slate-400 text-sm border-t border-dark-border mt-2">
                                            <div className="grid md:grid-cols-3 gap-6 mt-4">
                                                <div>
                                                    <strong className="text-brand-500 block mb-1">Scenario:</strong>
                                                    {cs.scenario}
                                                </div>
                                                <div>
                                                    <strong className="text-red-500 block mb-1">Risk:</strong>
                                                    {cs.risk}
                                                </div>
                                                <div>
                                                    <strong className="text-emerald-500 block mb-1">Solution:</strong>
                                                    {cs.solution}
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 2 RENDERER */}
                {data.id === 2 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{data.content.intro}</p>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Industry Standards</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {data.content.standards?.map((std: any, idx: number) => (
                                    <div key={idx} className="bg-dark-bg p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors flex flex-col h-full group">
                                        <h4 className="font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">{std.title}</h4>
                                        <p className="text-xs text-slate-500 mb-4 uppercase font-mono tracking-wide bg-slate-800/50 p-1 rounded inline-block self-start">{std.subtitle}</p>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{std.desc}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {std.features?.map((feat: string, i: number) => (
                                                <span key={i} className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] rounded border border-purple-500/20">
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white text-center">7 Stages (PTES)</h2>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                                {data.content.stages?.map((stage: any, idx: number) => (
                                    <div key={idx} className={`bg-dark-card border border-white/5 rounded-xl p-6 flex gap-6 items-center hover:bg-slate-800/50 transition-colors relative overflow-hidden group`}>
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${stage.color}-500 transition-all group-hover:w-2`}></div>
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 bg-${stage.color}-500/10 text-${stage.color}-400 border border-${stage.color}-500/20 shadow-lg group-hover:scale-110 transition-transform`}>
                                            {stage.id}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg flex items-center gap-2">
                                                {stage.title}
                                                <span className="text-[10px] text-slate-500 uppercase font-normal border border-slate-700 px-2 rounded-full">{stage.subtitle}</span>
                                            </h3>
                                            <p className="text-slate-400 text-sm mt-1">{stage.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <i className="fas fa-terminal text-purple-500"></i> {data.content.simulation?.title}
                                </h2>
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs px-3 py-1 rounded-full animate-pulse">
                                    <i className="fas fa-circle text-[8px] mr-2"></i>Live Demo
                                </span>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm">{data.content.simulation?.desc}</p>

                            <div className="bg-black/90 rounded-xl border border-slate-700 font-mono text-sm shadow-2xl overflow-hidden">
                                <div className="bg-slate-900/80 p-3 border-b border-slate-700 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-slate-500 text-xs">pentester@kali-linux:~</span>
                                </div>
                                <div className="p-6 space-y-8">
                                    {data.content.simulation?.steps.map((step: any, idx: number) => (
                                        <div key={idx} className="group">
                                            <div className="flex items-center gap-4 mb-2 opacity-60">
                                                <p className="text-purple-400 font-bold text-xs uppercase tracking-wider">{step.type}</p>
                                                <div className="h-px bg-slate-800 flex-grow"></div>
                                                <p className="text-slate-500 text-xs italic">// {step.action}</p>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-purple-500 font-bold mr-2">➜</span>
                                                <span className="text-cyan-400 mr-2">~</span>
                                                <span className="text-white">{step.cmd}</span>
                                            </div>
                                            <div className="pl-6 border-l-2 border-slate-700/50 ml-1">
                                                <pre className="text-slate-400 text-xs whitespace-pre-wrap font-mono">{step.output}</pre>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-8 p-4 bg-emerald-900/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-start gap-4">
                                        <div className="bg-emerald-500/20 p-2 rounded-lg">
                                            <i className="fas fa-shield-alt text-xl"></i>
                                        </div>
                                        <div>
                                            <strong className="block text-sm mb-1 font-bold">Remediation Steps (Fix)</strong>
                                            <span className="text-xs text-emerald-200/70 block leading-relaxed">{data.content.simulation?.remediation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 3 RENDERER */}
                {data.id === 3 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">What is Reconnaissance?</h2>
                            <p className="text-slate-300 leading-relaxed mb-6">{data.content.intro?.desc}</p>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-dark-bg rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2"><i className="fas fa-check-circle text-emerald-400 mr-2"></i>Goal</h4>
                                    <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">{data.content.intro?.goal?.map((g: string, i: number) => <li key={i}>{g}</li>)}</ul>
                                </div>
                                <div className="p-4 bg-dark-bg rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2"><i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>Important</h4>
                                    <p className="text-sm text-slate-400">{data.content.intro?.risk}</p>
                                </div>
                            </div>
                        </section>

                        <section className="grid md:grid-cols-2 gap-8">
                            {data.content.methods?.map((method: any, idx: number) => (
                                <div key={idx} className={`bg-dark-card p-8 rounded-2xl border border-${method.color}-500/20 flex flex-col h-full`}>
                                    <div className={`w-12 h-12 bg-${method.color}-500/10 rounded-xl flex items-center justify-center text-${method.color}-400 mb-6`}><i className={`fas ${method.icon} text-2xl`}></i></div>
                                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 flex-grow">{method.desc}</p>

                                    <div className={`text-xs font-bold px-3 py-1 rounded inline-block mb-4 self-start ${method.risk?.includes('LOW') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {method.risk}
                                    </div>

                                    <div className="bg-black/30 p-4 rounded-lg space-y-1 mt-auto">
                                        <p className="text-xs text-slate-500 mb-1 font-bold">EXAMPLE:</p>
                                        {method.items?.map((item: string, i: number) => <p key={i} className={`text-xs font-mono text-${method.color}-400`}>• {item}</p>)}
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Arsenal (Tools)</h2>
                            <div className="space-y-6">
                                {data.content.tools?.map((tool: any, idx: number) => (
                                    <div key={idx} className="bg-dark-bg p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-white text-lg">{tool.title}</h4>
                                            <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">{tool.cat}</span>
                                        </div>
                                        <p className="text-sm text-slate-400 mb-4">{tool.desc}</p>
                                        <div className="bg-black border border-slate-800 p-3 rounded-lg font-mono text-sm group relative">
                                            <div className="flex gap-1.5 absolute top-3 left-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                            </div>
                                            <div className="pt-6 space-y-1">
                                                {tool.cmd?.split('\n').map((line: string, i: number) => (
                                                    <p key={i} className={line.startsWith('#') ? "text-slate-500 italic" : "text-emerald-400"}>
                                                        {!line.startsWith('#') && "$ "} {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="bg-dark-card rounded-2xl border border-white/5 p-8">
                                <h2 className="text-2xl font-bold text-white mb-2">{data.content.case?.title}</h2>
                                <p className="text-slate-400 mb-6 text-sm italic">{data.content.case?.desc}</p>
                                <div className="space-y-4">
                                    {data.content.case?.steps?.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-dark-bg/50 rounded-xl border border-white/5/50">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold flex-shrink-0 border border-cyan-500/20">{step.id}</div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                                                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-900/20 to-dark-card rounded-2xl border border-indigo-500/20 p-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <i className="fas fa-laptop-code text-indigo-400"></i> Practical Exercise
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {data.content.practice?.map((prac: any, idx: number) => (
                                        <div key={idx} className="bg-dark-bg p-5 rounded-xl border border-indigo-500/10 hover:border-indigo-500/40 transition-colors">
                                            <h4 className="font-bold text-indigo-300 mb-2">{prac.title}</h4>
                                            <p className="text-sm text-slate-400">{prac.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-3 items-center text-xs text-yellow-200">
                                    <i className="fas fa-exclamation-triangle text-yellow-500 text-lg"></i>
                                    <p>Remember: Use these skills ethically. Do not scan systems without written permission.</p>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 4 RENDERER */}
                {data.id === 4 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">{data.content.intro}</p>

                            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">Simple Analogy ("Guard")</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {data.content.analogy?.map((item: any, idx: number) => (
                                    <div key={idx} className={`bg-dark-bg p-6 rounded-xl border border-${item.color}-500/20 hover:border-${item.color}-500/40 transition-colors`}>
                                        <h3 className={`font-bold text-${item.color}-400 mb-2`}>{item.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">Stage 1: Scanning</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {data.content.scanning?.types?.map((type: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card p-6 rounded-xl border border-white/5 text-center hover:-translate-y-1 transition-transform">
                                        <i className={`fas ${type.icon} text-4xl text-orange-500 mb-4 opacity-80`}></i>
                                        <h5 className="font-bold text-white text-lg mb-1">{type.title}</h5>
                                        <p className="text-sm text-slate-500">{type.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-black/80 border border-slate-700 p-6 rounded-xl font-mono text-sm relative overflow-hidden group">
                                <span className="absolute top-2 right-4 text-xs text-slate-600 font-bold uppercase tracking-wider">Nmap Cheatsheet</span>
                                {data.content.scanning?.cheatsheet?.map((cheat: any, idx: number) => (
                                    <div key={idx} className="mb-3 last:mb-0 border-l-2 border-orange-500/30 pl-3">
                                        <p className="text-slate-500 text-xs mb-1 italic"># {cheat.desc}</p>
                                        <span className="text-orange-400">$ {cheat.cmd}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Stage 2: Enumeration</h2>
                            <p className="text-slate-400 text-sm mb-6">{data.content.enumeration?.desc}</p>
                            <div className="overflow-x-auto rounded-lg border border-white/5">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-900/50">
                                        <tr className="text-slate-400 border-b border-dark-border">
                                            <th className="p-4">Service</th>
                                            <th className="p-4">Info Sought</th>
                                            <th className="p-4">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300 divide-y divide-dark-border/50">
                                        {data.content.enumeration?.table?.map((row: any, idx: number) => (
                                            <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                                <td className="p-4 font-bold text-white">{row.service}</td>
                                                <td className="p-4">{row.info}</td>
                                                <td className="p-4"><span className="font-mono text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20">{row.tool}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-slate-900 to-dark-card rounded-2xl border border-slate-700 overflow-hidden">
                            <div className="p-8 border-b border-slate-700">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <i className="fas fa-terminal text-orange-500"></i> {data.content.tutorial?.title}
                                </h2>
                            </div>
                            <div className="p-8 space-y-8">
                                {data.content.tutorial?.steps?.map((step: any, idx: number) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-slate-700">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-orange-500"></span>
                                        <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
                                        <p className="text-slate-400 text-sm mb-4">{step.desc}</p>

                                        {step.cmd && (
                                            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-slate-800/50">
                                                <div className="flex gap-1.5 mb-3 opacity-50">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                                </div>
                                                <p className="text-emerald-400 mb-2">$ {step.cmd}</p>
                                                {step.output && (
                                                    <pre className="text-slate-500 text-xs whitespace-pre-wrap pl-3 border-l mb-1 border-slate-700">
                                                        {step.output}
                                                    </pre>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="grid md:grid-cols-2 gap-6 bg-red-900/10 p-8 rounded-2xl border border-red-500/20">
                            <div className="md:col-span-2 text-center mb-2">
                                <h2 className="text-2xl font-bold text-red-100 mb-2"><i className="fas fa-gavel mr-2"></i>Ethics & Legality</h2>
                                <p className="text-red-200/60 text-sm">Scanning without permission can violate the law.</p>
                            </div>
                            {data.content.ethics?.map((eth: any, idx: number) => (
                                <div key={idx} className="bg-dark-bg/50 p-4 rounded-xl border border-red-500/10 flex gap-3 items-start">
                                    <i className="fas fa-check-circle text-red-500 mt-1"></i>
                                    <div>
                                        <h4 className="font-bold text-red-200 text-sm">{eth.title}</h4>
                                        <p className="text-xs text-red-200/50">{eth.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                )}

                {/* MODULE 5 RENDERER */}
                {data.id === 5 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-4">Basic Concepts & Analogy</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {data.content.concepts?.map((c: any, idx: number) => (
                                    <div key={idx} className={`bg-dark-bg p-6 rounded-xl border border-${c.color}-500/20 hover:bg-${c.color}-500/5 transition-colors`}>
                                        <h4 className={`font-bold text-${c.color}-400 mb-1 text-lg`}>{c.title}</h4>
                                        <p className="text-xs text-white uppercase font-bold tracking-wider mb-3 bg-slate-800 inline-block px-2 py-1 rounded">{c.subtitle}</p>
                                        <p className="text-sm text-slate-300 leading-relaxed italic">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white text-center">Penetration Cycle</h2>
                            <div className="grid md:grid-cols-4 gap-4">
                                {data.content.cycle?.map((step: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card p-5 rounded-xl border border-white/5 text-center relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
                                        <div className="w-10 h-10 mx-auto rounded-full bg-slate-800 text-teal-400 flex items-center justify-center font-bold mb-3 border border-slate-700 group-hover:scale-110 transition-transform">{step.id}</div>
                                        <h4 className="font-bold text-white mb-2 text-sm">{step.title}</h4>
                                        <p className="text-xs text-slate-400 mb-3 h-10">{step.desc}</p>
                                        <span className="text-[10px] bg-slate-900 border border-slate-700 text-teal-500 px-2 py-1 rounded">{step.tool}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white text-center mb-6">Methodology</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {data.content.methodology?.map((m: any, idx: number) => (
                                    <div key={idx} className={`bg-${m.bg} p-6 rounded-xl border border-slate-700 text-center ${m.bg === 'white' ? 'text-black' : 'text-white'}`}>
                                        <i className={`fas ${m.icon} text-3xl mb-3 opacity-80`}></i>
                                        <h4 className="font-bold mb-2 text-lg">{m.title}</h4>
                                        <p className={`text-sm ${m.bg === 'white' ? 'text-gray-600' : 'text-slate-400'}`}>{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Arsenal (Tools)</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.content.tools?.map((tool: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 bg-dark-bg p-4 rounded-xl border border-white/5">
                                        <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-teal-400 font-bold border border-slate-700">
                                            <i className="fas fa-wrench"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{tool.title}</h4>
                                            <p className="text-slate-400 text-sm">{tool.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white">{data.content.case?.title}</h2>
                                <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs px-3 py-1 rounded-full animate-pulse">
                                    <i className="fas fa-circle text-[8px] mr-2"></i>Live Simulation
                                </span>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm italic">{data.content.case?.scenario}</p>

                            <div className="bg-black/90 rounded-xl border border-slate-700 font-mono text-xs md:text-sm shadow-2xl overflow-hidden">
                                <div className="bg-slate-900/80 p-3 border-b border-slate-700 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-slate-500">kali@lab-network:~</span>
                                </div>
                                <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
                                    {data.content.case?.steps?.map((step: any, idx: number) => (
                                        <div key={idx} className="group">
                                            <p className="text-teal-500 font-bold mb-2 opacity-60"># {step.title}</p>
                                            <p className="text-white mb-2">
                                                <span className="text-teal-400 mr-2">➜</span>
                                                <span className="text-blue-400 mr-2">~</span>
                                                {step.cmd?.split('\n').map((line: string, i: number) => (
                                                    <span key={i} className="block pl-6 first:pl-0 first:inline">{line}</span>
                                                ))}
                                            </p>
                                            <div className="pl-6 border-l-2 border-slate-700 mt-2">
                                                <pre className="text-slate-400 whitespace-pre-wrap font-mono">{step.output}</pre>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 6 RENDERER */}
                {/* MODULE 6 RENDERER - OSI Fundamentals */}
                {data.id === 6 && (
                    <div className="space-y-12">
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-30"></div>
                            <h2 className="text-2xl font-bold text-white mb-4">The OSI Model for Hackers</h2>
                            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{data.content.intro}</p>
                        </section>

                        <div className="space-y-8">
                            {data.content.layers?.map((layer: any, idx: number) => (
                                <div key={idx} className="relative group">
                                    <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-${layer.color}-500/50 rounded-full group-hover:bg-${layer.color}-500 transition-all`}></div>
                                    <div className="bg-dark-card rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-14 h-14 rounded-2xl bg-${layer.color}-500/10 flex items-center justify-center text-${layer.color}-400 border border-${layer.color}-500/20 shadow-lg`}>
                                                    <i className={`fas ${layer.icon} text-2xl`}></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white tracking-tight">{layer.name}</h3>
                                                    <span className={`text-[10px] font-bold uppercase tracking-widest text-${layer.color}-500 bg-${layer.color}-500/5 px-2 py-0.5 rounded border border-${layer.color}-500/10`}>
                                                        {layer.badge}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-400 leading-relaxed mb-8 border-l-2 border-white/5 pl-4 italic">
                                            {layer.desc}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-500/5 rounded-xl border border-red-500/10 p-6 group/red transition-colors hover:bg-red-500/10">
                                                <h4 className="text-red-400 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                                                    <i className="fas fa-biohazard text-xs"></i> Attack Vectors
                                                </h4>
                                                <div className="space-y-3">
                                                    {layer.vectors.map((v: any, i: number) => (
                                                        <div key={i} className="flex gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-1.5 shrink-0"></div>
                                                            <div>
                                                                <p className="text-white text-xs font-bold leading-none mb-1">{v.title}</p>
                                                                <p className="text-slate-500 text-[10px]">{v.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-emerald-500/5 rounded-xl border border-emerald-500/10 p-6 group/green transition-colors hover:bg-emerald-500/10">
                                                <h4 className="text-emerald-400 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                                                    <i className="fas fa-shield-alt text-xs"></i> Defense Strategy
                                                </h4>
                                                <div className="space-y-3">
                                                    {layer.mitigations.map((m: any, i: number) => (
                                                        <div key={i} className="flex gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 shrink-0"></div>
                                                            <div>
                                                                <p className="text-white text-xs font-bold leading-none mb-1">{m.title}</p>
                                                                <p className="text-slate-500 text-[10px]">{m.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* MODULE 7 RENDERER - Injection Attacks */}
                {data.id === 7 && (
                    <div className="space-y-16">
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
                            <h2 className="text-2xl font-bold text-white mb-4">The World of Injection</h2>
                            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{data.content.intro}</p>
                        </section>

                        <div className="grid gap-8">
                            {data.content.sections?.map((sec: any, idx: number) => (
                                <div key={idx} className="bg-dark-card rounded-2xl border border-white/5 overflow-hidden group hover:border-white/10 transition-all">
                                    <div className="p-8">
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-14 h-14 rounded-2xl bg-${sec.color || 'brand'}-500/10 flex items-center justify-center text-${sec.color || 'brand'}-400 border border-${sec.color || 'brand'}-500/20`}>
                                                    <i className={`fas ${sec.icon} text-2xl`}></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{sec.title}</h3>
                                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{sec.layer || 'Layer 7'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                                            {sec.desc}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            {/* Red Perspective */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider mb-2">
                                                    <i className="fas fa-fire text-[10px]"></i> Red Team Perspective
                                                </div>
                                                <div className="bg-dark-bg/50 rounded-xl border border-white/5 p-6 space-y-4">
                                                    <p className="text-xs text-slate-300 italic">"{sec.redView?.intro || sec.perspectives?.[sec.type]?.red?.intro}"</p>
                                                    <div className="space-y-2">
                                                        {(sec.redView?.targets || sec.perspectives?.[sec.type]?.red?.targets)?.map((t: string, i: number) => (
                                                            <div key={i} className="flex items-center gap-2 text-[10px] text-red-400/70 capitalize">
                                                                <i className="fas fa-crosshairs text-[8px]"></i> {t}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Blue Perspective */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-2">
                                                    <i className="fas fa-shield-alt text-[10px]"></i> Blue Team Perspective
                                                </div>
                                                <div className="bg-dark-bg/50 rounded-xl border border-white/5 p-6 space-y-4">
                                                    <p className="text-xs text-slate-300 italic">"{sec.blueView?.intro || sec.perspectives?.[sec.type]?.blue?.intro}"</p>
                                                    <div className="space-y-2">
                                                        {(sec.blueView?.prevent || sec.perspectives?.[sec.type]?.blue?.prevent)?.map((p: string, i: number) => (
                                                            <div key={i} className="flex items-center gap-2 text-[10px] text-emerald-400/70 capitalize">
                                                                <i className="fas fa-check-shield text-[8px]"></i> {p}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {sec.code && (
                                            <div className="mt-8 bg-black/90 rounded-xl border border-slate-700/50 p-6 font-mono text-sm relative overflow-hidden group/code shadow-2xl">
                                                <div className="absolute top-2 right-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">Injected Payload</div>
                                                <code className="text-brand-400">$ {sec.code}</code>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* GENERIC RENDERER FOR MODULES 8-13 */}
                {data.id >= 8 && data.content.sections && (
                    <section className="space-y-8">
                        {data.content.sections?.filter((s: any) => s.type !== 'sqli').map((sec: any, idx: number) => (
                            <div key={idx} className="bg-dark-card/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl hover:border-brand-500/30 transition-all">
                                <h3 className={`font-bold text-2xl mb-6 flex items-center gap-4 ${sec.color === 'red' ? 'text-red-500' : 'text-brand-500'}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-current/10 border border-current/20`}>
                                        <i className={`fas ${sec.icon}`}></i>
                                    </div>
                                    {sec.title}
                                </h3>

                                <div className="space-y-6">
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        {sec.content}
                                    </p>

                                    {sec.list && (
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {sec.list.map((item: any, i: number) => (
                                                <div key={i} className="flex items-start gap-3 p-4 bg-dark-bg/50 rounded-xl border border-white/5/50 group hover:border-brand-500/30 transition-colors">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-[10px] group-hover:bg-brand-500 group-hover:text-white transition-all">
                                                        <i className="fas fa-check"></i>
                                                    </div>
                                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {sec.code && (
                                        <div className="bg-black/80 rounded-xl p-6 font-mono text-sm border border-slate-800 shadow-inner group relative">
                                            <div className="absolute top-3 right-4 flex gap-2">
                                                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Syntax: {sec.title.split(' ')[0]}</span>
                                            </div>
                                            <pre className="text-emerald-400 overflow-x-auto">
                                                <code>{sec.code}</code>
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Sqli Lab - Module 7 only but handled separately if needed or inside generic */}
                {data.id === 7 && data.content.sections?.find((s: any) => s.type === 'sqli') && (
                    <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Interactive Lab: SQL Injection</h2>
                        {/* Placeholder for interactive lab or detailed steps */}
                        <p className="text-slate-400">Use this payload on the input forms available in your practice lab.</p>
                    </section>
                )}


                {/* Navigation Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        {parseInt(resolvedParams.id) > 1 && (
                            <Link
                                href={`/ethical-hacking/modules/${parseInt(resolvedParams.id) - 1}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-bold"
                            >
                                <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                                <span>Previous Module</span>
                            </Link>
                        )}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500 font-bold text-sm border border-white/5">
                                {data.id}
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">Status</p>
                                <p className="text-white font-bold text-sm leading-none">Module Completed</p>
                            </div>
                        </div>
                    </div>

                    {data.nextModule ? (
                        <Link
                            href={`/ethical-hacking/modules/${data.nextModule}`}
                            className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center group"
                        >
                            Next to Module {data.nextModule}
                            <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    ) : (
                        <Link
                            href="/ethical-hacking"
                            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center group"
                        >
                            Complete Course <i className="fas fa-check-double ml-3 group-hover:scale-110 transition-transform"></i>
                        </Link>
                    )}
                </div>
            </main>


        </div>
    );
}


