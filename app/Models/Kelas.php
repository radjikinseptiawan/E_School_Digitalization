<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    //
    protected $table = "kelas";

    protected $fillable = [
        "nama_kelas",
        "kelas_dimulai",
        "kelas_diakhiri",
        "penyelenggara_kelas",
        "aktifitas_pelatihan",
        "alur_seleksi",
        "level",
        "kouta",
        "sertifikasi",
        "lokasi_pelatihan",
        "zonasi",
        "deskripsi",
        "photo_profile"
    ];
}
