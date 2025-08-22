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

## 📝 Log Perubahan (22 Agustus 2025)

Berikut adalah ringkasan pembaruan terbaru yang diterapkan pada aplikasi:

-   **Sistem Profil**: Pengguna bisa menambahkan photo profile namun, ukuran dari photo belum bisa ditentukan oleh pengguna atau sistem.
-   **Validasi di input nomor telepon**: menambahkan sistem validasi pada nomor telepon menggunakan REGEX
-   **Folder service**: membuat folder `Service` untuk keperluan fitur fitur yang mungkin akan selalu di gunakan untuk kedepan nya.

---

## ⚙️ Petunjuk Instalasi

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/radjikinseptiwan/Eschool-digitalization.git](https://github.com/radjikinseptiawan/Eschool-digitalization.git)
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