import { LevelData } from '@git/types';

// 1. QUIZ DATA (9 Levels)
export const quizLevels: LevelData[] = [
    {
        title: "Inisialisasi",
        text: "Kamu baru membuat folder <code>web-sekolah</code> di laptop. Agar Git mulai memantau folder ini, apa perintah pertamanya?",
        options: [{ text: "git init", correct: true, reason: "Tepat! <code>git init</code> menciptakan folder rahasia <code>.git</code>." }, { text: "git start", correct: false, reason: "Tidak ada perintah git start." }, { text: "git create repo", correct: false, reason: "Salah." }],
        realWorld: "Selalu jalankan di awal proyek baru.",
        flowFocus: ['node-working'],
        flowText: "Fokus: Workspace",
        updateStatus: { repo: "Aktif", file: "-" }
    },
    {
        title: "Staging",
        text: "File <code>index.html</code> sudah dibuat. Masukkan ke keranjang staging agar siap disimpan.",
        options: [{ text: "git add index.html", correct: true, reason: "Betul! File masuk ke Staging Area." }, { text: "git commit", correct: false, reason: "Belum bisa commit." }, { text: "git stage", correct: false, reason: "Salah." }],
        realWorld: "Pilih file yang sudah siap saja untuk dimasukkan.",
        flowFocus: ['node-working', 'line-ws', 'node-staging'],
        flowText: "Alur: Add File",
        updateStatus: { file: "Staged" }
    },
    {
        title: "Commit",
        text: "Simpan perubahan secara permanen dengan pesan 'First commit'.",
        options: [{ text: "git commit -m 'Pesan'", correct: true, reason: "Cekrek! Tersimpan di Local Repo." }, { text: "git save", correct: false, reason: "Tidak ada git save." }, { text: "git push", correct: false, reason: "Belum saatnya push." }],
        realWorld: "Gunakan pesan commit yang jelas.",
        flowFocus: ['node-staging', 'line-sl', 'node-local'],
        flowText: "Alur: Commit",
        updateStatus: { file: "Committed" }
    },
    {
        title: "Branching",
        text: "Kamu ingin membuat fitur baru tanpa mengganggu kode utama. Buat cabang bernama <code>fitur-baru</code>.",
        options: [{ text: "git branch fitur-baru", correct: true, reason: "Cerdas! Cabang baru terbentuk." }, { text: "git new branch", correct: false, reason: "Salah sintaks." }, { text: "git checkout", correct: false, reason: "Itu untuk pindah." }],
        realWorld: "Isolasi fitur baru itu penting agar kode utama tetap stabil.",
        flowFocus: ['node-local'],
        flowText: "Strategi: Branching",
        updateStatus: { branch: "main", branchVisual: "created" }
    },
    {
        title: "Checkout",
        text: "Pindah ke branch <code>fitur-baru</code> yang sudah dibuat.",
        options: [{ text: "git checkout fitur-baru", correct: true, reason: "Sip! Sekarang kamu di branch fitur-baru." }, { text: "git move", correct: false, reason: "Salah." }, { text: "git switch branch", correct: false, reason: "Kurang tepat." }],
        realWorld: "Pastikan kamu di branch yang benar sebelum ngoding.",
        flowFocus: ['node-working'],
        flowText: "Aksi: Pindah Branch",
        updateStatus: { branch: "fitur-baru", branchActive: true }
    },
    {
        title: "Merging",
        text: "Fitur selesai. Gabungkan <code>fitur-baru</code> kembali ke <code>main</code>.",
        options: [{ text: "git merge fitur-baru", correct: true, reason: "Mantap! Kode fitur digabung ke main." }, { text: "git combine", correct: false, reason: "Salah." }, { text: "git join", correct: false, reason: "Salah." }],
        realWorld: "Hati-hati dengan 'Conflict' saat merge.",
        flowFocus: ['node-local'],
        flowText: "Aksi: Merge",
        updateStatus: { branch: "main", branchActive: false, branchVisual: "merged" }
    },
    {
        title: "Remote",
        text: "Hubungkan repo lokal ke GitHub (URL: https://github.com/saya/repo.git).",
        options: [{ text: "git remote add origin ...", correct: true, reason: "Terhubung!" }, { text: "git connect", correct: false, reason: "Salah." }, { text: "git link", correct: false, reason: "Salah." }],
        realWorld: "Biasanya remote utama dinamakan 'origin'.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "Setup: Remote",
        updateStatus: { repo: "Terhubung GitHub" }
    },
    {
        title: "Push",
        text: "Upload kodemu ke GitHub.",
        options: [{ text: "git push -u origin main", correct: true, reason: "Kode terupload." }, { text: "git pull", correct: false, reason: "Pull itu download." }, { text: "git upload", correct: false, reason: "Bukan git upload." }],
        realWorld: "Backup kode ke cloud secara rutin.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "Alur: Push",
        updateStatus: { file: "Synced" }
    },
    {
        title: "Pull",
        text: "Temanmu update kode di GitHub. Ambil perubahannya ke laptopmu.",
        options: [{ text: "git pull origin main", correct: true, reason: "Sinkronisasi berhasil." }, { text: "git push", correct: false, reason: "Salah." }, { text: "git download", correct: false, reason: "Salah." }],
        realWorld: "Pull sebelum mulai kerja agar tidak konflik.",
        flowFocus: ['node-remote', 'line-lr', 'node-local'],
        flowText: "Alur: Pull",
        visualReverse: true,
        updateStatus: { file: "Updated" }
    }
];

// 2. TERMINAL TRAINING DATA (9 Levels)
export const trainingLevels: LevelData[] = [
    {
        title: "Terminal: Mulai Proyek",
        text: "Ubah folder ini menjadi repository Git.",
        hint: "git i...",
        validCommands: ["git init"],
        successMsg: "Repository siap.",
        realWorld: "Langkah pertama wajib.",
        flowFocus: ['node-working'],
        flowText: "CMD: git init",
        updateStatus: { repo: "Aktif" }
    },
    {
        title: "Terminal: Menambah File",
        text: "Masukkan <code>style.css</code> ke Staging Area.",
        hint: "git add ...",
        validCommands: ["git add style.css", "git add .", "git add *"],
        successMsg: "File di Staging.",
        realWorld: "Gunakan titik (.) untuk semua file.",
        flowFocus: ['node-working', 'line-ws', 'node-staging'],
        flowText: "CMD: git add",
        updateStatus: { file: "Staged" }
    },
    {
        title: "Terminal: Menyimpan",
        text: "Commit dengan pesan <b>'Update gaya'</b>.",
        hint: "git commit -m \"...\"",
        validCommands: ["git commit -m \"Update gaya\"", "git commit -m 'Update gaya'"],
        successMsg: "Tersimpan.",
        realWorld: "Pesan harus deskriptif.",
        flowFocus: ['node-staging', 'line-sl', 'node-local'],
        flowText: "CMD: git commit",
        updateStatus: { file: "Committed" }
    },
    {
        title: "Terminal: Buat Branch",
        text: "Buat branch baru bernama <code>dev</code>.",
        hint: "git branch ...",
        validCommands: ["git branch dev"],
        successMsg: "Branch dev dibuat.",
        realWorld: "Jangan coding fitur di main.",
        flowFocus: ['node-local'],
        flowText: "CMD: git branch",
        updateStatus: { branch: "main", branchVisual: "created" }
    },
    {
        title: "Terminal: Pindah Branch",
        text: "Pindah ke branch <code>dev</code>.",
        hint: "git checkout ...",
        validCommands: ["git checkout dev", "git switch dev"],
        successMsg: "Aktif di dev.",
        realWorld: "Pastikan pindah sebelum coding.",
        flowFocus: ['node-working'],
        flowText: "CMD: git checkout",
        updateStatus: { branch: "dev", branchActive: true }
    },
    {
        title: "Terminal: Merge",
        text: "Gabungkan <code>dev</code> ke <code>main</code> (Anggap kamu sudah balik ke main).",
        hint: "git merge ...",
        validCommands: ["git merge dev"],
        successMsg: "Kode digabung.",
        realWorld: "Selesaikan konflik jika ada.",
        flowFocus: ['node-local'],
        flowText: "CMD: git merge",
        updateStatus: { branch: "main", branchActive: false, branchVisual: "merged" }
    },
    {
        title: "Terminal: Remote",
        text: "Tambahkan remote origin (URL bebas/placeholder).",
        hint: "git remote add origin https://...",
        validCommands: ["git remote add origin"],
        isPartialMatch: true,
        successMsg: "Remote terhubung.",
        realWorld: "Koneksi ke server.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "CMD: git remote add",
        updateStatus: { repo: "Terhubung GitHub" }
    },
    {
        title: "Terminal: Push",
        text: "Upload ke origin main.",
        hint: "git push -u ...",
        validCommands: ["git push -u origin main", "git push origin main", "git push"],
        successMsg: "Terupload.",
        realWorld: "Amankan kodemu di cloud.",
        flowFocus: ['node-local', 'line-lr', 'node-remote'],
        flowText: "CMD: git push",
        updateStatus: { file: "Synced" }
    },
    {
        title: "Terminal: Pull",
        text: "Ambil update dari origin main.",
        hint: "git pull ...",
        validCommands: ["git pull origin main", "git pull"],
        successMsg: "Sinkron.",
        realWorld: "Cegah konflik dengan rutin pull.",
        flowFocus: ['node-remote', 'line-lr', 'node-local'],
        flowText: "CMD: git pull",
        visualReverse: true,
        updateStatus: { file: "Updated" }
    }
];
