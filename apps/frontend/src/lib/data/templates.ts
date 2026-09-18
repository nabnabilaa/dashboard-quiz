import { ComponentTemplate } from '@frontend/lib/types';
import { Bilingual } from '@frontend/i18n/LanguageProvider';
import { workshopModules } from './workshops';
import {
    Menu, User, Type, Star, BarChart3,
    MousePointer, Bell, Layout, Layers,
    List, Table, PenTool
} from 'lucide-react';

/**
 * Component Templates Data
 * Builder mode drag-and-drop components. Default code is reused from the
 * workshop modules of the same language so the builder matches what the
 * learner just practised.
 */
const build = (lang: 'en' | 'id'): Record<string, ComponentTemplate> => {
    const mods = workshopModules[lang];
    const t = lang === 'en'
        ? {
            navbar: 'Navbar Menu',
            avatar: 'Profile Photo',
            name: 'Name & Title',
            skills: 'Badge Skills',
            progress: 'Progress Bar',
            actions: 'Action Buttons',
            alert: 'Contact Alert',
            card: 'Biodata Card',
            divider: 'Separator Line',
            paragraph: 'Text Paragraph',
            list: 'List Item',
            table: 'Data Table',
            form: 'Form',
        }
        : {
            navbar: 'Menu Navbar',
            avatar: 'Foto Profil',
            name: 'Nama & Jabatan',
            skills: 'Badge Keahlian',
            progress: 'Progress Bar',
            actions: 'Tombol Aksi',
            alert: 'Alert Kontak',
            card: 'Kartu Biodata',
            divider: 'Garis Pemisah',
            paragraph: 'Paragraf Teks',
            list: 'Item Daftar',
            table: 'Tabel Data',
            form: 'Formulir',
        };

    const paragraphCode = lang === 'en'
        ? '<p class="text-center text-muted">Write your self-description here at length.</p>'
        : '<p class="text-center text-muted">Tulis deskripsi diri kamu di sini selengkapnya.</p>';

    const listCode = lang === 'en'
        ? `<ul class="list-group shadow-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`
        : `<ul class="list-group shadow-sm">
  <li class="list-group-item">Item pertama</li>
  <li class="list-group-item">Item kedua</li>
  <li class="list-group-item">Item ketiga</li>
</ul>`;

    const tableCode = lang === 'en'
        ? `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Name</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Alice</td><td>Admin</td></tr>
    <tr><td>2</td><td>Bob</td><td>User</td></tr>
  </tbody>
</table>`
        : `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Nama</th><th>Peran</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Adi</td><td>Admin</td></tr>
    <tr><td>2</td><td>Budi</td><td>Pengguna</td></tr>
  </tbody>
</table>`;

    const formCode = lang === 'en'
        ? `<div class="mb-3 text-start">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="name@example.com">
  <button class="btn btn-primary mt-2">Subscribe</button>
</div>`
        : `<div class="mb-3 text-start">
  <label class="form-label">Alamat email</label>
  <input type="email" class="form-control" placeholder="nama@contoh.com">
  <button class="btn btn-primary mt-2">Berlangganan</button>
</div>`;

    return {
        navbar: { id: 'navbar', label: t.navbar, icon: Menu, color: 'blue', defaultCode: mods[4].initialCode },
        header_avatar: { id: 'header_avatar', label: t.avatar, icon: User, color: 'blue', defaultCode: mods[0].initialCode },
        header_text: { id: 'header_text', label: t.name, icon: Type, color: 'blue', defaultCode: mods[1].initialCode },
        skills: { id: 'skills', label: t.skills, icon: Star, color: 'yellow', defaultCode: mods[2].initialCode },
        progress: { id: 'progress', label: t.progress, icon: BarChart3, color: 'green', defaultCode: mods[5].initialCode },
        actions: { id: 'actions', label: t.actions, icon: MousePointer, color: 'purple', defaultCode: mods[3].initialCode },
        alert: { id: 'alert', label: t.alert, icon: Bell, color: 'red', defaultCode: mods[6].initialCode },
        card_container: { id: 'card_container', label: t.card, icon: Layout, color: 'gray', defaultCode: mods[7].initialCode },
        divider: { id: 'divider', label: t.divider, icon: Layers, color: 'gray', defaultCode: '<hr class="my-4 border-2">' },
        text_paragraph: { id: 'text_paragraph', label: t.paragraph, icon: Type, color: 'gray', defaultCode: paragraphCode },
        list_group: { id: 'list_group', label: t.list, icon: List, color: 'green', defaultCode: listCode },
        simple_table: { id: 'simple_table', label: t.table, icon: Table, color: 'indigo', defaultCode: tableCode },
        form_input: { id: 'form_input', label: t.form, icon: PenTool, color: 'red', defaultCode: formCode },
    };
};

export const componentTemplates: Bilingual<Record<string, ComponentTemplate>> = {
    en: build('en'),
    id: build('id'),
};
