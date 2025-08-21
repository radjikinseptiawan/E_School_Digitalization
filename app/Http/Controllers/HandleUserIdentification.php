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
        return Inertia::render("dashboard",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email,
            "kelas" => $kelas
        ]);
    }

    function profile(){
        $data = Auth::user();
        return Inertia("main-route/profile/profile",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email,
            "tanggalBergabung" => $data->created_at,
            "user_id" => $data->user_id,
            "data" => $data
        ]);
    }

    function profileEditShow($id){
        $data = Auth::user();
        $profile = Profile::where("user_id",$id)->first();
        return Inertia("main-route/profile/profileEdit",[
            "nama_lengkap" => $data->nama_lengkap,
            "email" => $data->email,
            "tanggalBergabung" => $data->created_at,
            "user_id" => $data->user_id,
            "profile" => $profile
        ]);
    }

    function profileEdit(Request $request,$id){
      try{
        $request->validate([
            "nomor_telepon" => "string",
            "domisili" => "string",
            "tanggal_lahir" => "date",
            "nama_lengkap" => "string",
            "email" => "string",
            "password" => "string"
        ]);
        
        $findProfile = Profile::where("user_id",$id)->firstorFail();

        $findProfile->updated([
            "student_id" => Str::uuid(),
            "user_id" => Auth::id(),
            "nomor_telepon" => $request->nomor_telepon,
            "domisili" => $request->domisili,
            "tanggal_lahir" => $request->tanggal_lahir,
            "nama_lengkap" => $request->nama_lengkap,
            "email" => $request->email,
            "password" => $request->password
        ]);
        
        return  redirect()->route('profile')->with('success','Data berhasil disimpan!');
      }catch(\Exception $e){
            return back()->with('error', 'Gagal update profile: ' . $e->getMessage());
        }
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
