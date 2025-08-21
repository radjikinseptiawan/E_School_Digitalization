# 📚 E-School-Digitalization

Website edukasi modern berbasis teknologi **Laravel** (Backend) dan **ReactJS** (Frontend).

---

## 🚀 Fitur Utama

-   **Manajemen Profil Pengguna**: Memungkinkan pengguna untuk mengelola data pribadi seperti informasi kontak dan tanggal lahir.
-   **Dashboard Interaktif**: Halaman utama yang menampilkan ringkasan informasi dan kelas yang diikuti.
-   **Sistem Kelas**: Fungsionalitas untuk mengelola dan mengakses materi kelas.
-   **Sistem Peringatan**: Pengguna akan mendapatkan pemberitahuan penting.
-   **Lowongan Magang & Sertifikasi**: Akses ke informasi seputar peluang karir dan sertifikasi.

---

## 🛠️ Stack Teknologi

-   **Backend**: Laravel Framework
-   **Frontend**: ReactJS (menggunakan Inertia.js)
-   **Database**: MySQL
-   **Bahasa Pemrograman**: PHP & JavaScript

---

## 📝 Log Perubahan (21 Agustus 2025)

Berikut adalah ringkasan pembaruan terbaru yang diterapkan pada aplikasi:

-   **Sistem Profil Otomatis**: Menambahkan logika untuk memastikan setiap pengguna baru memiliki entri di tabel `student_info` secara otomatis.
-   **Pembaruan Profil**: Mengaktifkan fungsionalitas bagi pengguna untuk memperbarui data profil mereka (misalnya, nama, email, domisili, dan nomor telepon).
-   **Input Tanggal Lahir**: Menambahkan field `tanggal_lahir` dan mengintegrasikan fungsionalitasnya untuk pembaruan profil.
-   **Interaksi UI**: Mengimplementasikan fitur di mana pengguna dapat mengklik area profil untuk membuka jendela pemilihan file.
-   **Perbaikan Bug**: Memperbaiki masalah di mana data profil tidak ditampilkan saat pengguna baru membuat akun.

---

## ⚙️ Petunjuk Instalasi

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/nama-pengguna/nama-repo.git](https://github.com/nama-pengguna/nama-repo.git)
    cd nama-repo
    ```
2.  **Instal dependensi Laravel:**
    ```bash
    composer install
    ```
3.  **Instal dependensi ReactJS:**
    ```bash
    npm install
    ```
4.  **Konfigurasi file `.env`**: Salin `.env.example` ke `.env` dan atur koneksi database Anda.
5.  **Jalankan migrasi database:**
    ```bash
    php artisan migrate
    ```
6.  **Jalankan server pengembangan:**
    ```bash
    php artisan serve
    ```
7.  **Jalankan server frontend:**
    ```bash
    npm run dev
    ```