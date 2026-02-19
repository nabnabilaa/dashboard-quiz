import { WorkshopModule } from '@frontend/lib/types';
import { commonHints } from './hints';
import {
  User, Type, Star, MousePointer, Menu,
  BarChart3, Bell, Layout, List, Table, PenTool
} from 'lucide-react';

/**
 * Workshop Modules Data
 * 11 hands-on coding exercises
 */
export const workshopModules: WorkshopModule[] = [
  {
    id: 1,
    templateId: 'header_avatar',
    title: "1. Avatar & Foto",
    icon: User,
    desc: "Buat foto profil bulat dengan border.",
    initialCode: `<div class="text-center p-4">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="rounded-circle shadow-lg" width="150">
</div>`,
    hints: [commonHints.shapes],
    challenge: "Ubah jadi kotak (hapus rounded-circle) atau tambah border."
  },
  {
    id: 2,
    templateId: 'header_text',
    title: "2. Teks Nama",
    icon: Type,
    desc: "Atur gaya teks nama.",
    initialCode: `<div class="text-center">
  <h1 class="fw-bold text-primary">Budi Santoso</h1>
  <p class="text-muted text-uppercase">Web Developer</p>
</div>`,
    hints: [commonHints.colors],
    challenge: "Ubah warna nama dan buat jabatan miring (fst-italic)."
  },
  {
    id: 3,
    templateId: 'skills',
    title: "3. Badges Skill",
    icon: Star,
    desc: "Label skill warna-warni.",
    initialCode: `<div class="text-center mt-3">
  <h5>Keahlian:</h5>
  <div class="d-flex justify-content-center gap-2">
    <span class="badge bg-primary">HTML</span>
    <span class="badge bg-dark">CSS</span>
    <span class="badge bg-success">JS</span>
  </div>
</div>`,
    hints: [commonHints.colors],
    challenge: "Ganti warna badge dan tambah class 'rounded-pill'."
  },
  {
    id: 4,
    templateId: 'actions',
    title: "4. Tombol Link",
    icon: MousePointer,
    desc: "Tombol aksi dengan link.",
    initialCode: `<div class="d-flex justify-content-center gap-2 mt-4">
  <a href="#" class="btn btn-dark">GitHub</a>
  <a href="#" class="btn btn-outline-primary">LinkedIn</a>
</div>`,
    hints: [commonHints.colors, commonHints.shapes],
    challenge: "Ubah tombol LinkedIn jadi solid biru (btn-primary)."
  },
  {
    id: 5,
    templateId: 'navbar',
    title: "5. Navbar",
    icon: Menu,
    desc: "Menu navigasi atas.",
    initialCode: `<div class="d-flex justify-content-between align-items-center p-3 mb-4 bg-white shadow-sm rounded-3">
  <span class="fw-bold text-primary">MyPortfolio</span>
  <nav class="d-flex gap-3">
    <a href="#" class="text-decoration-none text-dark">Home</a>
    <a href="#" class="text-decoration-none text-muted">Work</a>
  </nav>
</div>`,
    hints: [commonHints.layout],
    challenge: "Ganti background jadi gelap (bg-dark) dan teks putih."
  },
  {
    id: 6,
    templateId: 'progress',
    title: "6. Progress Bar",
    icon: BarChart3,
    desc: "Visualisasi skill.",
    initialCode: `<div class="mb-3 p-3 bg-light rounded">
  <div class="d-flex justify-content-between mb-1"><span>Coding</span><span>80%</span></div>
  <div class="progress"><div class="progress-bar bg-success" style="width: 80%"></div></div>
</div>`,
    hints: [commonHints.colors],
    challenge: "Ganti warna jadi oranye (bg-warning) dan lebar 50%."
  },
  {
    id: 7,
    templateId: 'alert',
    title: "7. Alert Pesan",
    icon: Bell,
    desc: "Kotak pesan notifikasi.",
    initialCode: `<div class="alert alert-info shadow-sm text-center">
  <strong>Open to Work!</strong> Siap menerima project.
</div>`,
    hints: [commonHints.colors],
    challenge: "Ganti jadi alert bahaya (alert-danger)."
  },
  {
    id: 8,
    templateId: 'card_container',
    title: "8. Kartu Konten",
    icon: Layout,
    desc: "Wadah utama biodata.",
    initialCode: `<div class="card border-0 shadow-lg mt-3">
  <div class="card-body p-4 text-center">
    <h5 class="text-muted">Area Konten Utama</h5>
    <p class="small">Isi biodata lengkap akan masuk di sini.</p>
  </div>
</div>`,
    hints: [commonHints.shapes],
    challenge: "Ubah background jadi abu-abu (bg-light)."
  },
  {
    id: 9,
    templateId: 'list_group',
    title: "9. List Group",
    icon: List,
    desc: "Daftar item vertikal.",
    initialCode: `<ul class="list-group shadow-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`,
    hints: [commonHints.shapes, commonHints.components],
    challenge: "Buat list jadi hitam (bg-dark text-white) di setiap item."
  },
  {
    id: 10,
    templateId: 'simple_table',
    title: "10. Tabel Data",
    icon: Table,
    desc: "Tabel baris dan kolom.",
    initialCode: `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Nama</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Adi</td><td>Admin</td></tr>
    <tr><td>2</td><td>Budi</td><td>User</td></tr>
  </tbody>
</table>`,
    hints: [commonHints.layout, commonHints.components],
    challenge: "Hapus border table (hapus table-bordered)."
  },
  {
    id: 11,
    templateId: 'form_input',
    title: "11. Formulir",
    icon: PenTool,
    desc: "Input user interaktif.",
    initialCode: `<div class="mb-3 text-start">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="name@example.com">
  <button class="btn btn-primary mt-2">Subscribe</button>
</div>`,
    hints: [commonHints.colors, commonHints.shapes, commonHints.components],
    challenge: "Ganti teks tombol jadi 'Daftar Sekarang' dan warna hijau."
  }
];
