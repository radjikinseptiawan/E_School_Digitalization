<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kelas',function(Blueprint $table){
            $table->id();
            $table->string("nama_kelas");
            $table->date("kelas_dimulai");
            $table->date("kelas_diakhiri");
            $table->string("penyelenggara_kelas");
            $table->string("aktifitas_pelatihan");
            $table->string("alur_seleksi");
            $table->string("level");
            $table->integer("kouta");
            $table->string("sertifikasi");
            $table->string("lokasi_pelatihan");
            $table->string("zonasi");
            $table->text("deskripsi")->nullable();
            $table->string("photo_profile")->nullable();
            $table->timestamps();
        });
        //


        Schema::create("list_peserta",function(Blueprint $table){
            $table->id();
            $table->foreignId("user_id")->constrained("users")->onDelete("cascade");
            $table->foreignID("kelas_id")->constrained("kelas")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       Schema::dropIfExists("list_peserta");
       Schema::dropIfExists("kelas");
            //
    
    }
};
