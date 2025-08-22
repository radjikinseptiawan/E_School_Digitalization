<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Profile;
use App\Models\Students;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HandleUserIdentification extends Controller
{
    //
    function dashboard(){
        $data = Auth::user();
        $kelas = Kelas::take(3)->get();
        $profile = Profile::where("user_id",$data->user_id)->firstorFail();
        return Inertia::render("dashboard",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email,
            "kelas" => $kelas,
            "profile" => $profile
        ]);
    }

    function profile(){
        $data = Auth::user();
        $profile = Profile::where("user_id",$data->user_id)->first();
        return Inertia("main-route/profile/profile",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email,
            "tanggalBergabung" => $data->created_at,
            "user_id" => $data->user_id,
            "profile" => $profile
        ]);
    }

    function classLobby($uuid){
        $kelas = Kelas::where("kelas_id",$uuid)->firstorFail();
        return Inertia("main-route/class-lobby/class",[
            'kelas' => $kelas,
            'user' => Auth::user()
        ]);
    }

    function materi(){
        return Inertia("main-route/class-lobby/materi");
    }

    function pengumuman(){
        return Inertia("main-route/pengumuman/pengumuman");
    }

    function kelas(){
    $kelas = Kelas::all();
        return inertia("main-route/kelas/kelas",[
            'kelas' => $kelas,
            'user' => Auth::user()
        ]);
    }

    function magangLowongan(){
        return inertia("main-route/magang-lowongan/magangLowongan");
    }

    function sertifikasi(){
        return inertia("main-route/sertifikasi/sertifikasi");
    }
}
