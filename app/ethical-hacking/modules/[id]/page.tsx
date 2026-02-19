"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const modulesDB: Record<string, any> = {
    1: {
        id: 1,
        title: "Ethical Hacking 101",
        subtitle: "Pendahuluan & Dasar Etika",
        description: "Dari Stereotip ke Profesi Legal: Membanting Mitos Hoodie Hitam.",
        color: "blue",
        nextModule: 2,
        content: {
            intro: "Ethical hacking adalah praktik profesional—seperti 'dokter sistem'—yang mendiagnosa kerentanan untuk memperkuat pertahanan. Materi ini membongkar mitos 'Hoodie Hitam' dan menjelaskan bagaimana hobi teknis berubah menjadi profesi legal yang vital.",
            keyTerms: [
                { title: "Hacker (The Builder)", icon: "fa-hammer", color: "blue", desc: 'Programmer terampil yang didorong rasa ingin tahu. Fokus berkarya & belajar "bagaimana ini bekerja".' },
                { title: "Cracker (The Breaker)", icon: "fa-user-ninja", color: "red", desc: "Sering disebut 'Hacker' di media. Menggunakan skill untuk merusak atau mencuri data secara ilegal." },
                { title: "Vulnerability", icon: "fa-lock-open", color: "orange", desc: "Kelemahan pada sistem (software/hardware) yang bisa dimanfaatkan untuk akses ilegal." },
                { title: "Zero-Day", icon: "fa-radiation", color: "yellow", desc: "Kerentanan baru yang ditemukan dan belum ada perbaikannya (patch) dari pihak vendor." }
            ],
            facts: [
                { title: "39 Detik", desc: "Rerata serangan siber terjadi setiap 39 detik di seluruh dunia." },
                { title: "43%", desc: "Target serangan siber adalah bisnis kecil dan menengah (UMKM)." },
                { title: "$10.5T", desc: "Kerugian global akibat cybercrime diprediksi mencapai $10.5 Triliun pada 2025." },
                { title: "95%", desc: "Insiden keamanan siber disebabkan oleh faktor kesalahan manusia (Human Error)." }
            ],
            hats: [
                { title: "White Hat", desc: "Hacker Etis. Memiliki izin resmi, tujuannya untuk mengamankan sistem.", icon: "fa-user-nurse" },
                { title: "Black Hat", desc: "Kriminal Cyber. Tujuannya merusak, mencuri data, atau motif finansial jahat.", icon: "fa-user-ninja" },
                { title: "Grey Hat", desc: "Ilegal tapi tidak berniat jahat. Seringkali hanya ingin pamer skill.", icon: "fa-user-secret" }
            ],
            legal: [
                { title: "NDA", desc: "Internal Non-Disclosure Agreement.", icon: "fa-file-signature" },
                { title: "RoE", desc: "Rules of Engagement (Batasan tes).", icon: "fa-scroll" }
            ],
            careers: [
                { title: "Penetration Tester", desc: "Mensimulasikan serangan secara legal untuk mencari bug." },
                { title: "SOC Analyst", desc: "Tim pertahanan (Blue Team) yang memantau serangan secara real-time." },
                { title: "Security Researcher", desc: "Mencari celah Zero-day dan melaporkannya ke vendor (Bug Bounty)." }
            ],
            methodology: [
                { title: "Recon", desc: "Riset Target" },
                { title: "Scanning", desc: "Deteksi Port" },
                { title: "Exploit", desc: "Akses Masuk" },
                { title: "Maintain", desc: "Backdoor" }
            ],
            cases: [
                {
                    title: "Bypass Login vs Input Sanitization",
                    scenario: "Aplikasi menerima input 'admin' OR 1=1-- dan memberikan akses tanpa password.",
                    risk: "Seluruh data user bisa bocor dalam hitungan detik.",
                    solution: "Gunakan parameterized queries dan blacklist karakter berbahaya."
                }
            ]
        },
    },
    2: {
        id: 2,
        title: "Metodologi Pentest",
        subtitle: "Standar Industri & Tahapan",
        description: "Mengupas tuntas PTES (Penetration Testing Execution Standard) dan alur kerja profesional.",
        color: "purple",
        nextModule: 3,
        content: {
            intro: "Hacking tanpa metode hanyalah tindakan vandal. Profesional mengikuti standar baku agar hasil kerjanya terukur, aman, dan dapat diulang.",
            standards: [
                { title: "PTES", subtitle: "Execution Standard", desc: "Standar teknis paling populer. Membagi pentest menjadi 7 tahap jelas.", features: ["Pre-engagement", "Intelligence Gathering", "Threat Modeling"] },
                { title: "OWASP", subtitle: "Web Security", desc: "Kitab suci keamanan web. Fokus pada Top 10 kerentanan paling kritis.", features: ["OWASP Top 10", "WSTG Guide"] },
                { title: "NIST", subtitle: "Framework Pemerintah", desc: "Standar ketat yang sering dipakai instansi pemerintah dan perbankan.", features: ["Risk Management", "Framework Core"] }
            ],
            stages: [
                { id: 1, title: "Pre-engagement Interactions", subtitle: "Perjanjian", desc: "Menentukan Scope (ruang lingkup), RoE, Timing, dan Legal Contracts. Tahap paling krusial agar tidak masuk penjara.", color: "blue" },
                { id: 2, title: "Intelligence Gathering", subtitle: "Reconnaissance", desc: "Mengumpulkan info sebanyak mungkin tentang target (IP, Domain, Email Karyawan) secara pasif maupun aktif.", color: "cyan" },
                { id: 3, title: "Threat Modeling", subtitle: "Strategi", desc: "Menganalisa aset mana yang paling berharga dan bagaimana cara efektif menyerangnya.", color: "teal" },
                { id: 4, title: "Vulnerability Analysis", subtitle: "Scanning", desc: "Mencari celah keamanan menggunakan tools scanner atau manual.", color: "green" },
                { id: 5, title: "Exploitation", subtitle: "Serangan", desc: "Mencoba menembus sistem menggunakan celah yang ditemukan. Pembuktian konsep (PoC).", color: "red" },
                { id: 6, title: "Post Exploitation", subtitle: "Pendalaman", desc: "Apa yang bisa dilakukan setelah masuk? Privilege Escalation, Pivoting ke jaringan lain.", color: "purple" },
                { id: 7, title: "Reporting", subtitle: "Laporan", desc: "Membuat laporan teknis untuk IT dan laporan eksekutif untuk manajemen. Memberikan solusi perbaikan.", color: "orange" }
            ],
            simulation: {
                title: "Simulasi Terminal",
                desc: "Lihat bagaimana seorang pentester berpindah antar tahapan dalam terminal.",
                steps: [
                    { type: "Recon", action: "Cek IP Target", cmd: "ping target-bank.com", output: "PING target-bank.com (192.168.1.5): 56 data bytes\n64 bytes from 192.168.1.5: icmp_seq=0 ttl=64 time=10.2 ms" },
                    { type: "Scanning", action: "Scan Port Terbuka", cmd: "nmap -p 80,443 192.168.1.5", output: "PORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https" },
                    { type: "Exploit", action: "Test SQL Injection", cmd: "curl 'http://target-bank.com/login?user=admin' --data \"pass=' OR 1=1--\"", output: "HTTP/1.1 200 OK\nWelcome, Admin! (Login Bypass Successful)" }
                ],
                remediation: "Input sanitization gagal menangani karakter petik tunggal ('). Gunakan Prepared Statements pada database."
            }
        }
    },
    3: {
        id: 3,
        title: "Reconnaissance",
        subtitle: "The Art of Information Gathering",
        description: "Teknik mengumpulkan informasi target (OSINT) sebelum melancarkan serangan.",
        color: "cyan",
        nextModule: 4,
        content: {
            intro: {
                desc: "Reconnaissance (Recon) adalah tahap paling lama dalam hacking (bisa 70% waktu). Semakin banyak informasi yang Anda miliki, semakin mudah menemukan celah.",
                goal: ["Menemukan 'Attack Surface' (bidang serang).", "Mencari kebocoran data (email, password lama).", "Memetakan teknologi yang dipakai (Tech Stack)."],
                risk: "Recon Aktif dapat terdeteksi oleh Firewall/IDS. Recon Pasif lebih aman."
            },
            methods: [
                {
                    title: "Passive Recon (OSINT)",
                    desc: "Mengumpulkan info TANPA menyentuh server target langsung. Tidak terdeteksi.",
                    icon: "fa-user-secret",
                    risk: "RISIKO: RENDAH",
                    color: "blue",
                    items: ["Google Dorking (site:target.com filetype:pdf)", "Cek Whois & DNS Records", "Cari info karyawan di LinkedIn", "Lihat versi web lama di Wayback Machine"]
                },
                {
                    title: "Active Recon",
                    desc: "Berinteraksi langsung dengan sistem target. Bisa memicu alarm keamanan.",
                    icon: "fa-radar",
                    risk: "RISIKO: TINGGI",
                    color: "red",
                    items: ["Port Scanning (Nmap)", "Banner Grabbing (Cek versi server)", "DNS Zone Transfer", "Ping Sweep"]
                }
            ],
            tools: [
                { title: "Google Dorks", desc: "Teknik pencarian canggih Google untuk mencari file sensitif.", cat: "Passive", cmd: "site:gov.id filetype:sql" },
                { title: "Shodan.io", desc: "Search engine untuk perangkat IoT dan Server (CCTV, SCADA, Server).", cat: "Passive", cmd: "Browser: shodan.io" },
                { title: "TheHarvester", desc: "Scraping email, subdomain, dan nama host dari berbagai sumber publik.", cat: "Passive", cmd: "theHarvester -d domain.com -b google" },
                { title: "Nmap", desc: "Raja scanning jaringan. Bisa aktif/stealth.", cat: "Active", cmd: "nmap -sS target.com" }
            ],
            case: {
                title: "Studi Kasus: Kebocoran GitHub",
                desc: "Seringkali developer tidak sengaja mengupload 'API KEY' atau 'AWS Credential' ke repository publik.",
                steps: [
                    { id: 1, title: "Pencarian", desc: "Hacker mencari 'AWS_ACCESS_KEY' di GitHub target." },
                    { id: 2, title: "Temuan", desc: "Ditemukan file config.php yang berisi kredensial database." },
                    { id: 3, title: "Dampak", desc: "Hacker bisa login ke database tanpa perlu melakukan exploit apapun." }
                ]
            },
            practice: [
                { title: "Google Dorking", desc: "Cobalah cari file PDF di situs kampusmu dengan 'site:ac.id filetype:pdf'." },
                { title: "Whois Lookup", desc: "Cek siapa pemilik domain facebook.com menggunakan tool whois online." }
            ]
        }
    },
    4: {
        id: 4,
        title: "Scanning & Enumeration",
        subtitle: "Memetakan Jaringan & Layanan",
        description: "Mengidentifikasi port terbuka, layanan berjalan, dan sistem operasi target.",
        color: "orange",
        nextModule: 5,
        content: {
            intro: "Setelah tahu targetnya siapa (Recon), sekarang kita ketuk pintunya. Scanning mencari pintu yang terbuka (Port), Enumeration mengintip siapa yang ada di dalamnya (Service/Version).",
            analogy: [
                { title: "Scanning", desc: "Ibarat maling berjalan keliling rumah mengecek setiap jendela & pintu, mana yang tidak terkunci.", color: "orange" },
                { title: "Enumeration", desc: "Setelah masuk teras, maling melihat ada paket kiriman bertuliskan nama pemilik rumah & jenis alarm yang dipakai.", color: "yellow" }
            ],
            scanning: {
                types: [
                    { title: "TCP Connect", desc: "Koneksi penuh (3-way handshake). Paling akurat tapi berisik (tercatat log).", icon: "fa-plug" },
                    { title: "SYN Scan", desc: "Setengah koneksi (Stealth). Tidak menyelesaikan handshake. Lebih cepat & samar.", icon: "fa-ghost" },
                    { title: "UDP Scan", desc: "Scanning layanan UDP (DNS, SNMP). Lambat dan sering false-positive.", icon: "fa-paper-plane" }
                ],
                cheatsheet: [
                    { desc: "Quick Scan (100 port umum)", cmd: "nmap -F target.com" },
                    { desc: "Full Port Scan (1-65535)", cmd: "nmap -p- target.com" },
                    { desc: "Detect Version & OS", cmd: "nmap -sV -O target.com" },
                    { desc: "Script Scan (Vulnerability)", cmd: "nmap --script vuln target.com" }
                ]
            },
            enumeration: {
                desc: "Proses menggali detail lebih dalam dari layanan yang ditemukan.",
                table: [
                    { service: "SMB (445)", info: "Share folders, User list, Printer info.", tool: "Enum4linux" },
                    { service: "SNMP (161)", info: "Network map, Software installed, Device info.", tool: "Snmpwalk" },
                    { service: "SMTP (25)", info: "List valid user emails (VRFY commmand).", tool: "Smtp-user-enum" },
                    { service: "HTTP (80)", info: "Web server version, Directories (robots.txt).", tool: "Nikto / Gobuster" }
                ]
            },
            tutorial: {
                title: "Lab Mini: Nmap Basic",
                steps: [
                    { title: "Langkah 1", desc: "Jalankan Nmap untuk melihat port terbuka.", cmd: "nmap 192.168.1.10", output: "PORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http" },
                    { title: "Langkah 2", desc: "Cek versi aplikasinya (Service Version). Penting untuk mencari exploit yang cocok.", cmd: "nmap -sV 192.168.1.10", output: "PORT   VERSION\n22/tcp OpenSSH 7.2p2 (Vulnerable!)\n80/tcp Apache 2.4.18" }
                ]
            },
            ethics: [
                { title: "Jangan Scan Punya Orang!", desc: "Port scanning ke server orang lain tanpa izin bisa dianggap percobaan serangan (ilegal)." },
                { title: "Gunakan Lab Sendiri", desc: "Install Metasploitable atau DVWA di VirtualBox untuk latihan aman." }
            ]
        }
    },
    5: {
        id: 5,
        title: "Dasar Eksploitasi",
        subtitle: "Hacking the System",
        description: "Memanfaatkan kerentanan (vulnerability) untuk mendapatkan akses ilegal.",
        color: "teal",
        nextModule: 6,
        content: {
            title: "Exploitation Phase",
            desc: "Ini adalah momen 'Hacking' yang sebenarnya. Kita menggunakan 'Kunci Palsu' (Exploit) untuk membuka 'Pintu Rusak' (Vulnerability) dan mengirimkan 'Mata-mata' (Payload).",
            concepts: [
                { title: "Vulnerability", subtitle: "Si Pintu Rusak", desc: "Cacat pada kode program. Contoh: Buffer Overflow di Windows XP, SQL Injection di web login.", color: "red" },
                { title: "Exploit", subtitle: "Si Linggis", desc: "Script/Program khusus yang dibuat untuk memanipulasi vulnerability tersebut.", color: "orange" },
                { title: "Payload", subtitle: "Si Pasukan", desc: "Kode yang dijalankan SETELAH exploit berhasil. Contoh: Reverse Shell (konek balik ke hacker).", color: "green" },
                { title: "Listener", subtitle: "Si Penerima", desc: "Server hacker yang menunggu koneksi balik dari korban (Reverse Shell).", color: "blue" }
            ],
            cycle: [
                { id: 1, title: "Cari Vuln", desc: "Searchsploit / Google", tool: "Exploit-DB" },
                { id: 2, title: "Pilih Exploit", desc: "Sesuaikan versi target", tool: "Metasploit" },
                { id: 3, title: "Set Payload", desc: "Windows/Linux Meterpreter", tool: "Msfvenom" },
                { id: 4, title: "Eksekusi!", desc: "Dapatkan Shell Akses", tool: "Shell" }
            ],
            methodology: [
                { title: "Remote Exploit", desc: "Menyerang lewat jaringan (tanpa akses fisik).", icon: "fa-wifi", bg: "slate-900" },
                { title: "Local Exploit", desc: "Sudah punya akses user biasa, ingin jadi Admin (Root).", icon: "fa-laptop", bg: "slate-900" },
                { title: "Client-Side", desc: "Menipu user untuk membuka file jahat (PDF/Link).", icon: "fa-envelope-open-text", bg: "white" }
            ],
            tools: [
                { title: "Metasploit Framework", desc: "Wajib tahu! Framework exploit terlengkap di dunia. Point-and-click hacking.", icon: "msf" },
                { title: "Searchsploit", desc: "Versi offline dari Exploit-DB. Cari exploit via terminal.", icon: "db" }
            ],
            case: {
                title: "Simulasi: Metasploit vs Windows 7 (EternalBlue)",
                scenario: "MS17-010 (EternalBlue) adalah celah legendaris yang dipakai Ransomware WannaCry. Mari kita coba di Lab.",
                steps: [
                    { title: "Setup", cmd: "msfconsole\nuse exploit/windows/smb/ms17_010_eternalblue", output: "[*] Using configured payload windows/x64/meterpreter/reverse_tcp" },
                    { title: "Targeting", cmd: "set RHOSTS 192.168.1.50 (IP Korban)", output: "RHOSTS => 192.168.1.50" },
                    { title: "Fire!", cmd: "run", output: "[+] EternalBlue overwritten successfully\n[*] Sending stage (200262 bytes) to 192.168.1.50\n[*] Meterpreter session 1 opened" },
                    { title: "Victory", cmd: "sysinfo", output: "Computer: WIN-7-PC\nOS: Windows 7 (Build 7601, SP1)\nSystem Language: en_US" }
                ]
            }
        }
    },
    6: {
        id: 6,
        title: "OSI Fundamentals",
        subtitle: "Konsep Jaringan Wajib Hacker",
        description: "Tanpa paham jaringan, Anda hanya 'Script Kiddie'. Pahami bagaimana data mengalir.",
        color: "rose",
        nextModule: 7,
        content: {
            intro: "Hampir semua serangan siber terjadi di jaringan. Model OSI membagi komunikasi jaringan menjadi 7 lapisan logis. Hacker harus tahu di lapisan mana serangan bekerja.",
            layers: [
                {
                    name: "Layer 7: Application", badge: "Human Interface", icon: "fa-globe", color: "purple",
                    desc: "Lapisan yang berinteraksi langsung dengan user (Browser, Email). Data sudah terlihat jelas.",
                    vectors: [{ title: "HTTP Attacks", desc: "SQL Injection, XSS, CSRF." }, { title: "DNS Poisoning", desc: "Memalsukan alamat website." }],
                    mitigations: [{ title: "WAF (Web App Firewall)", desc: "Filter traffic HTTP jahat." }, { title: "Input Validation", desc: "Cegah injeksi kode." }]
                },
                {
                    name: "Layer 4: Transport", badge: "TCP/UDP Ports", icon: "fa-network-wired", color: "pink",
                    desc: "Mengurus pengiriman data (Reliable/TCP vs Fast/UDP). Di sini 'Port' hidup.",
                    vectors: [{ title: "SYN Flood (DoS)", desc: "Membanjiri server dengan request koneksi palsu." }, { title: "Port Scanning", desc: "Mencari port terbuka." }],
                    mitigations: [{ title: "Firewall", desc: "Blokir port yang tidak perlu." }, { title: "Rate Limiting", desc: "Batasi jumlah koneksi per detik." }]
                },
                {
                    name: "Layer 3: Network", badge: "IP Address", icon: "fa-route", color: "indigo",
                    desc: "Mengurus alamat dan rute (Routing). IP Address ada di sini.",
                    vectors: [{ title: "IP Spoofing", desc: "Memalsukan IP pengirim." }, { title: "Ping of Death", desc: "Paket Ping abnormal untuk crash sistem." }],
                    mitigations: [{ title: "Packet Filtering", desc: "Filter IP Blacklist." }, { title: "VPN", desc: "Enkripsi tunnel antar jaringan." }]
                },
                {
                    name: "Layer 2: Data Link", badge: "MAC Address", icon: "fa-ethernet", color: "cyan",
                    desc: "Komunikasi fisik antar device dalam satu jaringan lokal (LAN/Switch).",
                    vectors: [{ title: "ARP Spoofing (MitM)", desc: "Menipu device agar data dikirim ke hacker, bukan router." }, { title: "MAC Flooding", desc: "Membanjiri Switch table." }],
                    mitigations: [{ title: "Port Security", desc: "Batasi MAC Address per port switch." }, { title: "DAI", desc: "Dynamic ARP Inspection." }]
                },
                {
                    name: "Layer 1: Physical", badge: "Cables & Wifi", icon: "fa-wifi", color: "emerald",
                    desc: "Fisik kabel, sinyal radio, fiber optik. ",
                    vectors: [{ title: "Wiretapping", desc: "Menyadap kabel fisik." }, { title: "Jamming", desc: "Mengganggu sinyal WiFi." }],
                    mitigations: [{ title: "Access Control", desc: "Kunci ruang server." }, { title: "Faraday Cage", desc: "Blokir sinyal keluar." }]
                }
            ]
        }
    },
    7: {
        id: 7,
        title: "Web Hacking 101: Injection",
        subtitle: "OWASP Top 10 - Critical Attacks",
        description: "Serangan paling umum dan mematikan. Memaksa aplikasi mengeksekusi kode jahat.",
        color: "indigo",
        nextModule: 8,
        content: {
            title: "Dunia Injeksi",
            intro: "Konsepnya sederhana: Aplikasi percaya buta pada input user. Hacker menyisipkan 'Perintah' di dalam 'Data'. Hasilnya? Aplikasi menuruti perintah hacker.",
            sections: [
                {
                    type: "sqli", title: "SQL Injection (SQLi)", icon: "fa-database", layer: "Layer 7",
                    desc: "Memanipulasi query database via input form. Bisa dump seluruh database, bypass login, bahkan hapus data.",
                    labs: [{ title: "Login Bypass", desc: "' OR 1=1 --" }, { title: "UNION Attack", desc: "Menggabungkan hasil query lain." }],
                    mitigations: [{ title: "Prepared Statements", desc: "Pisahkan data dan query." }, { title: "Input Validation", desc: "Whitelist karakter yang boleh masuk." }]
                },
                {
                    type: "xxe", title: "XML External Entity (XXE)", icon: "fa-file-code", layer: "Layer 7", color: "orange",
                    desc: "Menyerang parser XML yang salah konfigurasi. Bisa baca file sistem (/etc/passwd) atau scan jaringan internal.",
                    code: "<?xml...><!ENTITY xxe SYSTEM 'file:///etc/passwd'>",
                    redView: { intro: "Sering ditemukan di fitur upload Excel/SVG atau SOAP API.", targets: ["Config Files", "Source Code", "Internal Ports"], goal: "Data Exfiltration / SSRF" },
                    blueView: { intro: "XML parser lama sering mengaktifkan DTD secara default.", prevent: ["Disable External Entities (DTD) di parser."], tip: "Gunakan format JSON jika memungkinkan." }
                },
                {
                    type: "cmd", title: "OS Command Injection", icon: "fa-terminal", layer: "Layer 7", color: "red",
                    desc: "Paling kritis! Input user langsung masuk ke shell sistem operasi. Hacker bisa ambil alih server penuh.",
                    code: "ping_target.php?ip=127.0.0.1; cat /etc/shadow",
                    redView: { intro: "Cari fitur yang memanggil ping, curl, atau exec system bin.", targets: ["Full Server Takeover (RCE)"], goal: "Root Access" },
                    blueView: { intro: "Jangan pernah gunakan fungsi exec() dengan input user mentah.", prevent: ["Gunakan API library bahasa pemrograman", "Hindari shell_exec / system()"], tip: "Input harus sangat ketat (Whitelist IP only)." },
                    labs: [{ title: "Command Chaining", desc: "Gunakan ; | && untuk menambah perintah." }]
                }
            ],
            perspectives: {
                sqli: {
                    red: { title: "Red Team View", intro: "SQLi adalah 'Low Hanging Fruit'. Mudah dites otomatis.", targets: ["User Passwords (Hashes)", "Customer Data (PII)", "Admin Access"], signals: ["Error SQL Syntax di page", "Waktu loading lama (Blind SQLi)"], goal: "Dump Database" },
                    blue: { title: "Blue Team View", intro: "SQLi sangat berisik di log jika tidak hati-hati.", prevent: ["WAF Rules", "Parameterizing Queries (Wajib!)"], contain: ["Monitor Error Logs (SQL Syntax Error)"], goal: "Block Malicious Payload" },
                    detect: { title: "Detection", intro: "Pola serangan SQLi sangat khas.", signals: ["Karakter aneh di URL: ' -- ; UNION", "Banyak error 500 berturut-turut"], response: ["Block IP penyerang", "Fix kode vulnerable segera"] }
                }
            }
        }
    },
    8: {
        id: 8,
        title: "Broken Access Control",
        subtitle: "Logic & Privilege Attacks",
        description: "Bagaimana hacker mengakses data yang seharusnya terlarang bagi mereka.",
        color: "emerald",
        nextModule: 9,
        content: {
            title: "Access Control Flaws",
            intro: "Access Control adalah dinding yang memisahkan user biasa dari data Admin. Jika dinding ini retak, hacker bisa menjadi siapa saja.",
            sections: [
                {
                    title: "IDOR (Insecure Direct Object Reference)", icon: "fa-id-card", desc: "Mengakses data user lain hanya dengan mengganti ID di URL.",
                    labs: [{ title: "Laboratorium 1", desc: "Ubah /api/user/10 menjadi /api/user/11 untuk melihat data tetangga." }],
                    mitigations: [{ title: "Object Level Auth", desc: "Cek kepemilikan data di backend sebelum memberikan akses." }]
                },
                {
                    title: "Privilege Escalation", icon: "fa-arrow-up", desc: "User biasa mendapatkan hak akses Admin (Horizontal vs Vertical).",
                    labs: [{ title: "Parameter Tampering", desc: "Ubah field 'is_admin: false' menjadi 'true' saat registrasi." }],
                    mitigations: [{ title: "Least Privilege", desc: "Berikan akses seminimal mungkin kepada user." }]
                }
            ]
        }
    },
    9: {
        id: 9,
        title: "XSS & Client-Side",
        subtitle: "Hacking the User Browser",
        description: "Menyerang pengunjung website melalui kode JavaScript yang disuntikkan.",
        color: "amber",
        nextModule: 10,
        content: {
            isGeneric: true,
            intro: "Client-side attacks tidak menyerang server secara langsung, tapi menggunakan server sebagai perantara untuk menyerang user lain.",
            sections: [
                { title: "Stored XSS", icon: "fa-comment-alt", desc: "Script jahat disimpan di database (misal: Komentar) dan dieksekusi setiap ada yang melihat.", color: "red" },
                { title: "Reflected XSS", icon: "fa-search", desc: "Script tidak disimpan, tapi dipantulkan via URL (misal: Fitur Search).", color: "orange" },
                { title: "DOM XSS", icon: "fa-code", desc: "Serangan terjadi sepenuhnya di sisi browser melalui manipulasi DOM.", color: "yellow" }
            ],
            tools: [
                { title: "Beef Framework", desc: "Browser Exploitation Framework untuk mengontrol browser korban.", cmd: "beef-xss" },
                { title: "XSS Hunter", desc: "Layanan untuk menemukan blind XSS secara otomatis.", cmd: "Browser: xsshunter.com" }
            ]
        }
    },
    10: {
        id: 10,
        title: "Cryptography: Weak Spots",
        subtitle: "Breaking the Code",
        description: "Mengapa enkripsi yang kuat bisa gagal total karena implementasi yang salah.",
        color: "violet",
        nextModule: 11,
        content: {
            isGeneric: true,
            intro: "Kriptografi adalah jantung keamanan. Tapi tanpa manajemen kunci yang benar, ia hanyalah kertas tipis.",
            sections: [
                { title: "Insecure Storage", icon: "fa-key", desc: "Menyimpan password dalam bentuk teks biasa (Plaintext) atau encoding lemah (Base64).", list: ["Hash dengan Salt", "Gunakan Argon2 / Bcrypt"] },
                { title: "Weak Algorithms", icon: "fa-unlock", desc: "Masih menggunakan MD5 atau SHA1 yang sudah mudah ditembus.", list: ["Gunakan SHA-256", "Hindari algoritma deprecated"] }
            ]
        }
    },
    11: {
        id: 11,
        title: "Social Engineering 2.0",
        subtitle: "Hacking the Human",
        description: "Karena manusia adalah mata rantai terlemah dalam keamanan siber.",
        color: "rose",
        nextModule: 12,
        content: {
            isGeneric: true,
            intro: "Mengapa meretas server berbulan-bulan jika Anda bisa mendapatkan password hanya dengan satu telepon?",
            sections: [
                { title: "Phishing", icon: "fa-fish", desc: "Email palsu yang terlihat sangat resmi (Apple, Bank, Kantor).", list: ["Check sender email", "Inspect links before click"] },
                { title: "Pretexting", icon: "fa-user-tie", desc: "Membuat skenario palsu (Pura-pura jadi tim IT) untuk menggali informasi.", list: ["Verify identity", "Never share OTP"] }
            ]
        }
    },
    12: {
        id: 12,
        title: "Cloud & Mobile Security",
        subtitle: "The New Frontier",
        description: "Tantangan keamanan di era Serverless, AWS, dan perangkat mobile.",
        color: "orange",
        nextModule: 13,
        content: {
            isGeneric: true,
            intro: "Dulu kita menjaga 'Server' fisik. Sekarang kita menjaga 'Configuration'.",
            sections: [
                { title: "S3 Bucket Exposure", icon: "fa-cloud", desc: "Salah konfigurasi Cloud yang membuat data publik bisa diakses siapa saja.", list: ["Check permissions", "Enable Encryption"] },
                { title: "Mobile Malware", icon: "fa-mobile-alt", desc: "Aplikasi Android/iOS palsu yang mencuri SMS OTP.", list: ["Only download from Playstore", "Check app permissions"] }
            ]
        }
    },
    13: {
        id: 13,
        title: "The Endgame: Red vs Blue",
        subtitle: "Hacker vs Defender Operations",
        description: "Menyatukan semua ilmu: Merancang serangan (Red) dan membangun pertahanan (Blue).",
        color: "fuchsia",
        nextModule: null,
        content: {
            isGeneric: true,
            intro: "Dunia keamanan siber adalah permainan kucing-kucingan yang abadi (Cat and Mouse Game). Memahami kedua sisi adalah kunci menjadi profesional yang utuh.",
            sections: [
                {
                    title: "Red Team Operations (Offense)",
                    desc: "Simulasi musuh sungguhan. Tidak hanya mencari 'bug', tapi mencoba mencapai 'Objective' (misal: Curi Database Karyawan).",
                    icon: "fa-user-ninja",
                    redView: { intro: "Mindset: 'Try Harder'. Jika pintu terkunci, coba jendela. Jika jendela terkunci, tipu penjaga.", targets: ["People (Social Eng)", "Process (Business Logic)", "Technology (Exploits)"], goal: "Menguji respon Blue Team dan efektifitas kontrol keamanan." },
                    labs: [
                        { title: "Kill Chain Design", desc: "Rancang skenario serangan dari Recon hingga Exfiltration." },
                        { title: "C2 Setup", desc: "Deploy Command & Control server sederhana." }
                    ]
                },
                {
                    title: "Blue Team Operations (Defense)",
                    desc: "Deteksi, Respon, dan Mitigasi. Menjaga benteng agar tetap kokoh.",
                    icon: "fa-user-shield",
                    blueView: { intro: "Mindset: 'Assume Breach'. Anggap hacker sudah masuk, cari di mana mereka bersembunyi.", prevent: ["SIEM Monitoring", "Incident Response Plan"], tip: "Log segalanya, analisa yang penting." },
                    labs: [
                        { title: "Log Analysis", desc: "Cari jejak serangan brute-force di log SSH." },
                        { title: "Hardening", desc: "Amankan server Linux yang baru di-install." }
                    ]
                }
            ],
            tools: [
                { title: "Wazuh / Splunk", desc: "SIEM (Security Information and Event Management) untuk Blue Team.", cmd: "Agent based monitoring" },
                { title: "Cobalt Strike / Sliver", desc: "C2 Framework canggih untuk simulasi Red Team operation.", cmd: "Team Server" },
                { title: "MITRE ATT&CK", desc: "Knowledge base taktik dan teknik serangan siber. Kamus wajib Red & Blue Team." }
            ],
            practice: [
                { title: "Log Analysis", desc: "Analisa log Apache/Nginx untuk menemukan jejak serangan SQL Injection atau Directory Traversal." },
                { title: "Tabletop Exercise", desc: "Simulasi diskusi: 'Apa yang kita lakukan jika Ransomware menyerang server HRD sekarang?'" }
            ]
        }
    }
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
                        <span>Kembali ke Dashboard</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${data.color}-500/10 border border-${data.color}-500/20 text-${data.color}-400 text-xs font-mono font-bold mb-6`}>
                        MODUL {data.id}
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
                            <h2 className="text-2xl font-bold text-white mb-4">Pengantar</h2>
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
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">Istilah Kunci</h2>
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
                            <h2 className="text-2xl font-bold text-white text-center">Klasifikasi "Topi" (Hats)</h2>
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
                                    <h2 className="text-2xl font-bold text-white mb-6">Etika & Legalitas</h2>
                                    <p className="text-slate-400 mb-6 text-sm">Tanpa izin, hacking adalah kriminal (UU ITE). Dokumen wajib:</p>
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
                                    <h2 className="text-2xl font-bold text-white mb-6">Jenjang Karir</h2>
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
                            <h2 className="text-2xl font-bold text-white text-center">Metodologi (Siklus Hacking)</h2>
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
                            <h2 className="text-2xl font-bold text-white mb-8">Studi Kasus Nyata</h2>
                            <div className="space-y-4">
                                {data.content.cases?.map((cs: any, idx: number) => (
                                    <details key={idx} className="group bg-dark-bg rounded-xl border border-white/5" open={idx === 0}>
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-white hover:bg-slate-800 transition-colors">
                                            <span>{cs.title}</span><i className="fas fa-chevron-down group-open:rotate-180 transition-transform"></i>
                                        </summary>
                                        <div className="p-6 pt-0 text-slate-400 text-sm border-t border-dark-border mt-2">
                                            <div className="grid md:grid-cols-3 gap-6 mt-4">
                                                <div>
                                                    <strong className="text-brand-500 block mb-1">Skenario:</strong>
                                                    {cs.scenario}
                                                </div>
                                                <div>
                                                    <strong className="text-red-500 block mb-1">Risiko:</strong>
                                                    {cs.risk}
                                                </div>
                                                <div>
                                                    <strong className="text-emerald-500 block mb-1">Solusi:</strong>
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
                            <h2 className="text-2xl font-bold text-white mb-4">Pengantar</h2>
                            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{data.content.intro}</p>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Standar Industri</h2>
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
                            <h2 className="text-3xl font-bold text-white text-center">7 Tahapan (PTES)</h2>
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
                                            <strong className="block text-sm mb-1 font-bold">Langkah Remediasi (Fix)</strong>
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
                            <h2 className="text-2xl font-bold text-white mb-6">Apa itu Reconnaissance?</h2>
                            <p className="text-slate-300 leading-relaxed mb-6">{data.content.intro?.desc}</p>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-dark-bg rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2"><i className="fas fa-check-circle text-emerald-400 mr-2"></i>Tujuan</h4>
                                    <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">{data.content.intro?.goal?.map((g: string, i: number) => <li key={i}>{g}</li>)}</ul>
                                </div>
                                <div className="p-4 bg-dark-bg rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2"><i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>Penting</h4>
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

                                    <div className={`text-xs font-bold px-3 py-1 rounded inline-block mb-4 self-start ${method.risk?.includes('RENDAH') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {method.risk}
                                    </div>

                                    <div className="bg-black/30 p-4 rounded-lg space-y-1 mt-auto">
                                        <p className="text-xs text-slate-500 mb-1 font-bold">CONTOH:</p>
                                        {method.items?.map((item: string, i: number) => <p key={i} className={`text-xs font-mono text-${method.color}-400`}>• {item}</p>)}
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Alat Tempur (Tools)</h2>
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
                                    <i className="fas fa-laptop-code text-indigo-400"></i> Latihan Praktis
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
                                    <p>Ingat: Gunakan skill ini secara etis. Jangan memindai (scan) sistem tanpa izin tertulis.</p>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 4 RENDERER */}
                {data.id === 4 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Pengantar</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">{data.content.intro}</p>

                            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">Analogi Sederhana ("Satpam")</h3>
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
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">Tahap 1: Scanning</h2>
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
                            <h2 className="text-2xl font-bold text-white mb-2">Tahap 2: Enumeration</h2>
                            <p className="text-slate-400 text-sm mb-6">{data.content.enumeration?.desc}</p>
                            <div className="overflow-x-auto rounded-lg border border-white/5">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-900/50">
                                        <tr className="text-slate-400 border-b border-dark-border">
                                            <th className="p-4">Layanan</th>
                                            <th className="p-4">Info yang Dicari</th>
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
                                <h2 className="text-2xl font-bold text-red-100 mb-2"><i className="fas fa-gavel mr-2"></i>Etika & Legalitas</h2>
                                <p className="text-red-200/60 text-sm">Melakukan scanning tanpa izin dapat melanggar hukum.</p>
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
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-4">Konsep Dasar & Analogi</h2>
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
                            <h2 className="text-2xl font-bold text-white text-center">Siklus Penetrasi</h2>
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
                            <h2 className="text-3xl font-bold text-white text-center mb-6">Metodologi</h2>
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
                            <h2 className="text-2xl font-bold text-white mb-6">Alat Tempur (Tools)</h2>
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
                {data.id === 6 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Apa itu Malware?</h2>
                            <p className="text-slate-300 leading-relaxed">{data.content.intro}</p>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.content.types?.map((type: any, idx: number) => (
                                <div key={idx} className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-red-500/30 transition-all text-center group">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform">
                                        <i className={`fas ${type.icon} text-xl`}></i>
                                    </div>
                                    <h4 className="font-bold text-white mb-2">{type.title}</h4>
                                    <p className="text-xs text-slate-500">{type.desc}</p>
                                </div>
                            ))}
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4">Cara Kerja (Infection Cycle)</h2>
                            <div className="space-y-4">
                                {data.content.cycle?.map((step: any, idx: number) => (
                                    <div key={idx} className="flex gap-6 items-center p-4 bg-dark-bg/50 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold flex-shrink-0 border border-red-500/20">{step.id}</div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{step.title}</h4>
                                            <p className="text-slate-400 text-xs">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white">Analisis Malware Praktis</h2>
                                <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs px-3 py-1 rounded-full"><i className="fas fa-microscope mr-2"></i>Lab Simulation</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-white flex items-center gap-2 text-sm"><i className="fas fa-search text-brand-500"></i> Langkah Analisis:</h3>
                                    {data.content.analysis?.steps?.map((step: any, idx: number) => (
                                        <div key={idx} className="p-4 bg-dark-bg rounded-lg border border-white/5 flex gap-3">
                                            <span className="text-brand-500 font-bold">{idx + 1}.</span>
                                            <div>
                                                <h4 className="text-white text-xs font-bold mb-1">{step.title}</h4>
                                                <p className="text-slate-500 text-[10px]">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-black/80 rounded-xl p-6 font-mono text-xs border border-slate-800">
                                    <p className="text-slate-500 mb-4 font-bold border-b border-slate-800 pb-2">VIRUSTOTAL-SCAN-RESULT.LOG</p>
                                    <div className="space-y-2">
                                        <p className="text-slate-400">File: "invoice_detail.exe.js"</p>
                                        <p className="text-red-400">Status: MALICIOUS (45/62 Engines)</p>
                                        <p className="text-slate-400 italic">Signature: Win32.Trojan.Agent.DXX</p>
                                        <div className="h-px bg-slate-800 my-4"></div>
                                        <p className="text-brand-500">Behavior Analysis:</p>
                                        <p className="text-slate-500">• Modifies: HKEY_CURRENT_USER\Software\Microsoft\Windows\Run</p>
                                        <p className="text-slate-500">• Connects: 185.244.25.12 (Moscow, RU)</p>
                                        <p className="text-slate-500">• Drops: sys32_patcher.exe</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* MODULE 7 RENDERER */}
                {data.id === 7 && (
                    <>
                        <section className="bg-dark-card rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Pengantar</h2>
                            <p className="text-slate-300 leading-relaxed">{data.content.intro}</p>
                        </section>

                        <section className="space-y-12">
                            <h2 className="text-3xl font-bold text-white text-center">Serangan Jaringan (Network)</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {data.content.networkAttacks?.map((atk: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all flex flex-col h-full">
                                        <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4 shadow-lg"><i className={`fas ${atk.icon} text-xl`}></i></div>
                                        <h3 className="text-lg font-bold text-white mb-2">{atk.title}</h3>
                                        <p className="text-slate-400 text-xs mb-4 flex-grow italic">{atk.desc}</p>
                                        <div className="bg-black/40 p-3 rounded-lg border border-slate-700/50">
                                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-wider">Metode Serangan:</p>
                                            <p className="text-xs text-orange-300 font-mono">{atk.method}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden group">
                                <i className="fas fa-microchip absolute -right-4 -bottom-4 text-8xl text-orange-500/5 group-hover:rotate-12 transition-transform"></i>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><i className="fas fa-shield-virus text-orange-500"></i> Lab: Man-in-the-Middle</h3>
                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-4">
                                        {data.content.mitmLab?.steps?.map((step: any, idx: number) => (
                                            <div key={idx} className="flex gap-4 p-4 bg-dark-bg/80 rounded-xl border border-white/5">
                                                <span className="w-6 h-6 bg-orange-500/20 text-orange-400 flex items-center justify-center rounded-full text-xs font-bold border border-orange-500/20 flex-shrink-0">{idx + 1}</span>
                                                <p className="text-xs text-slate-400">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-black/90 rounded-xl border border-slate-700 p-5 font-mono text-[10px] md:text-xs">
                                        <div className="flex gap-1.5 mb-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-orange-400">$ ettercap -T -q -i eth0 -M arp /192.168.1.1/ /192.168.1.5/</p>
                                                <p className="text-slate-500 italic mt-1"># Victims: .1 (Router) & .5 (User)</p>
                                            </div>
                                            <div className="border-t border-slate-800 pt-4">
                                                <p className="text-emerald-400">SNIFFING DATA...</p>
                                                <p className="text-slate-400 mt-1">[POST] http://bank-rakyat.com/login</p>
                                                <p className="text-slate-300 font-bold ml-4">user=nasabah01&pass=rahasia123</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-12 pt-8">
                            <h2 className="text-3xl font-bold text-white text-center">Serangan Web (OWASP Top 10)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.content.webAttacks?.map((atk: any, idx: number) => (
                                    <div key={idx} className="bg-dark-card rounded-2xl border border-white/5 p-8 hover:bg-slate-800/40 transition-all">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                                <span className="text-brand-500 text-2xl font-black">#0{idx + 1}</span>
                                                {atk.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${atk.risk === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}>{atk.risk}</span>
                                        </div>
                                        <p className="text-sm text-slate-400 mb-6">{atk.desc}</p>
                                        <div className="bg-dark-bg p-5 rounded-xl border border-white/5 space-y-4">
                                            <div>
                                                <p className="text-xs text-brand-500 font-bold uppercase mb-2">Payload Contoh:</p>
                                                <code className="text-xs bg-black p-2 rounded block border border-slate-800 text-slate-300">
                                                    {atk.payload}
                                                </code>
                                            </div>
                                            <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                                                <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Pencegahan:</p>
                                                <p className="text-[11px] text-emerald-200/60 leading-relaxed">{atk.prev}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
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
                        <p className="text-slate-400">Gunakan payload ini pada input form yang tersedia di lab praktikum Anda.</p>
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
                                <span>Modul Sebelumnya</span>
                            </Link>
                        )}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500 font-bold text-sm border border-white/5">
                                {data.id}
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">Status</p>
                                <p className="text-white font-bold text-sm leading-none">Modul Selesai</p>
                            </div>
                        </div>
                    </div>

                    {data.nextModule ? (
                        <Link
                            href={`/ethical-hacking/modules/${data.nextModule}`}
                            className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center group"
                        >
                            Lanjut ke Modul {data.nextModule}
                            <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    ) : (
                        <Link
                            href="/ethical-hacking"
                            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center group"
                        >
                            Selesaikan Kursus <i className="fas fa-check-double ml-3 group-hover:scale-110 transition-transform"></i>
                        </Link>
                    )}
                </div>
            </main>


        </div>
    );
}


