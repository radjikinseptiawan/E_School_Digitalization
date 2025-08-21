<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
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

    protected static function boot(){
        parent::boot();

        static::creating(function($model){
            if(empty($model->kelas_id)){
                $model->kelas_id = (string) Str::uuid();
            }
        });
    }

    protected $primaryKey = "kelas_id";
    protected $keyType = "string";
    public $incrementing = false;
}
