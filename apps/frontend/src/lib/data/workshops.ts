import { WorkshopModule } from '@frontend/lib/types';
import { Bilingual } from '@frontend/i18n/LanguageProvider';
import { commonHints } from './hints';
import {
  User, Type, Star, MousePointer, Menu,
  BarChart3, Bell, Layout, List, Table, PenTool
} from 'lucide-react';

/**
 * Workshop Modules Data
 * 11 hands-on coding exercises. Bootstrap classes stay identical across
 * languages; only titles, descriptions, challenges and the demo copy change.
 */
export const workshopModules: Bilingual<WorkshopModule[]> = {
  en: [
    {
      id: 1,
      templateId: 'header_avatar',
      title: "1. Avatar & Photo",
      icon: User,
      desc: "Create a circular profile photo with a border.",
      initialCode: `<div class="text-center p-4">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="rounded-circle shadow-lg" width="150">
</div>`,
      hints: [commonHints.en.shapes],
      challenge: "Change to square (remove rounded-circle) or add a border."
    },
    {
      id: 2,
      templateId: 'header_text',
      title: "2. Name Text",
      icon: Type,
      desc: "Style the user's name text.",
      initialCode: `<div class="text-center">
  <h1 class="fw-bold text-primary">John Doe</h1>
  <p class="text-muted text-uppercase">Web Developer</p>
</div>`,
      hints: [commonHints.en.colors],
      challenge: "Change the name color and make the job title italic (fst-italic)."
    },
    {
      id: 3,
      templateId: 'skills',
      title: "3. Skill Badges",
      icon: Star,
      desc: "Colorful skill labels.",
      initialCode: `<div class="text-center mt-3">
  <h5>Expertise:</h5>
  <div class="d-flex justify-content-center gap-2">
    <span class="badge bg-primary">HTML</span>
    <span class="badge bg-dark">CSS</span>
    <span class="badge bg-success">JS</span>
  </div>
</div>`,
      hints: [commonHints.en.colors],
      challenge: "Change badge colors and add the 'rounded-pill' class."
    },
    {
      id: 4,
      templateId: 'actions',
      title: "4. Action Buttons",
      icon: MousePointer,
      desc: "Action buttons with links.",
      initialCode: `<div class="d-flex justify-content-center gap-2 mt-4">
  <a href="#" class="btn btn-dark">GitHub</a>
  <a href="#" class="btn btn-outline-primary">LinkedIn</a>
</div>`,
      hints: [commonHints.en.colors, commonHints.en.shapes],
      challenge: "Change the LinkedIn button to solid blue (btn-primary)."
    },
    {
      id: 5,
      templateId: 'navbar',
      title: "5. Navbar",
      icon: Menu,
      desc: "Top navigation menu.",
      initialCode: `<div class="d-flex justify-content-between align-items-center p-3 mb-4 bg-white shadow-sm rounded-3">
  <span class="fw-bold text-primary">MyPortfolio</span>
  <nav class="d-flex gap-3">
    <a href="#" class="text-decoration-none text-dark">Home</a>
    <a href="#" class="text-decoration-none text-muted">Work</a>
  </nav>
</div>`,
      hints: [commonHints.en.layout],
      challenge: "Change background to dark (bg-dark) and text to white."
    },
    {
      id: 6,
      templateId: 'progress',
      title: "6. Progress Bar",
      icon: BarChart3,
      desc: "Skill visualization.",
      initialCode: `<div class="mb-3 p-3 bg-light rounded">
  <div class="d-flex justify-content-between mb-1"><span>Coding</span><span>80%</span></div>
  <div class="progress"><div class="progress-bar bg-success" style="width: 80%"></div></div>
</div>`,
      hints: [commonHints.en.colors],
      challenge: "Change color to orange (bg-warning) and width to 50%."
    },
    {
      id: 7,
      templateId: 'alert',
      title: "7. Alert Message",
      icon: Bell,
      desc: "Notification alert box.",
      initialCode: `<div class="alert alert-info shadow-sm text-center">
  <strong>Open to Work!</strong> Ready to accept projects.
</div>`,
      hints: [commonHints.en.colors],
      challenge: "Change to a danger alert (alert-danger)."
    },
    {
      id: 8,
      templateId: 'card_container',
      title: "8. Content Card",
      icon: Layout,
      desc: "Main container for profile info.",
      initialCode: `<div class="card border-0 shadow-lg mt-3">
  <div class="card-body p-4 text-center">
    <h5 class="text-muted">Main Content Area</h5>
    <p class="small">Full profile details will go here.</p>
  </div>
</div>`,
      hints: [commonHints.en.shapes],
      challenge: "Change background to light gray (bg-light)."
    },
    {
      id: 9,
      templateId: 'list_group',
      title: "9. List Group",
      icon: List,
      desc: "Vertical item list.",
      initialCode: `<ul class="list-group shadow-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
      hints: [commonHints.en.shapes, commonHints.en.components],
      challenge: "Make the list items dark (bg-dark text-white)."
    },
    {
      id: 10,
      templateId: 'simple_table',
      title: "10. Data Table",
      icon: Table,
      desc: "Table with rows and columns.",
      initialCode: `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Name</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Alice</td><td>Admin</td></tr>
    <tr><td>2</td><td>Bob</td><td>User</td></tr>
  </tbody>
</table>`,
      hints: [commonHints.en.layout, commonHints.en.components],
      challenge: "Remove table borders (remove table-bordered)."
    },
    {
      id: 11,
      templateId: 'form_input',
      title: "11. Form Input",
      icon: PenTool,
      desc: "Interactive user input.",
      initialCode: `<div class="mb-3 text-start">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="name@example.com">
  <button class="btn btn-primary mt-2">Subscribe</button>
</div>`,
      hints: [commonHints.en.colors, commonHints.en.shapes, commonHints.en.components],
      challenge: "Change button text to 'Register Now' and color to green."
    }
  ],
  id: [
    {
      id: 1,
      templateId: 'header_avatar',
      title: "1. Avatar & Foto",
      icon: User,
      desc: "Membuat foto profil bulat dengan garis tepi.",
      initialCode: `<div class="text-center p-4">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="rounded-circle shadow-lg" width="150">
</div>`,
      hints: [commonHints.id.shapes],
      challenge: "Ubah jadi kotak (hapus rounded-circle) atau tambahkan garis tepi."
    },
    {
      id: 2,
      templateId: 'header_text',
      title: "2. Teks Nama",
      icon: Type,
      desc: "Menata teks nama pengguna.",
      initialCode: `<div class="text-center">
  <h1 class="fw-bold text-primary">John Doe</h1>
  <p class="text-muted text-uppercase">Web Developer</p>
</div>`,
      hints: [commonHints.id.colors],
      challenge: "Ubah warna nama dan buat jabatannya miring (fst-italic)."
    },
    {
      id: 3,
      templateId: 'skills',
      title: "3. Badge Keahlian",
      icon: Star,
      desc: "Label keahlian yang berwarna-warni.",
      initialCode: `<div class="text-center mt-3">
  <h5>Keahlian:</h5>
  <div class="d-flex justify-content-center gap-2">
    <span class="badge bg-primary">HTML</span>
    <span class="badge bg-dark">CSS</span>
    <span class="badge bg-success">JS</span>
  </div>
</div>`,
      hints: [commonHints.id.colors],
      challenge: "Ubah warna badge dan tambahkan class 'rounded-pill'."
    },
    {
      id: 4,
      templateId: 'actions',
      title: "4. Tombol Aksi",
      icon: MousePointer,
      desc: "Tombol aksi yang berisi link.",
      initialCode: `<div class="d-flex justify-content-center gap-2 mt-4">
  <a href="#" class="btn btn-dark">GitHub</a>
  <a href="#" class="btn btn-outline-primary">LinkedIn</a>
</div>`,
      hints: [commonHints.id.colors, commonHints.id.shapes],
      challenge: "Ubah tombol LinkedIn jadi biru penuh (btn-primary)."
    },
    {
      id: 5,
      templateId: 'navbar',
      title: "5. Navbar",
      icon: Menu,
      desc: "Menu navigasi di bagian atas.",
      initialCode: `<div class="d-flex justify-content-between align-items-center p-3 mb-4 bg-white shadow-sm rounded-3">
  <span class="fw-bold text-primary">PortofolioSaya</span>
  <nav class="d-flex gap-3">
    <a href="#" class="text-decoration-none text-dark">Beranda</a>
    <a href="#" class="text-decoration-none text-muted">Karya</a>
  </nav>
</div>`,
      hints: [commonHints.id.layout],
      challenge: "Ubah latar jadi gelap (bg-dark) dan teksnya jadi putih."
    },
    {
      id: 6,
      templateId: 'progress',
      title: "6. Progress Bar",
      icon: BarChart3,
      desc: "Visualisasi tingkat keahlian.",
      initialCode: `<div class="mb-3 p-3 bg-light rounded">
  <div class="d-flex justify-content-between mb-1"><span>Coding</span><span>80%</span></div>
  <div class="progress"><div class="progress-bar bg-success" style="width: 80%"></div></div>
</div>`,
      hints: [commonHints.id.colors],
      challenge: "Ubah warnanya jadi oranye (bg-warning) dan lebarnya jadi 50%."
    },
    {
      id: 7,
      templateId: 'alert',
      title: "7. Pesan Alert",
      icon: Bell,
      desc: "Kotak notifikasi.",
      initialCode: `<div class="alert alert-info shadow-sm text-center">
  <strong>Terbuka untuk Kerja!</strong> Siap menerima proyek.
</div>`,
      hints: [commonHints.id.colors],
      challenge: "Ubah jadi alert bahaya (alert-danger)."
    },
    {
      id: 8,
      templateId: 'card_container',
      title: "8. Kartu Konten",
      icon: Layout,
      desc: "Wadah utama untuk info profil.",
      initialCode: `<div class="card border-0 shadow-lg mt-3">
  <div class="card-body p-4 text-center">
    <h5 class="text-muted">Area Konten Utama</h5>
    <p class="small">Detail lengkap profil akan ditaruh di sini.</p>
  </div>
</div>`,
      hints: [commonHints.id.shapes],
      challenge: "Ubah latar jadi abu-abu muda (bg-light)."
    },
    {
      id: 9,
      templateId: 'list_group',
      title: "9. Grup Daftar",
      icon: List,
      desc: "Daftar item yang tersusun vertikal.",
      initialCode: `<ul class="list-group shadow-sm">
  <li class="list-group-item">Item pertama</li>
  <li class="list-group-item">Item kedua</li>
  <li class="list-group-item">Item ketiga</li>
</ul>`,
      hints: [commonHints.id.shapes, commonHints.id.components],
      challenge: "Buat item daftarnya gelap (bg-dark text-white)."
    },
    {
      id: 10,
      templateId: 'simple_table',
      title: "10. Tabel Data",
      icon: Table,
      desc: "Tabel dengan baris dan kolom.",
      initialCode: `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Nama</th><th>Peran</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Adi</td><td>Admin</td></tr>
    <tr><td>2</td><td>Budi</td><td>Pengguna</td></tr>
  </tbody>
</table>`,
      hints: [commonHints.id.layout, commonHints.id.components],
      challenge: "Hapus garis tabelnya (hapus table-bordered)."
    },
    {
      id: 11,
      templateId: 'form_input',
      title: "11. Input Formulir",
      icon: PenTool,
      desc: "Input interaktif dari pengguna.",
      initialCode: `<div class="mb-3 text-start">
  <label class="form-label">Alamat email</label>
  <input type="email" class="form-control" placeholder="nama@contoh.com">
  <button class="btn btn-primary mt-2">Berlangganan</button>
</div>`,
      hints: [commonHints.id.colors, commonHints.id.shapes, commonHints.id.components],
      challenge: "Ubah teks tombol jadi 'Daftar Sekarang' dan warnanya jadi hijau."
    }
  ]
};
