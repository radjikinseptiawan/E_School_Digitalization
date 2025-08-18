<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HandleUserIdentification extends Controller
{
    //
    function dashboard(){
        $data = Auth::user();
        return Inertia::render("dashboard",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email
        ]);
    }

    function profile(){
        $data = Auth::user();
        return Inertia("main-route/profile/profile",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email
        ]);
    }

    function classLobby($id){
        return Inertia("main-route/class-lobby/class",[
            'id' => $id
        ]);
    }

    function materi(){
        return Inertia("main-route/class-lobby/materi");
    }

    function pengumuman(){
        return Inertia("main-route/pengumuman/pengumuman");
    }

    function kelas(){
        return inertia("main-route/kelas/kelas");
    }

    function magangLowongan(){
        return inertia("main-route/magang-lowongan/magangLowongan");
    }

    function sertifikasi(){
        return inertia("main-route/sertifikasi/sertifikasi");
    }
}
